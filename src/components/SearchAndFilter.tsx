import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Recipe } from "@/data/recipes";

interface SearchAndFilterProps {
  recipes: Recipe[];
  onFilteredRecipes: (filtered: Recipe[]) => void;
}

const categories = [
  { value: "all", label: "Alle kategorier" },
  { value: "Italiensk", label: "Italiensk" },
  { value: "Norsk", label: "Norsk" },
  { value: "Asiatisk", label: "Asiatisk" },
  { value: "Vegetarisk", label: "Vegetarisk" },
  { value: "Rask", label: "Rask & Enkel" },
  { value: "Salat", label: "Salater" },
  { value: "Suppe", label: "Supper" },
  { value: "Fisk", label: "Fisk" },
  { value: "Indisk", label: "Indisk" },
  { value: "Spansk", label: "Spansk" }
];

const difficulties = [
  { value: "all", label: "Alle nivåer" },
  { value: "Lett", label: "Lett" },
  { value: "Middels", label: "Middels" },
  { value: "Krevende", label: "Krevende" }
];

const cookingTimes = [
  { value: "all", label: "Alle tider" },
  { value: "quick", label: "Under 15 min" },
  { value: "medium", label: "15-30 min" },
  { value: "long", label: "Over 30 min" }
];

export const SearchAndFilter = ({ recipes, onFilteredRecipes }: SearchAndFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const applyFilters = (
    search = searchTerm,
    category = selectedCategory,
    difficulty = selectedDifficulty,
    time = selectedTime
  ) => {
    let filtered = [...recipes];

    // Søk i tittel og beskrivelse
    if (search.trim()) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filtrer på kategori
    if (category !== "all") {
      filtered = filtered.filter(recipe => recipe.category === category);
    }

    // Filtrer på vanskelighetsgrad
    if (difficulty !== "all") {
      filtered = filtered.filter(recipe => recipe.difficulty === difficulty);
    }

    // Filtrer på koketid
    if (time !== "all") {
      filtered = filtered.filter(recipe => {
        const minutes = parseInt(recipe.cookingTime);
        switch (time) {
          case "quick": return minutes < 15;
          case "medium": return minutes >= 15 && minutes <= 30;
          case "long": return minutes > 30;
          default: return true;
        }
      });
    }

    onFilteredRecipes(filtered);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    applyFilters(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    applyFilters(searchTerm, value);
  };

  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value);
    applyFilters(searchTerm, selectedCategory, value);
  };

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
    applyFilters(searchTerm, selectedCategory, selectedDifficulty, value);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    setSelectedTime("all");
    onFilteredRecipes(recipes);
  };

  const activeFiltersCount = 
    (searchTerm ? 1 : 0) + 
    (selectedCategory !== "all" ? 1 : 0) + 
    (selectedDifficulty !== "all" ? 1 : 0) + 
    (selectedTime !== "all" ? 1 : 0);

  return (
    <Card className="shadow-medium mb-8">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Søkefelt */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Søk etter oppskrifter..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 focus:border-primary"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter toggle */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtere
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                <X className="w-4 h-4 mr-1" />
                Fjern alle filtere
              </Button>
            )}
          </div>

          {/* Filter options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Kategori
                </label>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Vanskelighetsgrad
                </label>
                <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map(difficulty => (
                      <SelectItem key={difficulty.value} value={difficulty.value}>
                        {difficulty.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Koketid
                </label>
                <Select value={selectedTime} onValueChange={handleTimeChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cookingTimes.map(time => (
                      <SelectItem key={time.value} value={time.value}>
                        {time.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Active filter badges */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Søk: "{searchTerm}"
                  <button onClick={() => handleSearchChange("")}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {categories.find(c => c.value === selectedCategory)?.label}
                  <button onClick={() => handleCategoryChange("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedDifficulty !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedDifficulty}
                  <button onClick={() => handleDifficultyChange("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedTime !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {cookingTimes.find(t => t.value === selectedTime)?.label}
                  <button onClick={() => handleTimeChange("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};