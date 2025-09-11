import { Recipe, DetailedIngredient } from "@/data/recipes";
import { FuzzyMatcher } from "./fuzzySearch";
import { getAllSynonyms, normalizeIngredient } from "./synonyms";

export interface IngredientMatch {
  recipe: Recipe;
  matchScore: number;
  availableIngredients: number;
  totalIngredients: number;
  matchPercentage: number;
  missingIngredients: string[];
  matchedIngredients: string[];
  substitutionSuggestions: Array<{
    missing: string;
    substitute: string;
    confidence: number;
  }>;
}

export interface SearchResult {
  recipe: Recipe;
  relevanceScore: number;
  matchType: 'exact' | 'fuzzy' | 'ingredient' | 'description';
  matchedTerms: string[];
}

export class IngredientMatcher {
  // Vanlige substitusjoner for ingredienser
  private static substitutions: Record<string, Array<{ substitute: string; confidence: number }>> = {
    "melk": [
      { substitute: "mandmelk", confidence: 0.9 },
      { substitute: "havrmelk", confidence: 0.8 },
      { substitute: "fløte", confidence: 0.7 }
    ],
    "smør": [
      { substitute: "margarin", confidence: 0.9 },
      { substitute: "olivenolej", confidence: 0.7 },
      { substitute: "kokosolje", confidence: 0.6 }
    ],
    "hvitløk": [
      { substitute: "hvitløkspulver", confidence: 0.8 },
      { substitute: "sjalottløk", confidence: 0.6 }
    ],
    "løk": [
      { substitute: "sjalottløk", confidence: 0.8 },
      { substitute: "purreløk", confidence: 0.6 },
      { substitute: "rødløk", confidence: 0.7 }
    ],
    "parmesan": [
      { substitute: "pecorino", confidence: 0.9 },
      { substitute: "grana padano", confidence: 0.8 },
      { substitute: "cheddar", confidence: 0.6 }
    ],
    "basilikum": [
      { substitute: "oregano", confidence: 0.7 },
      { substitute: "timian", confidence: 0.6 },
      { substitute: "persille", confidence: 0.5 }
    ],
    "champignon": [
      { substitute: "andre sopper", confidence: 0.9 },
      { substitute: "shiitake", confidence: 0.7 }
    ],
    "pasta": [
      { substitute: "ris", confidence: 0.6 },
      { substitute: "nudler", confidence: 0.8 }
    ]
  };

  // Hent alle ingredienser fra en oppskrift som tekst
  private static getRecipeIngredients(recipe: Recipe): string[] {
    if (Array.isArray(recipe.ingredients)) {
      if (recipe.hasDetailedIngredients) {
        return (recipe.ingredients as DetailedIngredient[]).map(ing => 
          normalizeIngredient(ing.name)
        );
      } else {
        return (recipe.ingredients as string[]).map(ing => 
          normalizeIngredient(ing)
        );
      }
    }
    return [];
  }

  // Beregn ingredient matching score
  static calculateIngredientMatch(
    availableIngredients: string[],
    recipe: Recipe
  ): IngredientMatch {
    const recipeIngredients = this.getRecipeIngredients(recipe);
    const normalizedAvailable = availableIngredients.map(ing => normalizeIngredient(ing));
    
    let matchedIngredients: string[] = [];
    let missingIngredients: string[] = [];
    
    // Sjekk hver ingredient i oppskriften
    for (const recipeIng of recipeIngredients) {
      let found = false;
      
      // Først, sjekk eksakt match og synonymer
      const synonyms = getAllSynonyms(recipeIng);
      
      for (const available of normalizedAvailable) {
        const availableSynonyms = getAllSynonyms(available);
        
        // Sjekk om noen synonymer matcher
        if (synonyms.some(syn => availableSynonyms.includes(syn))) {
          matchedIngredients.push(recipeIng);
          found = true;
          break;
        }
      }
      
      // Hvis ikke funnet, prøv fuzzy matching
      if (!found) {
        for (const available of normalizedAvailable) {
          const similarity = FuzzyMatcher.similarity(recipeIng, available);
          if (similarity > 0.7) { // 70% likhet
            matchedIngredients.push(recipeIng);
            found = true;
            break;
          }
        }
      }
      
      if (!found) {
        missingIngredients.push(recipeIng);
      }
    }
    
    const availableCount = matchedIngredients.length;
    const totalCount = recipeIngredients.length;
    const matchPercentage = totalCount > 0 ? (availableCount / totalCount) * 100 : 0;
    
    // Beregn match score - favoriser oppskrifter med høy match percentage
    let matchScore = matchPercentage / 100;
    
    // Bonus for oppskrifter hvor du har alle ingrediensene
    if (availableCount === totalCount && totalCount > 0) {
      matchScore += 0.2;
    }
    
    // Bonus for oppskrifter med færre totale ingredienser (enklere å lage)
    if (totalCount <= 5) {
      matchScore += 0.1;
    }
    
    // Generer substitusjonsforslag
    const substitutionSuggestions = missingIngredients.flatMap(missing => {
      const subs = this.substitutions[missing] || [];
      return subs.map(sub => ({
        missing,
        substitute: sub.substitute,
        confidence: sub.confidence
      }));
    }).sort((a, b) => b.confidence - a.confidence);
    
    return {
      recipe,
      matchScore,
      availableIngredients: availableCount,
      totalIngredients: totalCount,
      matchPercentage,
      missingIngredients,
      matchedIngredients,
      substitutionSuggestions
    };
  }

  // Intelligent søk som kombinerer tekst-søk og ingredient-matching
  static intelligentSearch(
    query: string,
    availableIngredients: string[],
    recipes: Recipe[]
  ): SearchResult[] {
    console.log("intelligentSearch kallt med query:", query, "recipes:", recipes.length);
    console.log("Alle oppskrifter titler:", recipes.map(r => r.title));
    const results: SearchResult[] = [];
    
    // Hvis ingen søkeord, vis alle oppskrifter sortert etter ingredient match
    if (!query.trim() && availableIngredients.length === 0) {
      console.log("Tomt søk, returnerer alle oppskrifter");
      return recipes.map(recipe => ({
        recipe,
        relevanceScore: 0.5,
        matchType: 'exact' as const,
        matchedTerms: []
      }));
    }
    
    // Test for "kjøttkaker" søk
    if (query.toLowerCase().includes('kjøttkaker')) {
      console.log("Søker spesifikt etter kjøttkaker");
      const kjottkakerRecipe = recipes.find(r => {
        console.log("Sjekker oppskrift:", r.title, "inneholder kjøttkaker?", r.title.toLowerCase().includes('kjøttkaker'));
        return r.title.toLowerCase().includes('kjøttkaker');
      });
      console.log("Fant kjøttkaker oppskrift:", kjottkakerRecipe ? kjottkakerRecipe.title : "IKKE FUNNET");
      if (kjottkakerRecipe) {
        return [{
          recipe: kjottkakerRecipe,
          relevanceScore: 1.0,
          matchType: 'exact' as const,
          matchedTerms: [kjottkakerRecipe.title]
        }];
      }
    }
    
    for (const recipe of recipes) {
      let relevanceScore = 0;
      let matchType: 'exact' | 'fuzzy' | 'ingredient' | 'description' = 'exact';
      let matchedTerms: string[] = [];
      
      // 1. Søk i tittel (høyest prioritet)
      if (query.trim()) {
        const titleSimilarity = FuzzyMatcher.partialMatch(query, recipe.title);
        if (titleSimilarity > 0) {
          relevanceScore += titleSimilarity * 1.0;
          matchedTerms.push(recipe.title);
          if (titleSimilarity > 0.8) {
            matchType = 'exact';
          } else {
            matchType = 'fuzzy';
          }
        }
        
        // 2. Søk i beskrivelse
        const descriptionSimilarity = FuzzyMatcher.partialMatch(query, recipe.description);
        if (descriptionSimilarity > 0) {
          relevanceScore += descriptionSimilarity * 0.6;
          matchedTerms.push('beskrivelse');
          if (matchType === 'exact') matchType = 'description';
        }
        
        // 3. Søk i ingredienser
        const recipeIngredients = this.getRecipeIngredients(recipe);
        for (const ingredient of recipeIngredients) {
          const ingredientSimilarity = FuzzyMatcher.partialMatch(query, ingredient);
          if (ingredientSimilarity > 0) {
            relevanceScore += ingredientSimilarity * 0.8;
            matchedTerms.push(ingredient);
            if (matchType === 'exact') matchType = 'ingredient';
          }
        }
        
        // 4. Søk i instruksjoner
        const allInstructions = recipe.instructions.join(' ');
        const instructionSimilarity = FuzzyMatcher.partialMatch(query, allInstructions);
        if (instructionSimilarity > 0) {
          relevanceScore += instructionSimilarity * 0.4;
          matchedTerms.push('instruksjoner');
        }
      }
      
      // 5. Ingredient matching bonus
      if (availableIngredients.length > 0) {
        const ingredientMatch = this.calculateIngredientMatch(availableIngredients, recipe);
        relevanceScore += ingredientMatch.matchScore * 0.5;
        
        // Extra boost for high ingredient matches
        if (ingredientMatch.matchPercentage > 80) {
          relevanceScore += 0.3;
        }
      }
      
      // Kun inkluder oppskrifter med en viss relevans  
      if (relevanceScore > 0 || (!query.trim() && availableIngredients.length === 0)) {
        results.push({
          recipe,
          relevanceScore: Math.max(relevanceScore, 0.1),
          matchType,
          matchedTerms: [...new Set(matchedTerms)] // fjern duplikater
        });
      }
    }
    
    // Sorter etter relevance score
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  // Finn oppskrifter basert kun på tilgjengelige ingredienser
  static findRecipesByIngredients(
    availableIngredients: string[],
    recipes: Recipe[]
  ): IngredientMatch[] {
    if (availableIngredients.length === 0) {
      return recipes.map(recipe => this.calculateIngredientMatch([], recipe));
    }
    
    return recipes
      .map(recipe => this.calculateIngredientMatch(availableIngredients, recipe))
      .sort((a, b) => {
        // Sorter først etter match percentage, så etter match score
        if (Math.abs(a.matchPercentage - b.matchPercentage) > 5) {
          return b.matchPercentage - a.matchPercentage;
        }
        return b.matchScore - a.matchScore;
      });
  }
}