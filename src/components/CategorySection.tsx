import { recipes } from "@/data/recipes";
import { RecipeCard } from "./RecipeCard";
import { Badge } from "./ui/badge";

interface CategorySectionProps {
  category: string;
  maxRecipes?: number;
}

export const CategorySection = ({ category, maxRecipes = 3 }: CategorySectionProps) => {
  const categoryRecipes = recipes
    .filter(recipe => recipe.category === category)
    .slice(0, maxRecipes);

  if (categoryRecipes.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-2xl font-bold text-foreground">{category}</h3>
        <Badge variant="secondary">{categoryRecipes.length} oppskrifter</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryRecipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            selectedIngredients={[]}
          />
        ))}
      </div>
    </div>
  );
};
