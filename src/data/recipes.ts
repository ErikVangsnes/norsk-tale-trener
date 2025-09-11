export interface DetailedIngredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[] | DetailedIngredient[];
  cookingTime: string;
  difficulty: string;
  totalIngredients: number;
  servings: number;
  instructions: string[];
  tips: string;
  category: string;
  hasDetailedIngredients?: boolean;
  image?: string;
}

export const recipes: Recipe[] = [
  // Detaljerte oppskrifter med mengder
  {
    id: 1,
    title: "Pasta Carbonara",
    description: "Kremet og deilig carbonara med egg, bacon og parmesan",
    ingredients: [
      { name: "egg", amount: 4, unit: "stk" },
      { name: "bacon", amount: 200, unit: "g" },
      { name: "pasta", amount: 400, unit: "g" },
      { name: "parmesan", amount: 100, unit: "g" },
      { name: "hvitløk", amount: 2, unit: "fedd" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok pastaen i saltet vann ifølge pakningens anvisning",
      "Stek bacon i en stor panne til det er sprøtt",
      "Visp sammen egg og riven parmesan i en bolle",
      "Hell den varme pastaen i pannen med bacon",
      "Ta pannen av varmen og bland inn eggblandingen raskt",
      "Krydre med salt og pepper, server umiddelbart"
    ],
    tips: "Viktig: Bland eggene inn når pannen er av varmen for å unngå at eggene koagulerer!",
    category: "Italiensk"
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description: "Klassisk pizza med tomat, mozzarella og basilikum",
    ingredients: [
      { name: "brød", amount: 2, unit: "stk pizzabunn" },
      { name: "tomat", amount: 200, unit: "ml puré" },
      { name: "mozzarella", amount: 250, unit: "g" },
      { name: "basilikum", amount: 10, unit: "blad" },
      { name: "olivenolej", amount: 2, unit: "ss" }
    ],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Forvarm ovnen til 250°C",
      "Rull ut pizzadeigen på et bakepapir",
      "Smør tomatpuré utover deigen",
      "Riv mozzarellaen og fordel over pizzaen",
      "Drypp over olivenolej og krydre med salt",
      "Stek i 12-15 minutter til gyllen",
      "Pynt med fersk basilikum før servering"
    ],
    tips: "Bruk en pizzastein om du har for ekstra sprø bunn!",
    category: "Italiensk"
  },
  {
    id: 3,
    title: "Scrambled Eggs",
    description: "Perfekt krøsket eggerøre på norsk vis",
    ingredients: [
      { name: "egg", amount: 6, unit: "stk" },
      { name: "melk", amount: 50, unit: "ml" },
      { name: "smør", amount: 20, unit: "g" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "5 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Visp eggene med melk i en bolle",
      "Krydre med salt og pepper",
      "Varm smør i en panne på lav varme",
      "Hell i eggblandingen",
      "Rør forsiktig til eggene setter seg",
      "Server umiddelbart med brød"
    ],
    tips: "Lav varme er nøkkelen til kremetekst eggerøre!",
    category: "Rask"
  },

  // Enkle oppskrifter uten detaljerte mengder
  {
    id: 4,
    title: "Spaghetti Aglio e Olio",
    description: "Enkel og elegant pasta med hvitløk og olivenolje",
    ingredients: ["pasta", "hvitløk", "olivenolej", "chili", "parmesan"],
    cookingTime: "15 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Kok spaghettien al dente",
      "Varm olivenolej i en stor panne",
      "Tilsett finhakket hvitløk og chili",
      "Stek til hvitløken er gyllen, ikke brun",
      "Tilsett den varme pastaen med litt pastavann",
      "Bland godt og server med parmesan"
    ],
    tips: "Ikke la hvitløken bli brun - da blir smaken bitter!",
    category: "Italiensk"
  },
  {
    id: 5,
    title: "Fiskekaker med Poteter",
    description: "Tradisjonelle norske fiskekaker med kokte poteter",
    ingredients: ["laks", "egg", "melk", "poteter", "smør"],
    cookingTime: "45 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Kok potetene til de er møre",
      "Mal fisken i en kjøttkvern eller foodprocessor",
      "Bland fisken med egg, melk, salt og pepper",
      "Form til små kaker",
      "Stek i smør på middels varme til gylne",
      "Server med kokte poteter og erter"
    ],
    tips: "Fiskekakene kan lages på forhånd og varmes opp senere!",
    category: "Norsk"
  },
  {
    id: 6,
    title: "Kjøttkaker i Brun Saus",
    description: "Saftige kjøttkaker med kremet brun saus",
    ingredients: ["kjøttdeig", "egg", "løk", "melk", "smør"],
    cookingTime: "40 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Bland kjøttdeig med finhakket løk, egg og melk",
      "Krydre godt med salt og pepper",
      "Form til kjøttkaker",
      "Stek i smør til brunet på alle sider",
      "Lag saus av stekesaften, melk og mel",
      "La kjøttkakene trekke i sausen 10 min"
    ],
    tips: "Tilsett litt revet gulrot i kjøttdeigen for ekstra saftighet!",
    category: "Norsk"
  },
  {
    id: 7,
    title: "Fried Rice",
    description: "Asiatisk stekt ris med egg og grønnsaker",
    ingredients: ["ris", "egg", "gulrot", "ærter", "soyasaus"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Kok risen og la den kjølne seg ned",
      "Stek rørt egg i en vok eller stor panne",
      "Tilsett risen og bland godt",
      "Tilsett gulrot og ærter",
      "Krydre med soyasaus og stek 5 minutter",
      "Server varm som tilbehør eller hovedrett"
    ],
    tips: "Bruk gjerne risen fra dagen før - den blir mindre klissete!",
    category: "Asiatisk"
  },
  {
    id: 8,
    title: "Kylling Teriyaki",
    description: "Søt og salt kylling med asiatiske smaker",
    ingredients: ["kylling", "soyasaus", "honning", "ingefær", "ris"],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Skjær kyllingen i biter",
      "Bland soyasaus, honning og hakket ingefær",
      "Mariner kyllingen i 15 minutter",
      "Stek kyllingen på høy varme til gjennomstekt",
      "Hell over marinaden og la koke inn",
      "Server med dampet ris"
    ],
    tips: "Tilsett sesamfrø som pynt for ekstra crunch!",
    category: "Asiatisk"
  },
  {
    id: 9,
    title: "Caprese Salat",
    description: "Frisk italiensk salat med tomat, mozzarella og basilikum",
    ingredients: ["tomat", "mozzarella", "basilikum", "olivenolej", "balsamico"],
    cookingTime: "10 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 2,
    instructions: [
      "Skjær tomatene i tykke skiver",
      "Skjær mozzarellaen i skiver",
      "Veksle mellom tomat og mozzarella på et fat",
      "Pynt med ferske basilikumblad",
      "Drypp over olivenolej og balsamico",
      "Krydre med salt og pepper"
    ],
    tips: "Bruk modne tomater og fersk mozzarella for beste smak!",
    category: "Vegetarisk"
  },
  {
    id: 10,
    title: "Champignon Risotto",
    description: "Kremet risotto med sauterte champignoner",
    ingredients: ["ris", "champignon", "løk", "parmesan", "smør"],
    cookingTime: "35 min",
    difficulty: "Krevende",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Sautér champignonene til gylne",
      "Stek løk i smør til myk",
      "Tilsett risen og rør i 2 minutter",
      "Tilsett varm buljong gradvis mens du rører",
      "Fortsett til risen er kremet og al dente",
      "Rør inn champignoner og parmesan"
    ],
    tips: "Bruk gjerne flere soppsorter for mer kompleks smak!",
    category: "Vegetarisk"
  },
  {
    id: 11,
    title: "Avokado Toast",
    description: "Trendy og sunn frokost med mose avokado",
    ingredients: ["brød", "avokado", "sitron", "salt", "pepper"],
    cookingTime: "8 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 2,
    instructions: [
      "Rist brødet til gyllen",
      "Mos avokadoen med en gaffel",
      "Tilsett sitronsaft, salt og pepper",
      "Smør avokadosmørpålegget på brødet",
      "Pynt med ekstra pepper og eventuelt chili",
      "Server umiddelbart"
    ],
    tips: "Tilsett et stekt egg på toppen for ekstra protein!",
    category: "Rask"
  },
  {
    id: 12,
    title: "Cæsar Salat",
    description: "Klassisk amerikansk salat med krutong og parmesan",
    ingredients: ["salat", "parmesan", "brød", "hvitløk", "olivenolej"],
    cookingTime: "15 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Kutt brødet i terninger og rist til krutong",
      "Gnid salatbollen med hvitløk",
      "Riv salaten i biter i bollen",
      "Tilsett krutonger og revet parmesan",
      "Dressing av olivenolej, sitron og ansjos",
      "Bland alt sammen og server"
    ],
    tips: "Tilsett grillet kylling for å gjøre det til hovedrett!",
    category: "Salat"
  },
  {
    id: 13,
    title: "Stekt Torsk med Poteter",
    description: "Klassisk norsk fiskemiddag med stekt torsk",
    ingredients: ["torsk", "poteter", "smør", "sitron", "persille"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Kok potetene til møre",
      "Krydre torskefiletene med salt og pepper",
      "Stek fisken i smør, 3-4 min per side",
      "Hell over brunet smør med sitron",
      "Pynt med hakket persille",
      "Server med potetene"
    ],
    tips: "Pass på at fisken ikke blir overstekt - den skal være saftig!",
    category: "Norsk"
  },
  {
    id: 14,
    title: "Sei i Ovn med Grønnsaker",
    description: "Sunn og enkel seifilé med rotgrønnsaker",
    ingredients: ["sei", "gulrot", "løk", "paprika", "rosmarin"],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Forvarm ovnen til 200°C",
      "Skjær grønnsakene i biter",
      "Legg sei og grønnsaker på stekebrett",
      "Drypp over olivenolje og krydre",
      "Stek i 20-25 minutter",
      "Pynt med frisk rosmarin"
    ],
    tips: "Bruk timer for perfekt resultat!",
    category: "Norsk"
  },
  {
    id: 15,
    title: "Fiskesuppe",
    description: "Kremet og nærende fiskesuppe med hvitfisk",
    ingredients: ["hvitfisk", "fiskefond", "fløte", "gulrot", "purre"],
    cookingTime: "35 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Kutt fisken i biter",
      "Sautér gulrot og purre i smør",
      "Hell i fiskefond og la koke",
      "Tilsett fiskebiter og simmer 10 min",
      "Rør inn fløte og varm opp",
      "Krydre med salt, pepper og dill"
    ],
    tips: "Ikke la fisken koke for lenge - den blir da tøff!",
    category: "Norsk"
  },
  {
    id: 16,
    title: "Kylling Curry",
    description: "Mild og kremet kyllingcurry med kokosmjølk",
    ingredients: ["kylling", "kokosmjølk", "curry", "løk", "paprika"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Skjær kyllingen i biter",
      "Stek løk og paprika i olje",
      "Tilsett kylling og stek til hvit",
      "Rør inn curry og kokosmjølk",
      "La simmer i 15 minutter",
      "Server med ris eller brød"
    ],
    tips: "Tilsett chili for mer hete, eller ananas for sødme!",
    category: "Indisk"
  },
  {
    id: 17,
    title: "Biff Stroganoff",
    description: "Russisk klassiker med mørt kjøtt i sursøt saus",
    ingredients: ["biff", "champignon", "fløte", "løk", "sennep"],
    cookingTime: "30 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Skjær biffen i strimler",
      "Stek kjøttet raskt på høy varme",
      "Sautér løk og sopp i samme panne",
      "Tilsett fløte og sennep",
      "La kjøttet varmes i sausen",
      "Server med ris eller pasta"
    ],
    tips: "Bruk mør biff som indrefilet for best resultat!",
    category: "Russisk"
  },
  {
    id: 18,
    title: "Grønnsakssuppe",
    description: "Sunn og mettende suppe med sesonggrønnsaker",
    ingredients: ["brokkoli", "gulrot", "selleri", "grønnsaksbuljong", "kremer"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Kutt alle grønnsakene i biter",
      "Sautér grønnsakene i litt olje",
      "Tilsett grønnsaksbuljong",
      "La koke til grønnsakene er møre",
      "Mikse halvparten av suppen",
      "Rør inn kremer og krydre"
    ],
    tips: "Vari grønnsakene etter sesong for best smak!",
    category: "Vegetarisk"
  }
];