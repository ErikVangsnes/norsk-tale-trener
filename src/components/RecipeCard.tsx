import { Clock, Users, Star, ChefHat, Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import { FavoriteButton } from "@/components/FavoriteButton";
import { ShoppingListGenerator } from "@/components/ShoppingListGenerator";
import { IngredientMatcher } from "@/lib/ingredientMatcher";

interface RecipeCardProps {
  recipe: Recipe;
  selectedIngredients: string[];
}

export const RecipeCard = ({ recipe, selectedIngredients }: RecipeCardProps) => {
  const navigate = useNavigate();
  
  // Beregn ingredient match med det nye systemet
  const ingredientMatch = IngredientMatcher.calculateIngredientMatch(selectedIngredients, recipe);
  const matchPercentage = Math.round(ingredientMatch.matchPercentage);
  const missingIngredients = ingredientMatch.missingIngredients.length;
  
  return (
    <Card className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-recipe overflow-hidden">
      {/* Recipe Image */}
      {recipe.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 right-3">
            <FavoriteButton 
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              size="sm"
            />
          </div>
          <Badge 
            variant="secondary" 
            className="absolute bottom-3 left-3 bg-white/90 text-foreground"
          >
            {recipe.category}
          </Badge>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground mb-2">
              {recipe.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {recipe.description}
            </CardDescription>
          </div>
          {!recipe.image && <ChefHat className="w-6 h-6 text-accent ml-2 flex-shrink-0" />}
        </div>
        
        {/* Match Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Ingredienser du har
            </span>
            <span className="text-sm font-bold text-primary">
              {ingredientMatch.availableIngredients}/{ingredientMatch.totalIngredients}
            </span>
          </div>
          <Progress value={matchPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">
            {matchPercentage}% match
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
        
        {/* Missing Ingredients with Substitutions */}
        {missingIngredients > 0 && (
          <div className="mb-4 p-3 bg-secondary/50 rounded-md">
            <p className="text-sm font-medium text-foreground mb-2">
              Mangler {missingIngredients} ingrediens{missingIngredients > 1 ? 'er' : ''}:
            </p>
            <div className="flex flex-wrap gap-1">
              {ingredientMatch.missingIngredients.slice(0, 3).map((ingredient, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {ingredient}
                </Badge>
              ))}
              {missingIngredients > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{missingIngredients - 3} til
                </Badge>
              )}
            </div>
            
            {/* Substitution Suggestions */}
            {ingredientMatch.substitutionSuggestions.length > 0 && (
              <div className="mt-2 pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-1">💡 Forslag til erstatninger:</p>
                <div className="space-y-1">
                  {ingredientMatch.substitutionSuggestions.slice(0, 2).map((sub, index) => (
                    <div key={index} className="text-xs text-blue-600">
                      <span className="font-medium">{sub.substitute}</span> kan erstatte <span className="font-medium">{sub.missing}</span>
                      <span className="text-muted-foreground ml-1">({Math.round(sub.confidence * 100)}% match)</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Perfect Match Indicator */}
        {matchPercentage === 100 && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-md border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Du har alle ingrediensene! 🎉
              </span>
            </div>
          </div>
        )}
        
        <div className="flex gap-2 flex-wrap">
          <Button 
            className="flex-1 min-w-0" 
            variant={matchPercentage === 100 ? "default" : "outline"}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            Se oppskrift
          </Button>
          {!recipe.image && (
            <FavoriteButton 
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              size="sm"
            />
          )}
          {missingIngredients > 0 && (
            <ShoppingListGenerator 
              recipe={recipe}
              selectedIngredients={selectedIngredients}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};