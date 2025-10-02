import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface RecipeRatingProps {
  recipeId: number;
  recipeTitle: string;
}

interface Rating {
  id: string;
  user_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

export const RecipeRating = ({ recipeId, recipeTitle }: RecipeRatingProps) => {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [allRatings, setAllRatings] = useState<Rating[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    loadRatings();
  }, [recipeId]);

  const loadRatings = async () => {
    // Load all ratings for this recipe
    const { data: ratings } = await supabase
      .from('recipe_ratings')
      .select('*')
      .eq('recipe_id', recipeId)
      .order('created_at', { ascending: false });

    if (ratings) {
      setAllRatings(ratings);
      
      // Calculate average
      if (ratings.length > 0) {
        const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
        setAverageRating(avg);
      }

      // Load user's rating if logged in
      if (user) {
        const userRatingData = ratings.find(r => r.user_id === user.id);
        if (userRatingData) {
          setUserRating(userRatingData.rating);
          setComment(userRatingData.comment || "");
        }
      }
    }
  };

  const handleSubmitRating = async () => {
    if (!user) {
      toast({
        title: "Logg inn for å vurdere",
        description: "Du må være logget inn for å vurdere oppskrifter",
        variant: "destructive"
      });
      navigate("/auth");
      return;
    }

    if (userRating === 0) {
      toast({
        title: "Velg en vurdering",
        description: "Du må velge minst 1 stjerne",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from('recipe_ratings')
      .upsert({
        user_id: user.id,
        recipe_id: recipeId,
        rating: userRating,
        comment: comment.trim() || null
      }, {
        onConflict: 'user_id,recipe_id'
      });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Feil ved lagring",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Vurdering lagret!",
        description: `Din vurdering av ${recipeTitle} er lagret`
      });
      loadRatings();
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && setUserRating(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={`transition-colors ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}`}
          >
            <Star
              className={`w-6 h-6 ${
                star <= (interactive ? (hoverRating || userRating) : rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-muted-foreground'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Average Rating Display */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Vurderinger</CardTitle>
          {allRatings.length > 0 && (
            <CardDescription>
              Gjennomsnitt: {averageRating.toFixed(1)} av 5 stjerner ({allRatings.length} {allRatings.length === 1 ? 'vurdering' : 'vurderinger'})
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {allRatings.length > 0 ? (
            <div className="flex items-center gap-2">
              {renderStars(averageRating)}
              <span className="text-2xl font-bold text-foreground ml-2">
                {averageRating.toFixed(1)}
              </span>
            </div>
          ) : (
            <p className="text-muted-foreground">Ingen vurderinger ennå. Bli den første!</p>
          )}
        </CardContent>
      </Card>

      {/* User Rating Form */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Din vurdering</CardTitle>
          <CardDescription>
            {user ? "Hva synes du om denne oppskriften?" : "Logg inn for å vurdere"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderStars(userRating, !!user)}
          
          {user && (
            <>
              <Textarea
                placeholder="Skriv en kommentar (valgfritt)..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
              />
              <Button onClick={handleSubmitRating} disabled={isSubmitting || userRating === 0}>
                {isSubmitting ? "Lagrer..." : "Lagre vurdering"}
              </Button>
            </>
          )}

          {!user && (
            <Button onClick={() => navigate("/auth")} variant="outline">
              Logg inn for å vurdere
            </Button>
          )}
        </CardContent>
      </Card>

      {/* All Ratings */}
      {allRatings.length > 0 && (
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Alle vurderinger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {allRatings.map((rating) => (
              <div key={rating.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {renderStars(rating.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(rating.created_at).toLocaleDateString('nb-NO')}
                  </span>
                </div>
                {rating.comment && (
                  <p className="text-sm text-foreground">{rating.comment}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
