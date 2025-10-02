import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

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
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkFavoriteStatus();
  }, [recipeId, user]);

  const checkFavoriteStatus = async () => {
    if (!user) {
      // Fallback to localStorage for non-logged in users
      const favorites = localStorage.getItem("recipe-favorites");
      const localFavorites: number[] = favorites ? JSON.parse(favorites) : [];
      setIsFavorite(localFavorites.includes(recipeId));
      return;
    }

    // Check database for logged in users
    const { data } = await supabase
      .from('user_favorites')
      .select('id')
      .eq('user_id', user.id)
      .eq('recipe_id', recipeId)
      .maybeSingle();

    setIsFavorite(!!data);
  };

  const toggleFavorite = async () => {
    if (!user) {
      toast({
        title: "Logg inn for å lagre favoritter",
        description: "Dine favoritter vil bli lagret permanent når du logger inn"
      });
      
      setTimeout(() => navigate("/auth"), 1500);
      
      // Still allow local storage for non-logged in users
      const favorites = localStorage.getItem("recipe-favorites");
      const localFavorites: number[] = favorites ? JSON.parse(favorites) : [];
      
      if (isFavorite) {
        const updated = localFavorites.filter(id => id !== recipeId);
        localStorage.setItem("recipe-favorites", JSON.stringify(updated));
        setIsFavorite(false);
      } else {
        const updated = [...localFavorites, recipeId];
        localStorage.setItem("recipe-favorites", JSON.stringify(updated));
        setIsFavorite(true);
      }
      return;
    }

    if (isFavorite) {
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('recipe_id', recipeId);

      if (error) {
        toast({
          title: "Feil",
          description: error.message,
          variant: "destructive"
        });
      } else {
        setIsFavorite(false);
        toast({
          title: "Fjernet fra favoritter",
          description: `${recipeTitle} er fjernet fra dine favoritter`,
        });
      }
    } else {
      const { error } = await supabase
        .from('user_favorites')
        .insert({
          user_id: user.id,
          recipe_id: recipeId
        });

      if (error) {
        toast({
          title: "Feil",
          description: error.message,
          variant: "destructive"
        });
      } else {
        setIsFavorite(true);
        toast({
          title: "Lagt til i favoritter",
          description: `${recipeTitle} er lagt til i dine favoritter`,
        });
      }
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

export const getFavoriteRecipeIds = async (userId?: string): Promise<number[]> => {
  if (!userId) {
    // Fallback to localStorage
    const favorites = localStorage.getItem("recipe-favorites");
    return favorites ? JSON.parse(favorites) : [];
  }

  const { data } = await supabase
    .from('user_favorites')
    .select('recipe_id')
    .eq('user_id', userId);

  return data ? data.map(f => f.recipe_id) : [];
};