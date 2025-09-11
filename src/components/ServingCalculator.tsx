import { useState } from "react";
import { Minus, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServingCalculatorProps {
  originalServings: number;
  onServingChange: (newServings: number) => void;
}

export const ServingCalculator = ({ originalServings, onServingChange }: ServingCalculatorProps) => {
  const [servings, setServings] = useState(originalServings);

  const handleServingChange = (newServings: number) => {
    if (newServings >= 1 && newServings <= 20) {
      setServings(newServings);
      onServingChange(newServings);
    }
  };

  return (
    <Card className="shadow-medium">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Users className="w-5 h-5 text-accent" />
          Antall porsjoner
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleServingChange(servings - 1)}
            disabled={servings <= 1}
            className="h-10 w-10"
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{servings}</div>
            <div className="text-sm text-muted-foreground">
              {servings === 1 ? "porsjon" : "porsjoner"}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleServingChange(servings + 1)}
            disabled={servings >= 20}
            className="h-10 w-10"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Opprinnelig: {originalServings} {originalServings === 1 ? "porsjon" : "porsjoner"}
          </p>
          {servings !== originalServings && (
            <p className="text-xs text-accent mt-1">
              Ingrediensene er justert automatisk
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};