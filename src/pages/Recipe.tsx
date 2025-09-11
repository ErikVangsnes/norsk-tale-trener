import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Star, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const recipes = [
  {
    id: 1,
    title: "Pasta Carbonara",
    description: "Kremet og deilig carbonara med egg, bacon og parmesan",
    ingredients: ["egg", "bacon", "pasta", "parmesan", "hvitløk"],
    cookingTime: "20 min",
    difficulty: "Lett",
    servings: 4,
    instructions: [
      "Kok pastaen i saltet vann ifølge pakningens anvisning",
      "Stek bacon i en stor panne til det er sprøtt",
      "Visp sammen egg og riven parmesan i en bolle",
      "Hell den varme pastaen i pannen med bacon",
      "Ta pannen av varmen og bland inn eggblandingen raskt",
      "Krydre med salt og pepper, server umiddelbart"
    ],
    tips: "Viktig: Bland eggene inn når pannen er av varmen for å unngå at eggene koagulerer!"
  },
  {
    id: 2,
    title: "Tomatsalat",
    description: "Frisk salat med tomater, løk og basilikum",
    ingredients: ["tomat", "løk", "basilikum", "olivenolej", "salt"],
    cookingTime: "10 min",
    difficulty: "Mycket lett",
    servings: 2,
    instructions: [
      "Skjær tomatene i biter",
      "Skjær løken i tynne skiver", 
      "Riv basilikumblad i store stykker",
      "Bland alt sammen i en bolle",
      "Drypp over olivenoljé og krydre med salt",
      "La salaten trekke i 5 minutter før servering"
    ],
    tips: "Bruk modne tomater for best smak!"
  },
  {
    id: 3,
    title: "Stekt Kylling",
    description: "Saftig kyllingbryst med urter og grønnsaker",
    ingredients: ["kylling", "paprika", "løk", "rosmarin", "salt"],
    cookingTime: "35 min",
    difficulty: "Middels",
    servings: 3,
    instructions: [
      "Krydre kyllingbrystet med salt, pepper og rosmarin",
      "Stek kyllingen i en varm panne med olje, 6-7 min per side",
      "Skjær paprika og løk i strimler",
      "Stek grønnsakene i samme panne i 5-6 minutter",
      "La kyllingen hvile i 5 minutter før skjæring",
      "Skjær i skiver og server med grønnsakene"
    ],
    tips: "Bruk stektermometer - kyllingen er ferdig ved 75°C innvendig temperatur"
  }
];

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Oppskrift ikke funnet</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbake til forsiden
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbake til oppskrifter
          </Button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {recipe.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {recipe.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.cookingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{recipe.servings} porsjoner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
            
            <ChefHat className="w-12 h-12 text-accent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Ingredienser</span>
                <Badge variant="secondary">{recipe.ingredients.length} stk</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="capitalize font-medium">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="md:col-span-2 shadow-medium">
            <CardHeader>
              <CardTitle>Fremgangsmåte</CardTitle>
              <CardDescription>
                Følg disse stegene for å lage {recipe.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              
              {recipe.tips && (
                <>
                  <Separator className="my-6" />
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">💡 Tips fra kokken</h4>
                    <p className="text-foreground text-sm leading-relaxed">{recipe.tips}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recipe;