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
    // Hvis ingen søkeord, vis alle oppskrifter med litt randomisering
    if (!query.trim()) {
      return recipes.map(recipe => ({
        recipe,
        relevanceScore: 0.5 + Math.random() * 0.1, // Litt tilfeldig for variasjon
        matchType: 'exact' as const,
        matchedTerms: []
      })).sort((a, b) => b.relevanceScore - a.relevanceScore);
    }
    
    // Bruk FuzzyMatcher for bedre søkeresultater
    const searchResults = FuzzyMatcher.search(
      query,
      recipes,
      (recipe) => [
        recipe.title,
        recipe.description,
        recipe.category,
        ...this.getRecipeIngredients(recipe)
      ],
      0.2 // Lavere terskel for mer inkluderende søk
    );
    
    // Konverter til SearchResult format med forbedret poenggivning
    const results: SearchResult[] = searchResults.map(result => {
      let matchType: 'exact' | 'fuzzy' | 'ingredient' | 'description' = 'fuzzy';
      let relevanceScore = result.matchScore;
      
      // Gi bonus for eksakt match i tittel
      if (result.title.toLowerCase().includes(query.toLowerCase())) {
        matchType = 'exact';
        relevanceScore += 0.3;
      }
      
      // Gi bonus for match i ingredienser
      const recipeIngredients = this.getRecipeIngredients(result);
      if (recipeIngredients.some(ing => 
        ing.toLowerCase().includes(query.toLowerCase()) ||
        FuzzyMatcher.similarity(ing, query) > 0.7
      )) {
        matchType = 'ingredient';
        relevanceScore += 0.2;
      }
      
      // Gi bonus for match i kategori
      if (result.category.toLowerCase().includes(query.toLowerCase())) {
        relevanceScore += 0.15;
      }
      
      return {
        recipe: result,
        relevanceScore: Math.min(relevanceScore, 1.0),
        matchType,
        matchedTerms: result.matchedFields
      };
    });
    
    // Sorter etter relevans med litt diversitet
    return results.sort((a, b) => {
      // Primær sortering etter relevance score
      const scoreDiff = b.relevanceScore - a.relevanceScore;
      if (Math.abs(scoreDiff) > 0.1) {
        return scoreDiff;
      }
      
      // Sekundær sortering: foretrekk forskjellige kategorier
      if (a.recipe.category !== b.recipe.category) {
        return Math.random() - 0.5; // Tilfeldig for diversitet
      }
      
      return scoreDiff;
    });
  }

  // Finn oppskrifter basert kun på tilgjengelige ingredienser
  static findRecipesByIngredients(
    availableIngredients: string[],
    recipes: Recipe[],
    excludedIngredients: string[] = []
  ): IngredientMatch[] {
    // Filtrer ut oppskrifter som inneholder ekskluderte ingredienser
    let filteredRecipes = recipes;
    if (excludedIngredients.length > 0) {
      filteredRecipes = recipes.filter(recipe => {
        const recipeIngredients = this.getRecipeIngredients(recipe);
        return !recipeIngredients.some(ingredient => 
          excludedIngredients.some(excluded => 
            ingredient.toLowerCase().includes(excluded.toLowerCase()) ||
            FuzzyMatcher.similarity(ingredient, excluded) > 0.8
          )
        );
      });
    }
    
    if (availableIngredients.length === 0) {
      // Når ingen ingredienser er valgt, vis en blanding med litt randomisering
      return filteredRecipes
        .map(recipe => ({
          ...this.calculateIngredientMatch([], recipe),
          matchScore: Math.random() * 0.3 + 0.1 // Litt tilfeldig score for variasjon
        }))
        .sort((a, b) => b.matchScore - a.matchScore);
    }
    
    const matches = filteredRecipes
      .map(recipe => this.calculateIngredientMatch(availableIngredients, recipe))
      .filter(match => match.matchPercentage >= 40); // Krev minimum 40% ingrediensmatch

    // Forbedret sorteringsalgoritme med større variasjon
    return matches.sort((a, b) => {
      // Først: favoriser oppskrifter med høy match percentage
      const matchDiff = b.matchPercentage - a.matchPercentage;
      if (Math.abs(matchDiff) > 20) {
        return matchDiff;
      }
      
      // Så: legg til betydelig tilfeldig variasjon for diversitet
      const randomFactor = (Math.random() - 0.5) * 0.4;
      
      // Bruk en kombinasjon av match percentage og tilfeldig faktor
      const aScore = a.matchPercentage + randomFactor * 20;
      const bScore = b.matchPercentage + randomFactor * 20;
      
      return bScore - aScore;
    });
  }

  // Ny metode for å finne oppskrifter med ekskludering
  static findRecipesWithExclusions(
    availableIngredients: string[],
    excludedIngredients: string[],
    recipes: Recipe[]
  ): IngredientMatch[] {
    return this.findRecipesByIngredients(availableIngredients, recipes, excludedIngredients);
  }
}