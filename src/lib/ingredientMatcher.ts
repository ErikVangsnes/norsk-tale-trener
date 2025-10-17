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
  // Definerer kjøtttyper som ikke kan substituere hverandre
  private static meatTypes: Record<string, string[]> = {
    "kylling": ["kylling", "kyllingbryst", "kyllinglår", "kyllingfilet"],
    "svin": ["svinekjøtt", "bacon", "skinke", "svineribbe", "svinefilet", "karbonadedeig"],
    "storfe": ["biff", "oksekjøtt", "entrecôte", "mørbrad"],
    "kjøttdeig": ["kjøttdeig", "hakket kjøtt"],
    "pølse": ["pølse", "pølser", "wienerbrød", "grillpølse"],
    "laks": ["laks", "laksefilet", "røkt laks"],
    "torsk": ["torsk", "hvit fisk", "sei", "hyse"],
    "kveite": ["kveite"],
    "kalkun": ["kalkun", "kalkunbryst"]
  };

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

  // Hjelpefunksjon for å sjekke om en ingrediens er en kjøtttype
  private static getMeatCategory(ingredient: string): string | null {
    const normalized = normalizeIngredient(ingredient);
    
    // Spesiell håndtering for pølse - matche alt som inneholder "pølse" eller "pølser"
    if (normalized.includes("polse") || normalized.includes("polser")) {
      return "pølse";
    }
    
    for (const [category, types] of Object.entries(this.meatTypes)) {
      if (types.some(type => normalized.includes(type) || type.includes(normalized))) {
        return category;
      }
    }
    return null;
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
      
      // Spesialhåndtering for kjøtt - sjekk om oppskriften krever en annen kjøtttype
      const recipeIngMeatCategory = this.getMeatCategory(recipeIng);
      if (recipeIngMeatCategory) {
        // Sjekk om brukeren har noen kjøtttype tilgjengelig
        const availableMeatCategories = normalizedAvailable
          .map(ing => this.getMeatCategory(ing))
          .filter(cat => cat !== null);
        
        // Hvis oppskriften krever en kjøtttype, men brukeren har en annen, gi ikke match
        for (const available of normalizedAvailable) {
          const availableMeatCat = this.getMeatCategory(available);
          if (availableMeatCat === recipeIngMeatCategory) {
            matchedIngredients.push(recipeIng);
            found = true;
            break;
          }
        }
        
        if (!found) {
          missingIngredients.push(recipeIng);
        }
        continue; // Gå til neste ingrediens
      }
      
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
      
      // Hvis ikke funnet, prøv fuzzy matching (MYE STRENGERE)
      if (!found) {
        for (const available of normalizedAvailable) {
          const similarity = FuzzyMatcher.similarity(recipeIng, available);
          if (similarity > 0.85) { // 85% likhet - MYE STRENGERE for å unngå falske matches
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
      matchScore += 0.2; // Redusert fra 0.3
    }
    
    // Straff for veldig enkle oppskrifter (under 6 ingredienser)
    // for å unngå at de alltid dominerer søket
    if (totalCount < 6) {
      matchScore *= 0.4; // Kraftig nedprioritering
    }
    
    // Bonus for mer komplekse oppskrifter (7-12 ingredienser)
    if (totalCount >= 7 && totalCount <= 12 && matchPercentage >= 70) {
      matchScore += 0.15;
    }
    
    // Straff for oppskrifter der du har veldig få ingredienser
    if (matchPercentage < 30) {
      matchScore *= 0.3; // Reduser score kraftig
    } else if (matchPercentage < 50) {
      matchScore *= 0.6; // Moderat straff
    }
    
    // Preferanser basert på tilgjengelig kjøtt (spesielt kjøttdeig)
    const availableMeatCats = new Set(
      normalizedAvailable
        .map(ing => this.getMeatCategory(ing))
        .filter((c): c is string => c !== null)
    );
    const recipeMeatCats = new Set(
      recipeIngredients
        .map(ing => this.getMeatCategory(ing))
        .filter((c): c is string => c !== null)
    );

    if (availableMeatCats.size > 0) {
      const hasAnyMeatInRecipe = recipeMeatCats.size > 0;
      const hasGroundBeefAvailable = availableMeatCats.has("kjøttdeig");
      const matchesGroundBeef = recipeMeatCats.has("kjøttdeig");

      if (hasGroundBeefAvailable) {
        if (matchesGroundBeef) {
          matchScore += 0.25; // Fremhev oppskrifter som bruker kjøttdeig
        } else if (!hasAnyMeatInRecipe) {
          matchScore *= 0.5; // Nedprioriter kjøttfrie når bruker har kjøttdeig
        } else {
          matchScore *= 0.9; // Litt nedprioritering for annet kjøtt
        }
      } else {
        // Generell regel: har man kjøtt, prioriter oppskrifter med kjøtt
        if (!hasAnyMeatInRecipe) {
          matchScore *= 0.8;
        }
      }
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

    // KRITISK: Filtrer ut oppskrifter med feil proteintype
    if (availableIngredients.length > 0) {
      const normalizedAvailable = availableIngredients.map(ing => normalizeIngredient(ing));
      const availableProteinCategories = new Set(
        normalizedAvailable
          .map(ing => this.getMeatCategory(ing))
          .filter((c): c is string => c !== null)
      );

      // Hvis brukeren har valgt proteiner, filtrer oppskrifter med andre proteintyper
      if (availableProteinCategories.size > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => {
          const recipeIngredients = this.getRecipeIngredients(recipe);
          const recipeProteinCategories = recipeIngredients
            .map(ing => this.getMeatCategory(ing))
            .filter((c): c is string => c !== null);

          // Hvis oppskriften har proteiner, må minst én matche brukerens proteiner
          if (recipeProteinCategories.length > 0) {
            return recipeProteinCategories.some(cat => availableProteinCategories.has(cat));
          }

          // Oppskrifter uten proteiner er OK
          return true;
        });
      }
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
      .filter(match => {
        // STRENGERE FILTRERING: Krev minimum 50% match OG minst 1 matchet ingrediens
        return match.matchPercentage >= 50 && match.matchedIngredients.length > 0;
      });

    // Forbedret sorteringsalgoritme - prioriter oppskrifter med høyere matchPercentage
    return matches.sort((a, b) => {
      // Først: Prioriter oppskrifter med høyere match percentage
      const percentageDiff = b.matchPercentage - a.matchPercentage;
      if (Math.abs(percentageDiff) > 20) {
        return percentageDiff;
      }

      // Deretter: bruk matchScore som tar hensyn til bonuser/straffer
      const scoreDiff = b.matchScore - a.matchScore;
      if (Math.abs(scoreDiff) > 0.2) {
        return scoreDiff;
      }
      
      // Sekundært: legg til litt tilfeldig variasjon for diversitet blant like scorer
      const randomFactor = (Math.random() - 0.5) * 0.2; // Redusert randomisering
      
      // Kompleksitetsbonus for å prioritere interessante oppskrifter
      const complexityBonus = (a.totalIngredients - b.totalIngredients) * 0.01;
      
      return (b.matchScore - a.matchScore) + randomFactor + complexityBonus;
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