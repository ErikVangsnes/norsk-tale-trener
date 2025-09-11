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
    const results: SearchResult[] = [];
    
    // Hvis ingen søkeord, vis alle oppskrifter
    if (!query.trim()) {
      return recipes.map(recipe => ({
        recipe,
        relevanceScore: 0.5,
        matchType: 'exact' as const,
        matchedTerms: []
      }));
    }
    
    // Enkel søk i tittel og beskrivelse
    for (const recipe of recipes) {
      const queryLower = query.toLowerCase();
      const titleLower = recipe.title.toLowerCase();
      const descLower = recipe.description.toLowerCase();
      
      if (titleLower.includes(queryLower) || descLower.includes(queryLower)) {
        results.push({
          recipe,
          relevanceScore: 1.0,
          matchType: 'exact' as const,
          matchedTerms: [recipe.title]
        });
      }
    }
    
    return results;
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