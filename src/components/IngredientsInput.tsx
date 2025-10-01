import { useState } from "react";
import { Plus, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface IngredientsInputProps {
  onAddIngredient: (ingredient: string) => void;
  selectedIngredients: string[];
  onRemoveIngredient: (ingredient: string) => void;
}

const commonIngredients = [
  // Grunnleggende
  "Egg", "Melk", "Smør", "Salt", "Pepper", "Olivenolje", "Hvitløk", "Løk",
  
  // Kjøtt og fisk
  "Kylling", "Bacon", "Kjøttdeig", "Laks", "Reker", "Kalkun", "Pølse", "Skinke",
  
  // Ost og meieriprodukter
  "Parmesan", "Mozzarella", "Cheddar", "Feta", "Ricotta", "Cottage cheese", "Rømme", "Crème fraiche",
  
  // Grønnsaker
  "Tomat", "Paprika", "Champignon", "Brokkoli", "Gulrot", "Squash", "Aubergine", "Agurk",
  "Spinat", "Salat", "Purreløk", "Sjalottløk", "Rødløk", "Selleri", "Kål", "Blomkål",
  "Rødbeter", "Søtpotet", "Poteter", "Mais", "Ærter", "Bønner", "Artisokk",
  
  // Krydder og urter
  "Basilikum", "Oregano", "Timian", "Rosmarin", "Persille", "Dill", "Koriander", "Mint",
  "Paprikapulver", "Karri", "Cumin", "Chili", "Ingefær", "Muskatnøtt", "Kanel",
  
  // Pasta og korn
  "Pasta", "Ris", "Quinoa", "Couscous", "Bulgur", "Havre", "Brød", "Tortilla",
  
  // Frukt
  "Sitron", "Lime", "Avokado", "Tomat", "Eple", "Pære", "Appelsin",
  
  // Diverse
  "Olivenolje", "Soyasaus", "Balsamico", "Honning", "Sirup", "Tomatpuré", "Kokosnøttmelk",
  "Mandler", "Valnøtter", "Oliven", "Kapers", "Soltørket tomat", "Pinjekjerner"
];

export const IngredientsInput = ({ 
  onAddIngredient, 
  selectedIngredients, 
  onRemoveIngredient 
}: IngredientsInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (value.trim()) {
      const filtered = commonIngredients.filter(ing => 
        ing.toLowerCase().includes(value.toLowerCase()) &&
        !selectedIngredients.includes(ing)
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleAddIngredient = (ingredient: string) => {
    if (ingredient.trim() && !selectedIngredients.includes(ingredient)) {
      onAddIngredient(ingredient);
      setInputValue("");
      setFilteredSuggestions([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddIngredient(inputValue.trim());
    }
  };

  return (
    <Card className="shadow-medium">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Søk etter ingredienser..."
                  value={inputValue}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 pr-4 py-3 text-lg border-2 focus:border-primary"
                />
              </div>
              <Button
                onClick={() => handleAddIngredient(inputValue)}
                disabled={!inputValue.trim()}
                className="px-6 py-3"
                size="lg"
              >
                <Plus className="w-4 h-4 mr-2" />
                Legg til
              </Button>
            </div>
            
            {/* Suggestions Dropdown */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-secondary text-foreground transition-colors"
                    onClick={() => handleAddIngredient(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Add Buttons */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">Populære ingredienser:</p>
            <div className="flex flex-wrap gap-2">
              {commonIngredients.slice(0, 12).map((ingredient) => (
                <Button
                  key={ingredient}
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddIngredient(ingredient)}
                  disabled={selectedIngredients.includes(ingredient)}
                  className="text-xs"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  {ingredient}
                </Button>
              ))}
            </div>
            
            {/* Kategorier */}
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-medium">Kjøtt og fisk:</p>
                <div className="flex flex-wrap gap-1">
                  {commonIngredients.slice(8, 16).map((ingredient) => (
                    <Button
                      key={ingredient}
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleAddIngredient(ingredient)}
                      disabled={selectedIngredients.includes(ingredient)}
                      className="text-xs h-7 px-2"
                    >
                      {ingredient}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-medium">Ost og meieri:</p>
                <div className="flex flex-wrap gap-1">
                  {commonIngredients.slice(16, 24).map((ingredient) => (
                    <Button
                      key={ingredient}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAddIngredient(ingredient)}
                      disabled={selectedIngredients.includes(ingredient)}
                      className="text-xs h-7 px-2"
                    >
                      {ingredient}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-medium">Grønnsaker:</p>
                <div className="flex flex-wrap gap-1">
                  {commonIngredients.slice(24, 36).map((ingredient) => (
                    <Button
                      key={ingredient}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAddIngredient(ingredient)}
                      disabled={selectedIngredients.includes(ingredient)}
                      className="text-xs h-7 px-2"
                    >
                      {ingredient}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Ingredients */}
          {selectedIngredients.length > 0 && (
            <div className="pt-4 border-t">
              <p className="text-sm font-medium text-foreground mb-3">
                Valgte ingredienser ({selectedIngredients.length}):
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map((ingredient, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-ingredient text-ingredient-foreground px-3 py-1 text-sm"
                  >
                    {ingredient}
                    <button
                      onClick={() => onRemoveIngredient(ingredient)}
                      className="ml-2 hover:text-destructive transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};