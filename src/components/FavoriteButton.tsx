import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FavoriteButtonProps {
  recipeId: number;
  recipeTitle: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export const FavoriteButton = ({ 
  recipeId, 
  recipeTitle, 
  size = "md", 
  showLabel = false 
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(recipeId));
  }, [recipeId]);

  const getFavorites = (): number[] => {
    const favorites = localStorage.getItem("recipe-favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  const saveFavorites = (favorites: number[]) => {
    localStorage.setItem("recipe-favorites", JSON.stringify(favorites));
  };

  const toggleFavorite = () => {
    const favorites = getFavorites();
    
    if (isFavorite) {
      const updated = favorites.filter(id => id !== recipeId);
      saveFavorites(updated);
      setIsFavorite(false);
      toast({
        title: "Fjernet fra favoritter",
        description: `${recipeTitle} er fjernet fra dine favoritter`,
      });
    } else {
      const updated = [...favorites, recipeId];
      saveFavorites(updated);
      setIsFavorite(true);
      toast({
        title: "Lagt til i favoritter",
        description: `${recipeTitle} er lagt til i dine favoritter`,
      });
    }
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  };

  const buttonSizes = {
    sm: "sm",
    md: "default",
    lg: "lg"
  } as const;

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      size={buttonSizes[size]}
      onClick={toggleFavorite}
      className={`transition-all duration-200 ${
        isFavorite 
          ? "bg-red-500 hover:bg-red-600 text-white border-red-500" 
          : "hover:bg-red-50 hover:border-red-200 hover:text-red-600"
      }`}
    >
      <Heart 
        className={`${iconSizes[size]} ${
          isFavorite ? "fill-current" : ""
        } transition-all duration-200`}
      />
      {showLabel && (
        <span className="ml-2">
          {isFavorite ? "I favoritter" : "Legg til favoritter"}
        </span>
      )}
    </Button>
  );
};

export const getFavoriteRecipeIds = (): number[] => {
  const favorites = localStorage.getItem("recipe-favorites");
  return favorites ? JSON.parse(favorites) : [];
};