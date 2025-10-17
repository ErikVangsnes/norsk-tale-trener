import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, ShoppingCart, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes, Recipe } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MealPlan {
  id: string;
  date: string;
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recipe_id: number;
  servings: number;
  notes?: string;
}

const DAYS_OF_WEEK = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const MEAL_TYPES = [
  { key: 'breakfast' as const, label: 'Frokost' },
  { key: 'lunch' as const, label: 'Lunsj' },
  { key: 'dinner' as const, label: 'Middag' },
];

const MealPlanner = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(getMonday(new Date()));
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; mealType: string } | null>(null);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [loading, setLoading] = useState(true);

  function getMonday(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  useEffect(() => {
    // Vent til auth er ferdig lastet før vi sjekker om bruker er logget inn
    if (authLoading) return;
    
    if (!user) {
      navigate("/auth");
      return;
    }
    loadMealPlans();
  }, [user, currentWeekStart, authLoading]);

  const loadMealPlans = async () => {
    if (!user) return;
    
    setLoading(true);
    const weekEnd = addDays(currentWeekStart, 6);
    
    const { data, error } = await supabase
      .from('meal_plans')
      .select('*')
      .eq('user_id', user.id)
      .gte('date', formatDate(currentWeekStart))
      .lte('date', formatDate(weekEnd));

    if (error) {
      console.error('Error loading meal plans:', error);
      toast.error("Kunne ikke laste måltidsplan");
    } else {
      setMealPlans((data || []) as MealPlan[]);
    }
    setLoading(false);
  };

  const handleAddMeal = async (recipeId: number) => {
    if (!user || !selectedSlot) return;

    const { error } = await supabase
      .from('meal_plans')
      .upsert({
        user_id: user.id,
        date: selectedSlot.date,
        meal_type: selectedSlot.mealType,
        recipe_id: recipeId,
        servings: 4,
      });

    if (error) {
      console.error('Error adding meal:', error);
      toast.error("Kunne ikke legge til måltid");
    } else {
      toast.success("Måltid lagt til!");
      loadMealPlans();
      setSelectedSlot(null);
    }
  };

  const handleRemoveMeal = async (mealPlanId: string) => {
    const { error } = await supabase
      .from('meal_plans')
      .delete()
      .eq('id', mealPlanId);

    if (error) {
      console.error('Error removing meal:', error);
      toast.error("Kunne ikke fjerne måltid");
    } else {
      toast.success("Måltid fjernet");
      loadMealPlans();
    }
  };

  const getMealPlan = (date: string, mealType: string): MealPlan | undefined => {
    return mealPlans.find(
      mp => mp.date === date && mp.meal_type === mealType
    );
  };

  const getRecipe = (recipeId: number): Recipe | undefined => {
    return recipes.find(r => r.id === recipeId);
  };

  const generateShoppingList = () => {
    const ingredientsMap = new Map<string, { amount: number; unit: string }>();

    mealPlans.forEach(mp => {
      const recipe = getRecipe(mp.recipe_id);
      if (!recipe || !recipe.hasDetailedIngredients) return;

      const ingredients = recipe.ingredients as any[];
      ingredients.forEach(ing => {
        const key = ing.name.toLowerCase();
        const existing = ingredientsMap.get(key);
        
        if (existing) {
          if (existing.unit === ing.unit) {
            ingredientsMap.set(key, {
              amount: existing.amount + (ing.amount * mp.servings / 4),
              unit: ing.unit
            });
          } else {
            ingredientsMap.set(`${key}_${ing.unit}`, {
              amount: ing.amount * mp.servings / 4,
              unit: ing.unit
            });
          }
        } else {
          ingredientsMap.set(key, {
            amount: ing.amount * mp.servings / 4,
            unit: ing.unit
          });
        }
      });
    });

    return Array.from(ingredientsMap.entries()).map(([name, data]) => ({
      name: name.split('_')[0],
      amount: Math.round(data.amount * 10) / 10,
      unit: data.unit
    }));
  };

  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-muted-foreground">Laster...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                <Home className="w-4 h-4 mr-2" />
                Tilbake til forsiden
              </Button>
              <h1 className="text-2xl font-bold text-foreground">Måltidsplanlegger</h1>
            </div>
            <Button onClick={() => setShowShoppingList(true)} variant="default">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Handleliste
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Week Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => setCurrentWeekStart(addDays(currentWeekStart, -7))}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Forrige uke
          </Button>
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              Uke {formatDate(currentWeekStart)} - {formatDate(addDays(currentWeekStart, 6))}
            </h2>
          </div>
          <Button
            variant="outline"
            onClick={() => setCurrentWeekStart(addDays(currentWeekStart, 7))}
          >
            Neste uke
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Meal Plan Grid */}
        {loading ? (
          <div className="text-center py-12">Laster...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {weekDates.map((date, dayIndex) => (
              <div key={dayIndex} className="space-y-2">
                <h3 className="font-semibold text-center sticky top-20 bg-background py-2">
                  {DAYS_OF_WEEK[dayIndex]}
                  <br />
                  <span className="text-sm text-muted-foreground">
                    {date.getDate()}/{date.getMonth() + 1}
                  </span>
                </h3>
                
                {MEAL_TYPES.map(mealType => {
                  const dateStr = formatDate(date);
                  const mealPlan = getMealPlan(dateStr, mealType.key);
                  const recipe = mealPlan ? getRecipe(mealPlan.recipe_id) : undefined;

                  return (
                    <Card key={mealType.key} className="cursor-pointer hover:shadow-md transition-shadow">
                      {recipe ? (
                        <CardContent className="p-3" onClick={() => navigate(`/recipe/${recipe.id}`)}>
                          <div className="text-xs text-muted-foreground mb-1">{mealType.label}</div>
                          <div className="font-medium text-sm mb-2">{recipe.title}</div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveMeal(mealPlan!.id);
                            }}
                          >
                            Fjern
                          </Button>
                        </CardContent>
                      ) : (
                        <CardContent
                          className="p-3 text-center"
                          onClick={() => setSelectedSlot({ date: dateStr, mealType: mealType.key })}
                        >
                          <div className="text-xs text-muted-foreground mb-2">{mealType.label}</div>
                          <Button size="sm" variant="outline" className="w-full">
                            + Legg til
                          </Button>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recipe Selection Dialog */}
      <Dialog open={selectedSlot !== null} onOpenChange={(open) => !open && setSelectedSlot(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Velg oppskrift</DialogTitle>
            <DialogDescription>
              Klikk på en oppskrift for å legge den til i måltidsplanen
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {recipes.map(recipe => (
                <Card
                  key={recipe.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleAddMeal(recipe.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{recipe.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{recipe.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">{recipe.category}</Badge>
                      <Badge variant="outline">{recipe.cookingTime}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Shopping List Dialog */}
      <Dialog open={showShoppingList} onOpenChange={setShowShoppingList}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Handleliste for uken</DialogTitle>
            <DialogDescription>
              Basert på dine planlagte måltider
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh]">
            <div className="space-y-2 p-4">
              {generateShoppingList().length > 0 ? (
                generateShoppingList().map((item, index) => (
                  <div key={index} className="flex justify-between p-2 border-b">
                    <span className="font-medium capitalize">{item.name}</span>
                    <span className="text-muted-foreground">
                      {item.amount} {item.unit}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  Ingen planlagte måltider ennå
                </p>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MealPlanner;
