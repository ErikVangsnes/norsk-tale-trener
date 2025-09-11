import { useState } from "react";
import { Search, ChefHat, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-cooking.jpg";
import { IngredientsInput } from "@/components/IngredientsInput";
import { RecipeCard } from "@/components/RecipeCard";
import { SubstituteSuggestions } from "@/components/SubstituteSuggestions";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { recipes, Recipe } from "@/data/recipes";
import { getFavoriteRecipeIds } from "@/components/FavoriteButton";

const Index = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  
  const favoriteIds = getFavoriteRecipeIds();

  // Kalkuler dynamisk hvilke oppskrifter som matcher
  const recipesWithMatches = filteredRecipes.map(recipe => ({
    ...recipe,
    availableIngredients: selectedIngredients.filter(ing => {
      if (Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0) {
        // Check if it's DetailedIngredient[] or string[]
        if (typeof recipe.ingredients[0] === 'object') {
          const detailedIngredients = recipe.ingredients as any[];
          return detailedIngredients.some(recipeIng => 
            recipeIng.name.toLowerCase() === ing.toLowerCase()
          );
        } else {
          // It's string[]
          const stringIngredients = recipe.ingredients as string[];
          return stringIngredients.some(recipeIng => 
            recipeIng.toLowerCase() === ing.toLowerCase()
          );
        }
      }
      return false;
    }).length
  }));

  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing !== ingredient));
  };

  const matchingRecipes = recipesWithMatches.filter(recipe => 
    recipe.availableIngredients > 0
  ).sort((a, b) => b.availableIngredients - a.availableIngredients);

  // Få favoritt-oppskrifter
  const favoriteRecipes = recipesWithMatches.filter(recipe => 
    favoriteIds.includes(recipe.id)
  );

  const displayedRecipes = activeTab === "favorites" ? favoriteRecipes : matchingRecipes;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <ChefHat className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Oppskrifter fra ditt kjøleskap
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            Fortell meg hvilke ingredienser du har, så foreslår jeg deilige oppskrifter du kan lage akkurat nå
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Kom i gang
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Utforsk oppskrifter
            </h2>
            <p className="text-muted-foreground text-lg">
              Søk, filtrer og finn din neste favorittrett
            </p>
          </div>
          
          <SearchAndFilter 
            recipes={recipes}
            onFilteredRecipes={setFilteredRecipes}
          />
        </section>

        {/* Ingredients Input Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Hvilke ingredienser har du?
            </h2>
            <p className="text-muted-foreground text-lg">
              Legg til ingrediensene du har tilgjengelig hjemme
            </p>
          </div>
          
          <IngredientsInput 
            onAddIngredient={addIngredient}
            selectedIngredients={selectedIngredients}
            onRemoveIngredient={removeIngredient}
          />
        </section>

        {/* Recipes Section */}
        {(selectedIngredients.length > 0 || favoriteIds.length > 0) && (
          <section className="mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  onClick={() => setActiveTab("all")}
                  className="flex items-center gap-2"
                >
                  <ChefHat className="w-4 h-4" />
                  Foreslåtte oppskrifter
                  {selectedIngredients.length > 0 && (
                    <Badge variant="secondary">{matchingRecipes.length}</Badge>
                  )}
                </Button>
                
                {favoriteIds.length > 0 && (
                  <Button
                    variant={activeTab === "favorites" ? "default" : "outline"}
                    onClick={() => setActiveTab("favorites")}
                    className="flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Mine favoritter
                    <Badge variant="secondary">{favoriteIds.length}</Badge>
                  </Button>
                )}
              </div>
              
              <p className="text-muted-foreground text-lg">
                {activeTab === "all" 
                  ? "Basert på ingrediensene du har valgt" 
                  : "Dine lagrede favoritt-oppskrifter"
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRecipes.length > 0 ? (
                displayedRecipes.map(recipe => (
                  <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe} 
                    selectedIngredients={selectedIngredients}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Lightbulb className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-xl text-muted-foreground">
                    {activeTab === "all" 
                      ? "Ingen oppskrifter funnet med disse ingrediensene. Prøv å legge til flere!"
                      : "Du har ingen favoritt-oppskrifter ennå. Klikk på hjertet på oppskrifter du liker!"
                    }
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Substitutes Section */}
        {selectedIngredients.length > 0 && (
          <section>
            <SubstituteSuggestions selectedIngredients={selectedIngredients} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;