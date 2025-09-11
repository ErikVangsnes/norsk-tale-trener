import { useState } from "react";
import { Search, ChefHat, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-cooking.jpg";
import { IngredientsInput } from "@/components/IngredientsInput";
import { RecipeCard } from "@/components/RecipeCard";
import { SubstituteSuggestions } from "@/components/SubstituteSuggestions";

const Index = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const mockRecipes = [
    {
      id: 1,
      title: "Pasta Carbonara",
      description: "Kremet og deilig carbonara med egg, bacon og parmesan",
      ingredients: ["egg", "bacon", "pasta", "parmesan", "hvitløk"],
      cookingTime: "20 min",
      difficulty: "Lett",
      totalIngredients: 5
    },
    {
      id: 2,  
      title: "Tomatsalat",
      description: "Frisk salat med tomater, løk og basilikum",
      ingredients: ["tomat", "løk", "basilikum", "olivenolej", "salt"],
      cookingTime: "10 min", 
      difficulty: "Mycket lett",
      totalIngredients: 5
    },
    {
      id: 3,
      title: "Stekt Kylling",
      description: "Saftig kyllingbryst med urter og grønnsaker",
      ingredients: ["kylling", "paprika", "løk", "rosmarin", "salt"],
      cookingTime: "35 min",
      difficulty: "Middels", 
      totalIngredients: 5
    }
  ];

  // Kalkuler dynamisk hvilke oppskrifter som matcher
  const recipesWithMatches = mockRecipes.map(recipe => ({
    ...recipe,
    availableIngredients: selectedIngredients.filter(ing => 
      recipe.ingredients.some(recipeIng => recipeIng.toLowerCase() === ing.toLowerCase())
    ).length
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

  console.log("Selected ingredients:", selectedIngredients);
  console.log("Recipes with matches:", recipesWithMatches);
  console.log("Matching recipes:", matchingRecipes);

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
        {selectedIngredients.length > 0 && (
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Foreslåtte oppskrifter
              </h2>
              <p className="text-muted-foreground text-lg">
                Basert på ingrediensene du har valgt
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingRecipes.length > 0 ? (
                matchingRecipes.map(recipe => (
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
                    Ingen oppskrifter funnet med disse ingrediensene. Prøv å legge til flere!
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