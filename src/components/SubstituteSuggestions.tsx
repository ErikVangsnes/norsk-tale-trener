import { Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SubstituteSuggestionsProps {
  selectedIngredients: string[];
}

const substituteData: Record<string, string[]> = {
  "egg": ["aquafaba", "banan", "applesauce", "linfrø + vann"],
  "melk": ["havremelk", "mandelmelk", "soyamelk", "kokosnøttmelk"],
  "smør": ["margarin", "kokosolje", "olivenolej", "applesauce"],
  "hvitløk": ["hvitløkspulver", "sjalottløk", "løk", "ingefær"],
  "basilikum": ["oregano", "timian", "rosmarin", "persille"],
  "parmesan": ["pecorino", "gruyère", "cheddar", "ernæringsgjær"],
  "kylling": ["kalkun", "tofu", "seitan", "sopp"],
  "pasta": ["ris", "quinoa", "potet", "squash-spaghetti"],
  "olivenolej": ["rapsolje", "solsikkeolje", "avokadoolje", "smør"],
  "løk": ["sjalottløk", "purreløk", "løkpulver", "selleri"]
};

export const SubstituteSuggestions = ({ selectedIngredients }: SubstituteSuggestionsProps) => {
  const availableSubstitutes = selectedIngredients
    .filter(ingredient => substituteData[ingredient.toLowerCase()])
    .map(ingredient => ({
      original: ingredient,
      substitutes: substituteData[ingredient.toLowerCase()]
    }));

  if (availableSubstitutes.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Lightbulb className="w-8 h-8 mx-auto text-accent mb-4" />
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Substituttforslag
        </h2>
        <p className="text-muted-foreground text-lg">
          Mangler noe? Her er gode alternativer du kan bruke i stedet
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableSubstitutes.map(({ original, substitutes }) => (
          <Card key={original} className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <Badge variant="secondary" className="bg-ingredient text-ingredient-foreground">
                  {original}
                </Badge>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Alternativer</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {substitutes.map((substitute, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                  >
                    {substitute}
                  </Badge>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                Klikk på et alternativ for å legge det til i din ingrediensliste
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};