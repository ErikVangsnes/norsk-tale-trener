import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Star, ChefHat, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { recipes, DetailedIngredient } from "@/data/recipes";
import { ServingCalculator } from "@/components/ServingCalculator";
import { FavoriteButton } from "@/components/FavoriteButton";
import { ShoppingListGenerator } from "@/components/ShoppingListGenerator";
import { CookingTimer } from "@/components/CookingTimer";
import { ReminderButton } from "@/components/ReminderButton";

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === Number(id));
  const [selectedServings, setSelectedServings] = useState(recipe?.servings || 4);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Oppskrift ikke funnet</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbake til forsiden
          </Button>
        </div>
      </div>
    );
  }

  // Sjekk om oppskriften har detaljerte ingredienser
  const hasDetailedIngredients = recipe.hasDetailedIngredients && 
    Array.isArray(recipe.ingredients) && 
    recipe.ingredients.length > 0 && 
    typeof recipe.ingredients[0] === 'object';

  // Kalkuler justerte mengder kun hvis vi har detaljerte ingredienser
  const adjustedIngredients = hasDetailedIngredients 
    ? (recipe.ingredients as DetailedIngredient[]).map(ingredient => {
        const multiplier = selectedServings / recipe.servings;
        const adjustedAmount = ingredient.amount * multiplier;
        
        // Rund av til fornuftige tall
        let roundedAmount;
        if (adjustedAmount < 1) {
          roundedAmount = Math.round(adjustedAmount * 10) / 10;
        } else if (adjustedAmount < 10) {
          roundedAmount = Math.round(adjustedAmount * 2) / 2;
        } else {
          roundedAmount = Math.round(adjustedAmount);
        }
        
        return {
          ...ingredient,
          adjustedAmount: roundedAmount
        };
      })
    : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbake til oppskrifter
          </Button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {recipe.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {recipe.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CookingTimer 
                    cookingTime={recipe.cookingTime}
                    recipeName={recipe.title}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{selectedServings} porsjoner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
            
            <ChefHat className="w-12 h-12 text-accent" />
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mt-6">
            <FavoriteButton 
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              size="lg"
              showLabel
            />
            <ReminderButton
              recipeName={recipe.title}
              variant="outline"
              size="default"
            />
            <ShoppingListGenerator 
              recipe={recipe}
              selectedIngredients={[]} // Empty since we're on recipe page
              servings={selectedServings}
            />
          </div>
        </div>

        <div className={`grid ${hasDetailedIngredients ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8`}>
          {/* Recipe Image */}
          {recipe.image && (
            <Card className="shadow-medium">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="w-full justify-center">
                  {recipe.category}
                </Badge>
              </CardContent>
            </Card>
          )}

          {/* Serving Calculator - Only show for detailed recipes */}
          {hasDetailedIngredients && (
            <div className="lg:col-span-1">
              <ServingCalculator 
                originalServings={recipe.servings}
                onServingChange={setSelectedServings}
              />
            </div>
          )}

          {/* Ingredients */}
          <Card className="shadow-medium md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Ingredienser</span>
                <Badge variant="secondary">{recipe.ingredients.length} stk</Badge>
              </CardTitle>
              {hasDetailedIngredients && selectedServings !== recipe.servings && (
                <p className="text-sm text-accent">
                  Mengdene er justert for {selectedServings} porsjoner
                </p>
              )}
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {hasDetailedIngredients ? (
                  // Detaljerte ingredienser med mengder
                  adjustedIngredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-bold text-accent">
                            {ingredient.adjustedAmount} {ingredient.unit}
                          </span>
                          <span className="capitalize text-foreground">
                            {ingredient.name}
                          </span>
                        </div>
                        {selectedServings !== recipe.servings && (
                          <div className="text-xs text-muted-foreground mt-1">
                            Opprinnelig: {ingredient.amount} {ingredient.unit}
                          </div>
                        )}
                      </div>
                    </li>
                  ))
                ) : (
                  // Enkle ingredienser uten mengder
                  (recipe.ingredients as string[]).map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="capitalize font-medium">{ingredient}</span>
                    </li>
                  ))
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className={`shadow-medium ${recipe.image ? 'lg:col-span-2' : hasDetailedIngredients ? 'lg:col-span-2' : 'lg:col-span-2'}`}>
            <CardHeader>
              <CardTitle>Fremgangsmåte</CardTitle>
              <CardDescription>
                Følg disse stegene for å lage {recipe.title} til {selectedServings} {selectedServings === 1 ? "person" : "personer"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground leading-relaxed pt-1">{step}</p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <ReminderButton
                        recipeName={recipe.title}
                        step={`Steg ${index + 1}`}
                        variant="ghost"
                        size="sm"
                      />
                    </div>
                  </li>
                ))}
              </ol>
              
              {recipe.tips && (
                <>
                  <Separator className="my-6" />
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">💡 Tips fra kokken</h4>
                    <p className="text-foreground text-sm leading-relaxed">{recipe.tips}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recipe;