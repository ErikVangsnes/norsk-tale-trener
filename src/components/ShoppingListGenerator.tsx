import { useState } from "react";
import { ShoppingCart, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Recipe, DetailedIngredient } from "@/data/recipes";
import { useToast } from "@/hooks/use-toast";

interface ShoppingListGeneratorProps {
  recipe: Recipe;
  selectedIngredients: string[];
  servings?: number;
}

export const ShoppingListGenerator = ({ 
  recipe, 
  selectedIngredients, 
  servings = recipe.servings 
}: ShoppingListGeneratorProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const getMissingIngredients = () => {
    const hasDetailedIngredients = recipe.hasDetailedIngredients && 
      Array.isArray(recipe.ingredients) && 
      recipe.ingredients.length > 0 && 
      typeof recipe.ingredients[0] === 'object';

    if (hasDetailedIngredients) {
      const detailedIngredients = recipe.ingredients as DetailedIngredient[];
      const multiplier = servings / recipe.servings;

      return detailedIngredients
        .filter(ingredient => 
          !selectedIngredients.some(selected => 
            selected.toLowerCase() === ingredient.name.toLowerCase()
          )
        )
        .map(ingredient => {
          const adjustedAmount = ingredient.amount * multiplier;
          let roundedAmount;
          
          if (adjustedAmount < 1) {
            roundedAmount = Math.round(adjustedAmount * 10) / 10;
          } else if (adjustedAmount < 10) {
            roundedAmount = Math.round(adjustedAmount * 2) / 2;
          } else {
            roundedAmount = Math.round(adjustedAmount);
          }

          return {
            name: ingredient.name,
            amount: roundedAmount,
            unit: ingredient.unit,
            formatted: `${roundedAmount} ${ingredient.unit} ${ingredient.name}`
          };
        });
    } else {
      const stringIngredients = recipe.ingredients as string[];
      return stringIngredients
        .filter(ingredient => 
          !selectedIngredients.some(selected => 
            selected.toLowerCase() === ingredient.toLowerCase()
          )
        )
        .map(ingredient => ({
          name: ingredient,
          formatted: ingredient
        }));
    }
  };

  const missingIngredients = getMissingIngredients();

  const generateShoppingList = () => {
    const header = `🛒 HANDLELISTE - ${recipe.title}\n`;
    const servingInfo = `📊 Antall porsjoner: ${servings}\n\n`;
    
    const ingredients = missingIngredients
      .map((ingredient, index) => `${index + 1}. ${ingredient.formatted}`)
      .join('\n');
    
    const footer = `\n\n✅ Oppskrift: ${recipe.title}\n⏱️ Koketid: ${recipe.cookingTime}\n👨‍🍳 Vanskelighetsgrad: ${recipe.difficulty}`;
    
    return header + servingInfo + ingredients + footer;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShoppingList());
      setCopied(true);
      toast({
        title: "Kopiert!",
        description: "Handlelisten er kopiert til utklippstavlen",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Feil",
        description: "Kunne ikke kopiere til utklippstavlen",
        variant: "destructive",
      });
    }
  };

  const downloadShoppingList = () => {
    const content = generateShoppingList();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `handleliste-${recipe.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Lastet ned!",
      description: "Handlelisten er lastet ned som tekstfil",
    });
  };

  if (missingIngredients.length === 0) {
    return (
      <Button variant="outline" disabled className="flex items-center gap-2">
        <Check className="w-4 h-4 text-green-600" />
        Du har alle ingrediensene!
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Lag handleliste
          <Badge variant="secondary" className="ml-1">
            {missingIngredients.length}
          </Badge>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-accent" />
            Handleliste
          </DialogTitle>
          <DialogDescription>
            Ingredienser du mangler for {recipe.title}
          </DialogDescription>
        </DialogHeader>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{recipe.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>🍽️ {servings} porsjoner</span>
              <span>⏱️ {recipe.cookingTime}</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">
                Manglende ingredienser ({missingIngredients.length})
              </h4>
              
              <ul className="space-y-2">
                {missingIngredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="capitalize">{ingredient.formatted}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex-1 text-xs"
              >
                {copied ? (
                  <Check className="w-3 h-3 mr-1" />
                ) : (
                  <Copy className="w-3 h-3 mr-1" />
                )}
                {copied ? "Kopiert!" : "Kopier"}
              </Button>
              
              <Button
                variant="outline" 
                size="sm"
                onClick={downloadShoppingList}
                className="flex-1 text-xs"
              >
                <Download className="w-3 h-3 mr-1" />
                Last ned
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};