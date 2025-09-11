import { Clock, Users, Star, ChefHat } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  cookingTime: string;
  difficulty: string;
  availableIngredients: number;
  totalIngredients: number;
}

interface RecipeCardProps {
  recipe: Recipe;
  selectedIngredients: string[];
}

export const RecipeCard = ({ recipe, selectedIngredients }: RecipeCardProps) => {
  const matchPercentage = Math.round((recipe.availableIngredients / recipe.totalIngredients) * 100);
  const missingIngredients = recipe.totalIngredients - recipe.availableIngredients;
  
  return (
    <Card className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-recipe">
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
          <ChefHat className="w-6 h-6 text-accent ml-2 flex-shrink-0" />
        </div>
        
        {/* Match Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Ingredienser du har
            </span>
            <span className="text-sm font-bold text-primary">
              {recipe.availableIngredients}/{recipe.totalIngredients}
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
        
        {/* Missing Ingredients */}
        {missingIngredients > 0 && (
          <div className="mb-4 p-3 bg-secondary/50 rounded-md">
            <p className="text-sm font-medium text-foreground mb-2">
              Mangler {missingIngredients} ingrediens{missingIngredients > 1 ? 'er' : ''}:
            </p>
            <div className="flex flex-wrap gap-1">
              {recipe.ingredients
                .filter(ingredient => 
                  !selectedIngredients.some(selected => 
                    selected.toLowerCase() === ingredient.toLowerCase()
                  )
                )
                .slice(0, 3)
                .map((ingredient, index) => (
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
          </div>
        )}
        
        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            variant={matchPercentage === 100 ? "default" : "outline"}
          >
            Se oppskrift
          </Button>
          {missingIngredients > 0 && (
            <Button variant="outline" size="sm">
              Finn substitutter
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};