import { useState, useEffect } from "react";
import { Search, ChefHat, Lightbulb, Heart, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-cooking.jpg";
import logo from "@/assets/kokkehjelpen-logo.png";
import { IngredientsInput } from "@/components/IngredientsInput";
import { RecipeCard } from "@/components/RecipeCard";
import { SubstituteSuggestions } from "@/components/SubstituteSuggestions";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { recipes, Recipe } from "@/data/recipes";
import { getFavoriteRecipeIds } from "@/components/FavoriteButton";
import { IngredientMatcher } from "@/lib/ingredientMatcher";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // Load favorites when user changes
  useEffect(() => {
    loadFavorites();
  }, [user]);

  // Load user's saved ingredients when logged in
  useEffect(() => {
    if (user) {
      loadUserIngredients();
    }
  }, [user]);

  const loadFavorites = async () => {
    const favorites = await getFavoriteRecipeIds(user?.id);
    setFavoriteIds(favorites);
  };

  const loadUserIngredients = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('user_ingredients')
      .select('ingredient')
      .eq('user_id', user.id);

    if (data && data.length > 0) {
      const ingredients = data.map(item => item.ingredient);
      setSelectedIngredients(ingredients);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setFavoriteIds([]);
    // Keep local ingredients after logout
  };

  // Bruk det forbedrede intelligente matching-systemet med ekskludering
  const getMatchingRecipes = () => {
    if (selectedIngredients.length === 0 && excludedIngredients.length === 0) {
      return filteredRecipes.map(recipe => ({
        recipe,
        match: IngredientMatcher.calculateIngredientMatch([], recipe)
      }));
    }
    
    return IngredientMatcher.findRecipesWithExclusions(
      selectedIngredients, 
      excludedIngredients,
      filteredRecipes
    ).map(ingredientMatch => ({
      recipe: ingredientMatch.recipe,
      match: ingredientMatch
    }));
  };

  const recipesWithMatches = getMatchingRecipes();

  // Sjekk favoritt-oppskrifter ved bruk av state (ikke direkte Promise)
  const favoriteRecipes = recipesWithMatches.filter(({ recipe }) => 
    favoriteIds.includes(recipe.id)
  );

  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing !== ingredient));
  };

  const matchingRecipes = selectedIngredients.length > 0 
    ? recipesWithMatches.filter(({ match }) => match.matchPercentage > 0)
    : recipesWithMatches.filter(({ recipe }) => filteredRecipes.includes(recipe));

  const displayedRecipes = activeTab === "favorites" ? favoriteRecipes : matchingRecipes;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="KokkeHjelpen Logo" 
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground">KokkeHjelpen</h1>
                <p className="text-sm text-muted-foreground">Din personlige kokeassistent</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {loading ? (
                <div className="text-sm text-muted-foreground">Laster...</div>
              ) : user ? (
                <>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{user.email}</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logg ut
                  </Button>
                </>
              ) : (
                <Button variant="default" size="sm" onClick={() => navigate("/auth")}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Logg inn
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={logo} 
              alt="KokkeHjelpen" 
              className="w-20 h-20 drop-shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Oppskrifter fra ditt kjøleskap
          </h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            Fortell meg hvilke ingredienser du har, så foreslår jeg deilige oppskrifter du kan lage akkurat nå
          </p>
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
            availableIngredients={selectedIngredients}
            excludedIngredients={excludedIngredients}
            onExcludedIngredientsChange={setExcludedIngredients}
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
        {(selectedIngredients.length > 0 || favoriteIds.length > 0 || filteredRecipes.length < recipes.length) && (
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
                  ? (selectedIngredients.length > 0 
                      ? "Basert på ingrediensene du har valgt" 
                      : (filteredRecipes.length < recipes.length 
                          ? "Søkeresultater" 
                          : "Alle oppskrifter"))
                  : "Dine lagrede favoritt-oppskrifter"
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRecipes.length > 0 ? (
                displayedRecipes.map(({ recipe }) => (
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