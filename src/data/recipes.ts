export interface DetailedIngredient {
  name: string;
  amount: number;
  unit: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
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
  nutrition?: NutritionInfo;
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
    category: "Italiensk",
    nutrition: {
      calories: 520,
      protein: 24,
      carbs: 52,
      fat: 22
    }
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
    id: 222,
    title: "Stekt Laks med Poteter",
    description: "Enkel og sunn lakserett",
    ingredients: ["laks", "poteter", "smør", "sitron", "dill"],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Kok potetene",
      "Krydre laksen med salt og pepper",
      "Stek i smør, skinnsiden først",
      "Vend og stek ferdig",
      "Hell over brunet smør og sitron",
      "Pynt med dill"
    ],
    tips: "Ikke overstekk laksen!",
    category: "Norsk"
  },
  {
    id: 223,
    title: "Laks i Ovn med Grønnsaker",
    description: "Sunn og enkel ovnsrett",
    ingredients: ["laks", "brokkoli", "paprika", "squash", "olivenolej", "hvitløk"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Forvarm ovnen til 200°C",
      "Legg laks og grønnsaker på brett",
      "Drypp over olje og krydre",
      "Tilsett hvitløk",
      "Stek i 18-20 minutter",
      "Server med sitron"
    ],
    tips: "Perfekt hverdagsmiddag!",
    category: "Norsk"
  },
  {
    id: 224,
    title: "Lakseburger",
    description: "Saftig lakseburger med dill",
    ingredients: ["laks", "egg", "brødsmuler", "dill", "løk", "hamburgerbrød"],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Hakk laksen fint",
      "Bland med egg, brødsmuler og dill",
      "Form til burgere",
      "Stek i panne på middels varme",
      "Rist brødene",
      "Bygg burgeren med tilbehør"
    ],
    tips: "Server med remoulade!",
    category: "Rask"
  },
  {
    id: 225,
    title: "Lakselasagne",
    description: "Kremet lasagne med laks og spinat",
    ingredients: ["laks", "lasagneplater", "spinat", "fløte", "ost", "løk"],
    cookingTime: "60 min",
    difficulty: "Middels",
    totalIngredients: 6,
    servings: 6,
    instructions: [
      "Lag hvit saus med fløte",
      "Stek laksen i biter",
      "Bland laks med spinat",
      "Lag lag med plater og fyll",
      "Topp med ost",
      "Stek på 180°C i 40 minutter"
    ],
    tips: "Kan lages dagen før!",
    category: "Italiensk"
  },
  {
    id: 226,
    title: "Laksepasta",
    description: "Kremet pasta med røkt laks",
    ingredients: ["laks", "pasta", "fløte", "spinat", "hvitløk", "sitron"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Kok pastaen",
      "Stek hvitløk i smør",
      "Tilsett fløte og spinat",
      "Riv i laks",
      "Bland inn pastaen",
      "Tilsett sitronsaft"
    ],
    tips: "Ferdig på 20 minutter!",
    category: "Italiensk"
  },
  {
    id: 227,
    title: "Gravlaks",
    description: "Hjemmelaget gravlaks med dill",
    ingredients: ["laks", "sukker", "salt", "dill", "pepper"],
    cookingTime: "48 timer",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 8,
    instructions: [
      "Bland sukker og salt",
      "Gni inn i laksen",
      "Dekk med mye dill",
      "Legg laksebitene mot hverandre",
      "Pakk inn og legg på noe tungt",
      "La ligge i kjøleskapet i 48 timer"
    ],
    tips: "Perfekt til festmåltid!",
    category: "Norsk"
  },
  {
    id: 228,
    title: "Laksewrap",
    description: "Rask og sunn lunsj",
    ingredients: ["laks", "tortilla", "salat", "avokado", "tomat", "rømme"],
    cookingTime: "15 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 2,
    instructions: [
      "Stek eller bruk røkt laks",
      "Varm tortillaen",
      "Legg på salat og grønnsaker",
      "Tilsett laks",
      "Topp med rømme",
      "Rull sammen"
    ],
    tips: "Perfekt lunsjmat!",
    category: "Rask"
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
    id: 200,
    title: "Tacos med Kjøttdeig",
    description: "Meksikansk klassiker med krydret kjøttdeig og friske tilbehør",
    ingredients: ["kjøttdeig", "tacoskjell", "tomat", "salat", "ost", "rødløk", "tacokrydder"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    instructions: [
      "Brun kjøttdeigen i en panne",
      "Tilsett tacokrydder og litt vann",
      "La det småkoke i 10 minutter",
      "Varm tacoskjellene i ovnen",
      "Hakk salat, tomat og løk",
      "Fyll tacoskjellene med kjøttdeig og tilbehør"
    ],
    tips: "Tilsett en klatt rømme og guacamole for ekstra god smak!",
    category: "Meksikansk"
  },
  {
    id: 201,
    title: "Lasagne",
    description: "Italiensk klassiker med kjøttdeig, tomatsaus og hvit saus",
    ingredients: ["kjøttdeig", "lasagneplater", "tomat", "løk", "hvitløk", "melk", "ost", "smør", "mel"],
    cookingTime: "90 min",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 6,
    instructions: [
      "Brun kjøttdeigen med løk og hvitløk",
      "Tilsett hermetiske tomater og la putre",
      "Lag hvit saus av smør, mel og melk",
      "Lag lag med kjøttsaus, lasagneplater og hvit saus",
      "Topp med revet ost",
      "Stek i ovnen på 180°C i 45 minutter"
    ],
    tips: "La lasagnen hvile 10 minutter før servering for lettere kutt!",
    category: "Italiensk"
  },
  {
    id: 202,
    title: "Spaghetti Bolognese",
    description: "Klassisk italiensk pasta med rik kjøttsaus",
    ingredients: ["kjøttdeig", "spaghetti", "tomat", "løk", "hvitløk", "gulrot", "selleri", "rødvin"],
    cookingTime: "60 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Sautér løk, hvitløk, gulrot og selleri",
      "Tilsett kjøttdeig og brun den",
      "Hell i knuste tomater og rødvin",
      "La småkoke i 45 minutter",
      "Kok spaghettien al dente",
      "Server kjøttsausen over pastaen"
    ],
    tips: "Jo lengre sausen får putre, jo bedre smak!",
    category: "Italiensk"
  },
  {
    id: 203,
    title: "Chili con Carne",
    description: "Meksikansk gryterett med kjøttdeig og bønner",
    ingredients: ["kjøttdeig", "kidneybønner", "tomat", "løk", "paprika", "chili", "spisskum"],
    cookingTime: "50 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 6,
    instructions: [
      "Brun kjøttdeigen med løk",
      "Tilsett hakket paprika",
      "Hell i hermetiske tomater og kidneybønner",
      "Krydre med chili og spisskum",
      "La småkoke i 30 minutter",
      "Server med ris, rømme og tortillachips"
    ],
    tips: "Smaken blir bedre dagen etter - perfekt for meal prep!",
    category: "Meksikansk"
  },
  {
    id: 204,
    title: "Klassisk Hamburger",
    description: "Saftig hjemmelaget burger med kjøttdeig",
    ingredients: ["kjøttdeig", "hamburgerbrød", "salat", "tomat", "ost", "løk", "agurk"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    instructions: [
      "Form kjøttdeigen til burgere",
      "Krydre med salt og pepper",
      "Stek på høy varme, 3-4 min per side",
      "Legg på ost siste minutt",
      "Rist brødene lett",
      "Bygg burgeren med salat, tomat, løk og agurk"
    ],
    tips: "Press ikke ned burgeren mens den steker - da mister den saften!",
    category: "Amerikansk"
  },
  {
    id: 205,
    title: "Kjøttboller i Tomatsaus",
    description: "Italiensk inspirerte kjøttboller i rik tomatsaus",
    ingredients: ["kjøttdeig", "egg", "brødsmuler", "parmesan", "tomat", "hvitløk", "basilikum"],
    cookingTime: "45 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 4,
    instructions: [
      "Bland kjøttdeig med egg, brødsmuler og parmesan",
      "Form til små kjøttboller",
      "Brun kjøttbollene i panne",
      "Lag tomatsaus med hvitløk og basilikum",
      "La kjøttbollene småkoke i sausen i 20 min",
      "Server med pasta eller brød"
    ],
    tips: "Tilsett litt melk i kjøttdeigen for ekstra møre kjøttboller!",
    category: "Italiensk"
  },
  {
    id: 206,
    title: "Cottage Pie",
    description: "Britisk komfortmat med kjøttdeig og potetmos",
    ingredients: ["kjøttdeig", "poteter", "løk", "gulrot", "ærter", "oksekraft", "smør"],
    cookingTime: "60 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 6,
    instructions: [
      "Brun kjøttdeigen med løk",
      "Tilsett gulrot, ærter og oksekraft",
      "La småkoke til tykk konsistens",
      "Kok og mos potetene med smør og melk",
      "Legg kjøttblandingen i ildfast form",
      "Topp med potetmos og gratiner i ovnen"
    ],
    tips: "Bruk en gaffel til å lage mønster i potetmoset - det blir ekstra sprøtt!",
    category: "Britisk"
  },
  {
    id: 207,
    title: "Taco-pai",
    description: "Tex-Mex paiform med kjøttdeig og ost",
    ingredients: ["kjøttdeig", "paideig", "tomat", "paprika", "mais", "ost", "tacokrydder", "rømme"],
    cookingTime: "50 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Brun kjøttdeigen med tacokrydder",
      "Bland kjøtt med hakket paprika, mais og tomat",
      "Legg paideig i en form",
      "Hell i kjøttblandingen",
      "Topp med revet ost",
      "Stek på 200°C i 30 minutter"
    ],
    tips: "Server med rømme, salsa og guacamole!",
    category: "Meksikansk"
  },
  {
    id: 208,
    title: "Kjøttpudding",
    description: "Tradisjonell norsk rett med kjøttdeig og kålrotstappe",
    ingredients: ["kjøttdeig", "løk", "melk", "potetmel", "kålrot", "poteter", "smør"],
    cookingTime: "90 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 6,
    instructions: [
      "Bland kjøttdeig med løk, melk og potetmel",
      "Hell i smurt form",
      "Damp i 60 minutter",
      "Kok og mos kålrot og poteter",
      "Server kjøttpuddingen i skiver",
      "Legg til kålrotstappe og brun saus"
    ],
    tips: "Kjøttpuddingen kan fryses og varmes opp senere!",
    category: "Norsk"
  },
  {
    id: 209,
    title: "Stuffed Paprika",
    description: "Fylt paprika med kjøttdeig og ris",
    ingredients: ["kjøttdeig", "paprika", "ris", "løk", "tomat", "hvitløk", "ost"],
    cookingTime: "50 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 4,
    instructions: [
      "Kutt toppen av paprikaene og fjern kjernene",
      "Brun kjøttdeig med løk og hvitløk",
      "Bland kjøtt med kokt ris og hakket tomat",
      "Fyll paprikaene med blandingen",
      "Topp med revet ost",
      "Stek i ovn på 180°C i 35 minutter"
    ],
    tips: "Bruk fargerike paprikaer for et vakkert fat!",
    category: "Internasjonal"
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
    id: 210,
    title: "Omelett",
    description: "Klassisk fransk omelett med valgfritt fyll",
    ingredients: ["egg", "melk", "smør", "ost", "tomat", "løk"],
    cookingTime: "10 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 2,
    instructions: [
      "Visp egg og melk sammen",
      "Varm smør i en panne",
      "Hell i eggblandingen",
      "La stivne på bunnen, dra kanten inn",
      "Legg fyll på den ene siden",
      "Brett omeletten og server"
    ],
    tips: "Lav varme gir mykere omelett!",
    category: "Rask"
  },
  {
    id: 211,
    title: "Egg Benedict",
    description: "Luksuriøs frokost med posjert egg og hollandaisesaus",
    ingredients: ["egg", "bacon", "brød", "smør", "sitron", "hvitvin"],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 6,
    servings: 2,
    instructions: [
      "Lag hollandaise av eggeplommer, smør og sitron",
      "Posjer eggene i vann med eddik",
      "Rist brødskivene",
      "Stek bacon sprø",
      "Legg bacon og posjert egg på brød",
      "Topp med hollandaisesaus"
    ],
    tips: "Hold hollandaisen varm i vannbad!",
    category: "Frokost"
  },
  {
    id: 212,
    title: "Spansk Tortilla",
    description: "Tykk potetomelett fra Spania",
    ingredients: ["egg", "poteter", "løk", "olivenolej", "salt"],
    cookingTime: "30 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Skjær poteter og løk i tynne skiver",
      "Stek i olivenolje til myke",
      "Visp egg og bland med poteter",
      "Hell i panne og stek på begge sider",
      "Server varm eller kald",
      "Kutt i trekanter"
    ],
    tips: "Perfekt som tapas eller piknik-mat!",
    category: "Spansk"
  },
  {
    id: 213,
    title: "Shakshuka",
    description: "Israelske egg i krydret tomatsaus",
    ingredients: ["egg", "tomat", "paprika", "løk", "hvitløk", "spiskum"],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Sautér løk, hvitløk og paprika",
      "Tilsett hermetiske tomater og krydder",
      "La småkoke i 15 minutter",
      "Lag fordypninger og knekk egg oppi",
      "Dekk til og kok til eggene stivner",
      "Server med brød"
    ],
    tips: "Perfekt for brunch!",
    category: "Israelittisk"
  },
  {
    id: 214,
    title: "Posjerte Egg på Toast",
    description: "Enkel og elegant frokost",
    ingredients: ["egg", "brød", "eddik", "smør", "salt"],
    cookingTime: "10 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 2,
    instructions: [
      "Kok vann med litt eddik",
      "Lag en virvelvind i vannet",
      "Slipp egget forsiktig oppi",
      "Kok i 3-4 minutter",
      "Ta opp med hullslev",
      "Server på ristet brød"
    ],
    tips: "Ferske egg gir best resultat!",
    category: "Frokost"
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
    id: 215,
    title: "Kylling i Karri",
    description: "Kremet kyllingkarri med kokosmjølk",
    ingredients: ["kylling", "kokosmjølk", "karripasta", "løk", "paprika", "ingefær"],
    cookingTime: "35 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Kutt kylling i biter",
      "Stek løk og ingefær",
      "Tilsett karripasta",
      "Hell i kokosmjølk og kylling",
      "La småkoke i 20 minutter",
      "Server med ris"
    ],
    tips: "Tilsett lime for friskhet!",
    category: "Asiatisk"
  },
  {
    id: 216,
    title: "Ovnsbakt Kylling med Grønnsaker",
    description: "Enkel hverdagsmiddag fra ovnen",
    ingredients: ["kylling", "poteter", "gulrot", "løk", "hvitløk", "rosmarin"],
    cookingTime: "60 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Skjær grønnsaker i biter",
      "Krydre kylling med salt, pepper og rosmarin",
      "Legg alt på et stekebrett",
      "Drypp over olje",
      "Stek på 200°C i 45-50 minutter",
      "Sjekk at kyllingen er gjennomstekt"
    ],
    tips: "Vend grønnsakene halvveis!",
    category: "Norsk"
  },
  {
    id: 217,
    title: "Kyllingpanne med Pasta",
    description: "Rask og enkel pastarett",
    ingredients: ["kylling", "pasta", "fløte", "parmesan", "hvitløk", "spinat"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Kok pastaen",
      "Stek kylling i biter",
      "Tilsett hvitløk og spinat",
      "Hell i fløte og parmesan",
      "Bland inn pastaen",
      "Server med ekstra parmesan"
    ],
    tips: "Bruk pastavann for tynnere saus!",
    category: "Italiensk"
  },
  {
    id: 218,
    title: "Kyllingwok med Nudler",
    description: "Asiatisk wok med grønnsaker",
    ingredients: ["kylling", "nudler", "paprika", "brokkoli", "soyasaus", "ingefær"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 3,
    instructions: [
      "Kok nudlene",
      "Stek kylling på høy varme",
      "Tilsett grønnsaker",
      "Hell i soyasaus og ingefær",
      "Bland inn nudlene",
      "Stek i 2 minutter"
    ],
    tips: "Høy varme er nøkkelen!",
    category: "Asiatisk"
  },
  {
    id: 219,
    title: "Grillet Kylling med Salat",
    description: "Sunn og enkel sommerrett",
    ingredients: ["kylling", "salat", "tomat", "agurk", "olivenolej", "sitron"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    instructions: [
      "Mariner kylling med olje og sitron",
      "Grill kyllingen til gjennomstekt",
      "Kutt salat og grønnsaker",
      "Lag dressing av olje og sitron",
      "Skjær kyllingen i skiver",
      "Bland alt sammen"
    ],
    tips: "Perfekt sommermat!",
    category: "Salat"
  },
  {
    id: 220,
    title: "Kylling Quesadilla",
    description: "Meksikansk tortilla med kylling",
    ingredients: ["kylling", "tortilla", "ost", "paprika", "løk", "kremer"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 2,
    instructions: [
      "Stek kylling med paprika og løk",
      "Legg fyll på tortilla",
      "Strø over ost",
      "Brett sammen og stek",
      "Vend når gyllen",
      "Skjær i biter og server"
    ],
    tips: "Server med guacamole!",
    category: "Meksikansk"
  },
  {
    id: 221,
    title: "Kyllingsuppe",
    description: "Varmende suppe med kylling og grønnsaker",
    ingredients: ["kylling", "gulrot", "selleri", "løk", "kyllingbuljong", "nudler"],
    cookingTime: "45 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 6,
    instructions: [
      "Kok kylling i buljong",
      "Ta ut kyllingen og plukk kjøttet",
      "Tilsett grønnsaker i buljongen",
      "La koke til møre",
      "Tilsett kylling og nudler",
      "Kok 5 minutter til"
    ],
    tips: "Perfekt når du er forkjølet!",
    category: "Suppe"
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
  },
  {
    id: 17,
    title: "Klassisk Fish and Chips",
    description: "Sprø torsk med hjemmelaget pommes frites og ertepuré",
    ingredients: [
      "600g torsk",
      "4 store poteter",
      "200g mel",
      "300ml øl",
      "1 ts bakepulver",
      "300g frosne erter",
      "Salt og pepper",
      "Olje til frittering"
    ],
    cookingTime: "45",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Skjær poteter i staver og fritér",
      "Lag røre av mel, øl og bakepulver",
      "Dypp fisken i røren og fritér",
      "Kok erter og mos til puré",
      "Server alt sammen med sitron"
    ],
    tips: "Bruk kaldt øl i røren for ekstra sprøhet!",
    category: "Fisk"
  },
  {
    id: 18,
    title: "Thai Pad See Ew",
    description: "Wok-stekt nudler med mørk soyasaus og kinesisk brokkoli",
    ingredients: [
      "400g brede risnudler",
      "300g svinekjøtt",
      "200g kinesisk brokkoli",
      "3 egg",
      "3 ss mørk soyasaus",
      "2 ss lys soyasaus",
      "2 ss sukker",
      "3 hvitløksfedd",
      "2 ss olje"
    ],
    cookingTime: "20",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 2,
    instructions: [
      "Bløtlegg nudlene i varmt vann",
      "Stek kjøtt og hvitløk i wok",
      "Tilsett nudler og soyasauser",
      "Rør inn egg og brokkoli",
      "Wok til alt er varmt"
    ],
    tips: "Høy varme er nøkkelen til god wok!",
    category: "Asiatisk"
  },
  {
    id: 19,
    title: "Mexicansk Quesadilla",
    description: "Fyldig tortilla med ost, kylling og jalapeño",
    ingredients: [
      "4 store tortillalefser",
      "300g kokt kylling",
      "200g cheddarost",
      "1 rødløk",
      "2 jalapeño",
      "1 paprika",
      "2 ss olje",
      "Rømme og guacamole til servering"
    ],
    cookingTime: "15",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 2,
    instructions: [
      "Stek grønnsaker lett",
      "Fordel fyll på tortilla",
      "Strø over ost og legg på topp-tortilla",
      "Stek til gyllen på begge sider",
      "Skjær i biter og server"
    ],
    tips: "Server med frisk salsa for ekstra smak!",
    category: "Spansk"
  },
  {
    id: 20,
    title: "Indisk Chicken Tikka Masala",
    description: "Kremete kylling i aromat tomatcurry",
    ingredients: [
      "600g kyllingbryst",
      "400ml kokosmjölk",
      "400g hermetiske tomater",
      "200ml fløte",
      "2 løk",
      "4 hvitløksfedd",
      "2 cm ingefær",
      "2 ts garam masala",
      "1 ts kurkuma",
      "1 ts paprika",
      "Basmatiris til servering"
    ],
    cookingTime: "40",
    difficulty: "Middels",
    totalIngredients: 11,
    servings: 4,
    instructions: [
      "Mariner kylling med krydder",
      "Stek kylling til gyllen",
      "Lag curry av løk, hvitløk og tomater",
      "Tilsett kokosmjölk og fløte",
      "La putre sammen i 20 minutter"
    ],
    tips: "Mariner kyllingen over natten for best smak!",
    category: "Indisk"
  },
  {
    id: 21,
    title: "Fransk Coq au Vin",
    description: "Klassisk fransk kylling braissert i rødvin",
    ingredients: [
      "1 hel kylling",
      "750ml rødvin",
      "200g bacon",
      "300g små løk",
      "300g sopp",
      "3 gulrøtter",
      "3 hvitløksfedd",
      "2 ss mel",
      "Timian og laurbærblad"
    ],
    cookingTime: "120",
    difficulty: "Krevende",
    totalIngredients: 9,
    servings: 6,
    instructions: [
      "Stek bacon og kylling gyllen",
      "Sautér grønnsaker",
      "Flambér med cognac",
      "Tilsett vin og krydder",
      "Braiser i 1,5 timer"
    ],
    tips: "Bruk en god rødvin - det gir bedre smak!",
    category: "Fransk"
  },
  {
    id: 22,
    title: "Japansk Teriyaki Laks",
    description: "Glasert laks med sødme teriyaki-saus",
    ingredients: [
      "4 laksebiter",
      "4 ss soyasaus",
      "3 ss mirin",
      "2 ss sukker",
      "1 ss sake",
      "2 cm ingefær",
      "2 vårløk",
      "1 ss sesamolje",
      "Ris og grønne bønner til servering"
    ],
    cookingTime: "25",
    difficulty: "Lett",
    totalIngredients: 9,
    servings: 4,
    instructions: [
      "Bland teriyaki-saus",
      "Stek laks på høy varme",
      "Pensle med saus underveis",
      "La sausen karamellisere",
      "Dryss med vårløk"
    ],
    tips: "Ikke overstekk laksen - den skal være rosa inni!",
    category: "Asiatisk"
  },
  {
    id: 23,
    title: "Gresk Moussaka",
    description: "Lagdelt ovnsrett med aubergine og kjøttsaus",
    ingredients: [
      "3 store auberginer",
      "500g lammekjøtt",
      "2 løk",
      "400g hermetiske tomater",
      "300ml melk",
      "50g smør",
      "50g mel",
      "100g fetaost",
      "2 egg",
      "Oregano og kanel"
    ],
    cookingTime: "90",
    difficulty: "Krevende",
    totalIngredients: 10,
    servings: 6,
    instructions: [
      "Skjær og salt auberginer",
      "Lag kjøttsaus med tomater",
      "Lag hvit saus med melk",
      "Lag lagvis i form",
      "Gratiner i ovn 45 min"
    ],
    tips: "Salt auberginene først for å trekke ut bitterhet!",
    category: "Gresk"
  },
  {
    id: 24,
    title: "Koreansk Bibimbap",
    description: "Fargerik skål med ris, grønnsaker og stekt egg",
    ingredients: [
      "300g basmatiris",
      "200g oksekjøtt",
      "1 gulrot",
      "200g spinat",
      "1 squash",
      "200g soyabønner",
      "4 egg",
      "4 ss gochujang",
      "3 ss sesamolje",
      "2 ss soyasaus"
    ],
    cookingTime: "35",
    difficulty: "Middels",
    totalIngredients: 10,
    servings: 4,
    instructions: [
      "Kok ris",
      "Mariner og stek kjøtt",
      "Forbered alle grønnsaker separat",
      "Stek egg solgul",
      "Samle alt i skåler med chili-paste"
    ],
    tips: "Alle grønnsaker skal ha sin egen smak!",
    category: "Asiatisk"
  },
  {
    id: 25,
    title: "Amerikansk BBQ Pulled Pork",
    description: "Langsomt røkt svinekjøtt med BBQ-saus",
    ingredients: [
      "1,5kg svineskulder",
      "2 ss paprika",
      "2 ss brunsuker",
      "1 ss chili",
      "1 ss hvitløkspulver",
      "200ml BBQ-saus",
      "Hamburgerbrød",
      "Coleslaw til servering"
    ],
    cookingTime: "480",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 8,
    instructions: [
      "Gni kjøtt med krydder",
      "Røk på lav varme 6-8 timer",
      "Pensle med BBQ-saus",
      "Riv kjøttet når mørt",
      "Server i brød med coleslaw"
    ],
    tips: "Tålmodighet er nøkkelen - la kjøttet bli helt mørt!",
    category: "Amerikansk"
  },
  {
    id: 26,
    title: "Tyrkisk Kebab",
    description: "Krydret lammefars grillet på spyd",
    ingredients: [
      "600g lammedeig",
      "1 løk",
      "3 hvitløksfedd",
      "2 ts sumac",
      "1 ts koriander",
      "1 ts spiskum",
      "Persille",
      "Pita brød",
      "Yoghurt og tomater til servering"
    ],
    cookingTime: "30",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 4,
    instructions: [
      "Bland kjøttdeig med krydder",
      "Form rundt grillspyd",
      "Grill på høy varme",
      "Vend ofte for jevn steking",
      "Server med brød og tilbehør"
    ],
    tips: "Kjøl farsen før du former for bedre konsistens!",
    category: "Tyrkisk"
  },
  {
    id: 27,
    title: "Brasiliansk Feijoada",
    description: "Klassisk bønne- og kjøttgryte fra Brasil",
    ingredients: [
      "400g svarte bønner",
      "300g saltet svinekjøtt",
      "200g chorizo",
      "150g bacon",
      "2 løk",
      "4 hvitløksfedd",
      "2 laurbærblad",
      "Ris og appelsinskiver til servering"
    ],
    cookingTime: "180",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Bløtlegg bønner over natten",
      "Kok kjøtt og bacon",
      "Sautér løk og hvitløk",
      "Kombiner alt og koke sakte",
      "Server med ris og appelsiner"
    ],
    tips: "Denne retten blir bare bedre neste dag!",
    category: "Brasiliansk"
  },
  {
    id: 28,
    title: "Vietnamesisk Pho Bo",
    description: "Aromatisk oksekjøttsuppe med nudler og urter",
    ingredients: [
      "1kg oksebein",
      "400g oksekjøtt",
      "300g risnudler",
      "1 løk",
      "5 cm ingefær",
      "2 stjerneanis",
      "1 kanelstang",
      "Fiskesaus",
      "Koriander og mynthe"
    ],
    cookingTime: "360",
    difficulty: "Krevende",
    totalIngredients: 9,
    servings: 4,
    instructions: [
      "Bland bein og lag kraftig buljong",
      "Krydre buljongen med krydder",
      "Kok nudler separat",
      "Skjær kjøtt tynt",
      "Samle alt med friske urter"
    ],
    tips: "Buljongen må koke lenge for rik smak!",
    category: "Asiatisk"
  },
  {
    id: 29,
    title: "Portugisisk Pastéis de Nata",
    description: "Kremete vaniljepudding i sprø butterdeigsbunn",
    ingredients: [
      "1 pakke butterdeig",
      "500ml melk",
      "6 eggeplommer",
      "150g sukker",
      "40g mel",
      "1 vaniljestang",
      "Kanel til dryss"
    ],
    cookingTime: "45",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 12,
    instructions: [
      "Lag vaniljekrem av melk og egg",
      "Form butterdeig i muffinsformer",
      "Fyll med krem",
      "Bak til gylne",
      "Dryss med kanel"
    ],
    tips: "Spis dem varme for best opplevelse!",
    category: "Portugisisk"
  },
  {
    id: 30,
    title: "Marokkansk Tagine",
    description: "Langsomt tilberedt lam med aprikoser og mandler",
    ingredients: [
      "800g lammekjøtt",
      "200g tørkede aprikoser",
      "100g mandler",
      "2 løk",
      "2 ts kanel",
      "1 ts ingefær",
      "1 ts ras el hanout",
      "Koriander",
      "Couscous til servering"
    ],
    cookingTime: "150",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 4,
    instructions: [
      "Brun kjøttet i tagine",
      "Tilsett løk og krydder",
      "Legg i aprikoser",
      "La putre sakte i 2 timer",
      "Garnér med mandler"
    ],
    tips: "Tradisjonelt lages dette i leirgryte!",
    category: "Marokkansk"
  },
  {
    id: 31,
    title: "Italiensk Osso Buco",
    description: "Braissert kalveskank med safran-risotto",
    ingredients: [
      "1kg kalveskank",
      "2 løk",
      "2 gulrøtter",
      "2 selleriblader",
      "400g hermetiske tomater",
      "500ml hvitvin",
      "500ml kalvebuljong",
      "Sitronskall og persille",
      "Risotto rice og safran"
    ],
    cookingTime: "180",
    difficulty: "Krevende",
    totalIngredients: 9,
    servings: 4,
    instructions: [
      "Brun kalveskanken godt",
      "Sautér grønnsaker",
      "Tilsett vin og buljong",
      "Braiser i 2,5 timer",
      "Server med safran-risotto"
    ],
    tips: "Beinmargen gir den rikeste smaken!",
    category: "Italiensk"
  },
  {
    id: 32,
    title: "Libanesisk Tabbouleh",
    description: "Frisk salat med bulgur, persille og mynthe",
    ingredients: [
      "200g bulgur",
      "300g persille",
      "100g mynthe",
      "4 tomater",
      "3 vårløk",
      "Saft fra 3 sitroner",
      "100ml olivenolje",
      "Salt og pepper"
    ],
    cookingTime: "30",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Bløtlegg bulgur i varmt vann",
      "Hakk alle urter fint",
      "Bland med tomater og vårløk",
      "Tilsett sitron og olje",
      "La trekke i kjøleskapet"
    ],
    tips: "Persille skal dominere - ikke bulgur!",
    category: "Libanesisk"
  },
  {
    id: 33,
    title: "Russisk Beef Stroganoff",
    description: "Kremete oksekjött med sopp og rømme",
    ingredients: [
      "600g oksemørbrad",
      "400g champignon",
      "2 løk",
      "300ml rømme",
      "2 ss mel",
      "3 ss cognac",
      "Oksekraft",
      "Dill og persille"
    ],
    cookingTime: "45",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Skjær kjøtt i strimler",
      "Stek kjøtt raskt på høy varme",
      "Sautér løk og sopp",
      "Tilsett rømme og krydder",
      "Server med ris eller pasta"
    ],
    tips: "Ikke overstekk kjøttet - skal være rosa!",
    category: "Russisk"
  },
  {
    id: 34,
    title: "Peruansk Ceviche",
    description: "Rå fisk marinert i limesaft med chili",
    ingredients: [
      "500g hvit fisk",
      "Saft fra 8 limer",
      "2 rødløk",
      "2 chili",
      "Koriander",
      "1 søtpotet",
      "Mais",
      "Salt"
    ],
    cookingTime: "20",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Skjær fisk i terninger",
      "Mariner i limesaft 15 min",
      "Tilsett løk og chili",
      "Garnér med koriander",
      "Server med søtpotet"
    ],
    tips: "Fisken må være kjempeferskt!",
    category: "Peruansk"
  },
  {
    id: 35,
    title: "Hungarsk Goulash",
    description: "Hearty kjøttgryte med paprika og potet",
    ingredients: [
      "800g oksekjøtt",
      "4 løk",
      "3 ss paprika",
      "4 poteter",
      "2 paprika",
      "400g tomater",
      "Kmin og maggiram",
      "Rømme til servering"
    ],
    cookingTime: "150",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Brun kjøtt i store biter",
      "Sautér løk med paprika",
      "Tilsett tomater og væske",
      "Putre sakte i 2 timer",
      "Tilsett poteter siste 30 min"
    ],
    tips: "Paprika er hovedingrediensen - ikke spar!",
    category: "Hungarsk"
  },
  {
    id: 36,
    title: "Jamaikansk Jerk Chicken",
    description: "Grillet kylling med krydret jerk-marinade",
    ingredients: [
      "1 hel kylling",
      "4 scotch bonnet chili",
      "6 vårløk",
      "3 cm ingefær",
      "4 hvitløksfedd",
      "Saft fra 3 limer",
      "3 ss allspice",
      "2 ss brunsuker"
    ],
    cookingTime: "90",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Bland alle marinade-ingredienser",
      "Mariner kylling over natten",
      "Grill på middels varme",
      "Vend ofte og pensle med marinade",
      "Server med ris og bønner"
    ],
    tips: "Scotch bonnet gir autentisk smak og varme!",
    category: "Jamaikansk"
  },
  {
    id: 37,
    title: "Kinesisk Sweet and Sour Pork",
    description: "Fritert svinekjøtt i søt og sur saus",
    ingredients: [
      "500g svinekjøtt",
      "1 ananas",
      "1 grønn paprika",
      "1 rød paprika",
      "3 ss eddik",
      "4 ss sukker",
      "2 ss ketchup",
      "Maisstivelse til panering"
    ],
    cookingTime: "35",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Paner og fritér svinekjøtt",
      "Stek grønnsaker i wok",
      "Lag søt og sur saus",
      "Bland alt sammen",
      "Server med dampet ris"
    ],
    tips: "Ananas må være fersk for best smak!",
    category: "Kinesisk"
  },
  {
    id: 38,
    title: "Etiopisk Doro Wat",
    description: "Krydret kyllinggryte med hardkokte egg",
    ingredients: [
      "1 hel kylling",
      "6 hardkokte egg",
      "4 røde løk",
      "4 ss berbere-krydder",
      "100ml rødvin",
      "3 ss tomapuré",
      "Ingefær og hvitløk",
      "Injera brød"
    ],
    cookingTime: "120",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Karamelliser løk sakte",
      "Tilsett berbere-krydder",
      "Brun kyllingbiter",
      "Putre sammen i 1,5 timer",
      "Tilsett egg siste 15 min"
    ],
    tips: "Berbere-krydder er essensielt for autentisk smak!",
    category: "Etiopisk"
  },
  {
    id: 39,
    title: "Argentinsk Chimichurri Steak",
    description: "Grillet biff med fersk chimichurri-saus",
    ingredients: [
      "4 entrecôte-biter",
      "200g persille",
      "4 hvitløksfedd",
      "100ml olivenolje",
      "3 ss rødvinseddik",
      "1 ts chili",
      "Oregano",
      "Grovt salt"
    ],
    cookingTime: "25",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Lag chimichurri av urter og olje",
      "Salt kjøttet 30 min før grilling",
      "Grill på høy varme",
      "La hvile 5 minutter",
      "Server med chimichurri"
    ],
    tips: "Kjøttet skal hvile etter grilling!",
    category: "Argentinsk"
  },
  {
    id: 40,
    title: "Irsk Shepherd's Pie",
    description: "Lammefars toppet med kremet potetmos",
    ingredients: [
      "600g lammefars",
      "1kg poteter",
      "2 løk",
      "2 gulrøtter",
      "200g erter",
      "2 ss worcestersaus",
      "500ml lammebuljong",
      "Smør og melk til mos"
    ],
    cookingTime: "75",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Stek lammefars med grønnsaker",
      "Tilsett buljong og saus",
      "Lag kremet potetmos",
      "Legg lagvis i ildfast form",
      "Gratiner i ovn 25 min"
    ],
    tips: "Potetmosen skal være ekstra kremet!",
    category: "Irsk"
  },
  {
    id: 41,
    title: "Spansk Gazpacho",
    description: "Kald tomatsuppe med grønnsaker",
    ingredients: [
      "1kg modne tomater",
      "1 agurk",
      "1 rød paprika",
      "1 løk",
      "3 hvitløksfedd",
      "100ml olivenolje",
      "3 ss sherryeddik",
      "Basilikum til garnering"
    ],
    cookingTime: "15",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Skald og skall tomater",
      "Hakk alle grønnsaker",
      "Kjør alt sammen i blender",
      "Sil gjennom finmasket sil",
      "Kjøl ned før servering"
    ],
    tips: "Bästa på varme sommerdager!",
    category: "Spansk"
  },
  {
    id: 42,
    title: "Tyrkisk Börek",
    description: "Lag på lag med butterdeig og fetaost",
    ingredients: [
      "8 ark filodeig",
      "300g fetaost",
      "4 egg",
      "300ml melk",
      "100g smør",
      "Dill og persille",
      "Sort pepper",
      "Sesamfrø til topping"
    ],
    cookingTime: "60",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 8,
    instructions: [
      "Smelt smør og pensel deig",
      "Bland ost med egg og urter",
      "Legg lagvis i form",
      "Hell melkblanding over",
      "Bak til gyllen"
    ],
    tips: "Hold deigen fuktig under arbeidet!",
    category: "Tyrkisk"
  },
  {
    id: 43,
    title: "Britisk Bangers and Mash",
    description: "Grillede pølser med kremet potetmos og løksaus",
    ingredients: [
      "8 Cumberland pölser",
      "1kg poteter",
      "4 store løk",
      "500ml oksekraft",
      "100ml rødvin",
      "100g smör",
      "200ml melk",
      "Timian"
    ],
    cookingTime: "45",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Grill pølsene sakte",
      "Lag kremet potetmos",
      "Karamelliser løk sakte",
      "Tilsett kraft og vin til løk",
      "Server alt sammen"
    ],
    tips: "Potetmosen må være silkemyk!",
    category: "Britisk"
  },
  {
    id: 44,
    title: "Pakistansk Biryani",
    description: "Krydret risdish med lam og safran",
    ingredients: [
      "500g lammekjøtt",
      "400g basmatiris",
      "2 løk",
      "Safran",
      "Kardemomme og kanel",
      "Yoghurt",
      "Ingefær og hvitløk",
      "Koriander og mynthe"
    ],
    cookingTime: "90",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Mariner kjøtt i yoghurt",
      "Fritér løk til gylden",
      "Kok ris med krydder",
      "Lag lagvis i tung gryte",
      "Dum-cook på lav varme"
    ],
    tips: "Dum-cooking er nøkkelen til perfekt biryani!",
    category: "Pakistansk"
  },
  {
    id: 45,
    title: "Nederlandsk Erwtensoep",
    description: "Tykk ertedish med røkt kjøtt",
    ingredients: [
      "500g tørkede gule erter",
      "300g røkt bacon",
      "200g røkt pølse",
      "2 løk",
      "3 gulrøtter",
      "2 poteter",
      "Selleri",
      "Laurbærblad"
    ],
    cookingTime: "180",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Kok erter til de faller fra hverandre",
      "Tilsett røkt kjøtt",
      "Legg i grønnsaker",
      "Kok til tykk konsistens",
      "Server med rugbrød"
    ],
    tips: "Skal være så tykk at skjeen står oppreist!",
    category: "Nederlandsk"
  },
  {
    id: 46,
    title: "Filippinsk Adobo",
    description: "Svinekjøtt braissert i soyasaus og eddik",
    ingredients: [
      "800g svinekjøtt",
      "150ml soyasaus",
      "100ml hviteddik",
      "8 hvitløksfedd",
      "3 laurbærblad",
      "1 ts hele pepperkorn",
      "2 ss brunsuker",
      "Dampet ris"
    ],
    cookingTime: "75",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Mariner kjøtt i soyasaus",
      "Brun kjøttstykker lett",
      "Tilsett alle ingredienser",
      "Putre til kjøttet er mørt",
      "Server med dampet ris"
    ],
    tips: "Balansen mellom søtt, salt og surt er viktig!",
    category: "Filippinsk"
  },
  {
    id: 47,
    title: "Polsk Pierogi",
    description: "Dumplings fylt med potet og ost",
    ingredients: [
      "400g mel",
      "200ml varmt vann",
      "1 egg",
      "4 store poteter",
      "200g cottage cheese",
      "2 løk",
      "Smør til steking",
      "Rømme til servering"
    ],
    cookingTime: "90",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Lag deig og la hvile",
      "Kok og mos poteter",
      "Bland potet med ost",
      "Form pierogi og kok",
      "Stek i smør før servering"
    ],
    tips: "Deigen må ikke bli for tørr!",
    category: "Polsk"
  },
  {
    id: 48,
    title: "Svensk Köttbullar",
    description: "Klassiske kjøttboller med fløtesaus",
    ingredients: [
      "300g oksekjøtt",
      "200g svinekjøtt",
      "1 løk",
      "100ml melk",
      "50g raspbrød",
      "300ml fløte",
      "2 ss mel",
      "Tyttebær til servering"
    ],
    cookingTime: "45",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Bland kjøttdeig med raspbrød",
      "Form små kjøttboller",
      "Stek i smør til gylne",
      "Lag fløtesaus i samme panne",
      "Server med poteter og tyttebær"
    ],
    tips: "Kjøttbollene skal være jevnt gylne!",
    category: "Svensk"
  },
  {
    id: 49,
    title: "Tsjekkisk Goulash",
    description: "Hearty kjöttgryte med øl og kmin",
    ingredients: [
      "800g oksekjöt",
      "4 løk",
      "3 ss paprika",
      "500ml mörkt öl",
      "2 ss tomatpuré",
      "2 ts kmin",
      "2 laurbærblad",
      "Knödel til servering"
    ],
    cookingTime: "150",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Brun kjöttet i store biter",
      "Karamelliser löken sakte",
      "Tilsett paprika og tomatpuré",
      "Hell i öl og krydder",
      "Putre sakte i 2 timer"
    ],
    tips: "Öl gir en dyp, mørk smak!",
    category: "Tsjekkisk"
  },
  {
    id: 50,
    title: "Georgisk Khachapuri",
    description: "Brödskål fyllt med ost og egg",
    ingredients: [
      "500g mel",
      "300ml yoghurt",
      "1 ts bakepulver",
      "400g georgisk ost",
      "4 egg",
      "100g smør",
      "Salt",
      "Fersk koriander"
    ],
    cookingTime: "60",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Lag deig av mel og yoghurt",
      "Form til båt-form",
      "Fyll med ost",
      "Bak til gyllen",
      "Legg rådt egg på toppen"
    ],
    tips: "Spis medan det är varmt och ostigt!",
    category: "Georgisk"
  },
  {
    id: 51,
    title: "Australsk Meat Pie",
    description: "Klassisk kjøttpai med flakmousse",
    ingredients: [
      "500g oksekjøtt",
      "2 løk",
      "2 ss mel",
      "500ml oksekraft",
      "2 butterdeigsplater",
      "1 egg",
      "Worcestersaus",
      "Tomatsaus til servering"
    ],
    cookingTime: "75",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Stek kjøtt og løk",
      "Tilsett mel og kraft",
      "La koke til tykk",
      "Fyll i paiform med deig",
      "Bak til gyllen"
    ],
    tips: "Perfekt til fotballkamp!",
    category: "Australsk"
  },
  {
    id: 52,
    title: "Singaporeansk Chili Crab",
    description: "Krabbe i søt og krydret tomatsaus",
    ingredients: [
      "2 store krabber",
      "4 ss ketchup",
      "2 ss chilisaus",
      "3 ss riservin",
      "2 ss sukker",
      "4 hvitløksfedd",
      "2 cm ingefær",
      "2 egg"
    ],
    cookingTime: "30",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Del krabber i biter",
      "Stek hvitløk og ingefær",
      "Tilsett sauser og sukker",
      "Wok krabbene i sausen",
      "Rør inn egg på slutten"
    ],
    tips: "Bruk hendene - det blir sølete!",
    category: "Singaporeansk"
  },
  {
    id: 53,
    title: "Kanadisk Poutine",
    description: "Pommes frites med ostekorn og gravy",
    ingredients: [
      "1kg poteter",
      "300g ostekorn",
      "500ml oksekraft",
      "3 ss mel",
      "2 ss smør",
      "Olje til frittering",
      "Salt og pepper",
      "Fersk tymian"
    ],
    cookingTime: "40",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Fritér poteter til gylne",
      "Lag tykk gravy av kraft",
      "Legg pommes frites i skål",
      "Dryss ostekorn over",
      "Hell varm gravy over alt"
    ],
    tips: "Ostekornene må være friske og squeaky!",
    category: "Kanadisk"
  },
  {
    id: 54,
    title: "Afrikansk Bobotie",
    description: "Krydret lammefars med eggstanning",
    ingredients: [
      "600g lammefars",
      "2 løk",
      "2 ss karri",
      "100g rosiner",
      "2 skiver brød",
      "300ml melk",
      "3 egg",
      "Mandler og aprikos"
    ],
    cookingTime: "60",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Stek lammefars med krydder",
      "Tilsett rosiner og frukt",
      "Legg i ildfast form",
      "Topp med eggestanning",
      "Gratiner til gyllen"
    ],
    tips: "Søt og krydret kombinasjon!",
    category: "Sørafrikansk"
  },
  {
    id: 55,
    title: "Israelsk Shakshuka",
    description: "Pocherte egg i krydret tomatsaus",
    ingredients: [
      "6 egg",
      "400g hermetiske tomater",
      "2 rød paprika",
      "1 løk",
      "4 hvitløksfedd",
      "2 ts paprika",
      "1 ts kmin",
      "Fetaost og persille"
    ],
    cookingTime: "30",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Sautér løk og paprika",
      "Tilsett tomater og krydder",
      "La putre 15 minutter",
      "Lag hull og knekk inn egg",
      "Dekk til eggene stokner"
    ],
    tips: "Perfekt frokost eller lunch!",
    category: "Israelsk"
  },
  {
    id: 56,
    title: "Skotsk Haggis",
    description: "Tradisjonell skotsk pölse med nepe og potet",
    ingredients: [
      "500g lammeinnmat",
      "200g havremel",
      "2 løk",
      "Salvie og timian",
      "500g nepe",
      "500g poteter",
      "Smør",
      "Whisky til flambering"
    ],
    cookingTime: "180",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Kok innmat til mørt",
      "Mal sammen med havremel",
      "Krydre godt",
      "Form og kok i klut",
      "Server med nepe og potet"
    ],
    tips: "Burns Night tradisjon!",
    category: "Skotsk"
  },
  {
    id: 57,
    title: "Armenisk Dolma",
    description: "Fylte vinblad med ris og kjøtt",
    ingredients: [
      "30 vinblad",
      "300g lammefars",
      "200g ris",
      "2 løk",
      "Mynthe og persille",
      "Sitron",
      "Olivenolje",
      "Pinjenøtter"
    ],
    cookingTime: "90",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Blankkok vinblad",
      "Bland fars med ris",
      "Rull i vinblad",
      "Legg lagvis i gryte",
      "Putre i sitronvann"
    ],
    tips: "Rull stramt men ikke for hardt!",
    category: "Armenisk"
  },
  {
    id: 58,
    title: "Malteisisk Fenkata",
    description: "Braissert kanin med hvitvin og krydder",
    ingredients: [
      "1 kanin i biter",
      "500ml hvitvin",
      "4 tomater",
      "2 løk",
      "Rosmarin og tymian",
      "Hvitløk",
      "Olivenolje",
      "Poteter til servering"
    ],
    cookingTime: "120",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Brun kaninbitene godt",
      "Sautér løk og hvitløk",
      "Tilsett vin og tomater",
      "Braiser til mørt",
      "Server med poteter"
    ],
    tips: "Nasjonal rett på Malta!",
    category: "Malteisisk"
  },
  {
    id: 59,
    title: "Nepalsk Dal Bhat",
    description: "Linsdish med ris og grønnsaker",
    ingredients: [
      "300g røde linser",
      "300g basmatiris",
      "1 aubergine",
      "200g spinat",
      "Kurkuma og koriander",
      "Ingefær og hvitløk",
      "Ghee",
      "Pickle til servering"
    ],
    cookingTime: "45",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Kok linser med krydder",
      "Dampkok ris",
      "Sautér grønnsaker",
      "Krydre med garam masala",
      "Server alt sammen"
    ],
    tips: "Daglig mat i Nepal!",
    category: "Nepalsk"
  },
  {
    id: 60,
    title: "Islandsk Hákarl",
    description: "Fermentert hai med brennevin",
    ingredients: [
      "500g fermentert hai",
      "Brennevin",
      "Rugbrød",
      "Smør",
      "Kaviar",
      "Hardkokte egg",
      "Dill",
      "Sennep"
    ],
    cookingTime: "10",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 8,
    instructions: [
      "Skjær hai i terninger",
      "Server på rugbrød",
      "Drikk brennevin til",
      "Pust dypt før du spiser",
      "Hold pusten!"
    ],
    tips: "Ikke for de sarte sjeler!",
    category: "Islandsk"
  },
  {
    id: 61,
    title: "Bulgarsk Shopska Salat",
    description: "Frisk salat med fetaost og tomater",
    ingredients: [
      "4 tomater",
      "2 agurker",
      "1 rød paprika",
      "1 løk",
      "200g fetaost",
      "Olivenolje",
      "Rødvinseddik",
      "Fersk petersille"
    ],
    cookingTime: "15",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Skjær alle grønnsaker",
      "Bland med olje og eddik",
      "Riv fetaost grovt over",
      "Garnér med petersille",
      "La trekke 15 minutter"
    ],
    tips: "Perfekt sommerrett!",
    category: "Bulgarsk"
  },
  {
    id: 62,
    title: "Uruguayansk Asado",
    description: "Grillet kjøtt med chimichurri",
    ingredients: [
      "1kg biffe-udskæringer",
      "4 chorizo pølser",
      "200g persille",
      "Hvitløk og oregano",
      "Olivenolje",
      "Rødvinseddik",
      "Grovt salt",
      "Rødvin til servering"
    ],
    cookingTime: "90",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 8,
    instructions: [
      "Tenn grill med glør",
      "Salt kjøttet 1 time før",
      "Grill sakte på lav varme",
      "Lag chimichurri",
      "Server med rødvin"
    ],
    tips: "Tålmodighet gir det beste resultatet!",
    category: "Uruguayansk"
  },
  {
    id: 63,
    title: "Indonesisk Rendang",
    description: "Langsomt kokt oksekjøtt i kokosmjölk",
    ingredients: [
      "1kg oksekjøtt",
      "400ml kokosmjölk",
      "8 sjalottløk",
      "6 chilier",
      "Galangal og sitrongress",
      "Tamarind",
      "Palm sugar",
      "Kaffirlime blad"
    ],
    cookingTime: "240",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Lag krydderpasta",
      "Brun kjøtt med krydder",
      "Tilsett kokosmjölk",
      "Putre på lav varme 3-4 timer",
      "Kjøttet skal bli mørkt"
    ],
    tips: "Verdens beste slow-cook rett!",
    category: "Indonesisk"
  },
  {
    id: 64,
    title: "Kazakstansk Beshbarmak",
    description: "Kokt kjøtt med hjemmelaget pasta",
    ingredients: [
      "800g lammekjøtt",
      "400g mel",
      "3 egg",
      "3 løk",
      "Salt og pepper",
      "Laurbærblad",
      "Fersk dill",
      "Kjöttbuljong"
    ],
    cookingTime: "150",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Kok kjøtt til mørt",
      "Lag pasta av mel og egg",
      "Rul og skjær pasta",
      "Kok pasta i kjøttbuljong",
      "Bland kjøtt med pasta"
    ],
    tips: "Nasjonalretten i Kazakstan!",
    category: "Kazakstansk"
  },
  {
    id: 65,
    title: "Litauisk Cepelinai",
    description: "Store potetdumplings med kjøttfyll",
    ingredients: [
      "2kg poteter",
      "400g svinekjøttfars",
      "200g bacon",
      "2 løk",
      "Rømme",
      "Dill",
      "Salt og pepper",
      "Smør til servering"
    ],
    cookingTime: "90",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Riv poteter og press ut væske",
      "Lag kjøttfyll",
      "Form store dumplings",
      "Kok i saltvann",
      "Server med rømme og bacon"
    ],
    tips: "Looks like zeppelins - derav navnet!",
    category: "Litauisk"
  },
  {
    id: 66,
    title: "Mongolsk Khorkhog",
    description: "Fårekjøtt kokt med hete steiner",
    ingredients: [
      "2kg fårekjøtt",
      "4 poteter",
      "2 gulrøtter",
      "1 kålhode",
      "Løk",
      "Salt og pepper",
      "Hete steiner",
      "Metallbeholder"
    ],
    cookingTime: "120",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 8,
    instructions: [
      "Varm steiner i ild",
      "Legg kjøtt og grønnsaker lagvis",
      "Legg hete steiner mellom lagene",
      "Dekk til og la koke",
      "Åpne etter 2 timer"
    ],
    tips: "Tradisjonell nomade-metode!",
    category: "Mongolsk"
  },
  {
    id: 67,
    title: "Salvadoransk Pupusa",
    description: "Tykk maistortilla fylt med ost og bønner",
    ingredients: [
      "500g masa harina",
      "300ml varmt vann",
      "200g mozzarella",
      "200g svarte bønner",
      "Koriander",
      "Salsa verde",
      "Curtido (syltet kål)",
      "Salt"
    ],
    cookingTime: "45",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Bland masa med vann",
      "Form til flate kaker",
      "Fyll med ost og bønner",
      "Lukk og form runde",
      "Stek på griddle til sprø"
    ],
    tips: "El Salvador sin nasjonalrett!",
    category: "Salvadoransk"
  },
  {
    id: 68,
    title: "Uzbekistansk Plov",
    description: "Risrett med lam, gulrøtter og krydder",
    ingredients: [
      "500g lammekjøtt",
      "400g ris",
      "4 gulrøtter",
      "2 løk",
      "Spiskum og koriander",
      "Safran",
      "Rosiner",
      "Bomullsolje"
    ],
    cookingTime: "90",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    instructions: [
      "Brun kjøtt i gryten",
      "Tilsett løk og gulrøtter",
      "Legg ris på toppen",
      "Hell over kokhett vann",
      "Kok til ris er ferdig"
    ],
    tips: "Center stykke kjøtt i midten!",
    category: "Uzbekistansk"
  },
  {
    id: 69,
    title: "Laotisk Larb",
    description: "Krydret kjøttsalat med urter og lime",
    ingredients: [
      "500g svinekjøtt",
      "4 sjalottløk",
      "Mynthe og koriander",
      "Saft fra 4 limer",
      "3 ss fiskesaus",
      "2 ss rismel",
      "Chilier",
      "Salathoder til servering"
    ],
    cookingTime: "25",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Stek kjøtt til gjennomstekt",
      "Rist rismel i tørr panne",
      "Bland kjøtt med alle ingredienser",
      "Smak til med lime og fiskesaus",
      "Server i salathoder"
    ],
    tips: "Friskt og krydret - perfect!",
    category: "Laotisk"
  },
  {
    id: 70,
    title: "Jemenitisk Saltah",
    description: "Krydret gryteret med fenugreek-skum",
    ingredients: [
      "500g lammekjøtt",
      "4 tomater",
      "2 løk",
      "4 ss fenugreek-frø",
      "Zhug (grønn chili-paste)",
      "Koriander",
      "Hulba (fenugreek-skum)",
      "Flatbrød"
    ],
    cookingTime: "90",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 4,
    instructions: [
      "Stek kjøtt til mørt",
      "Tilsett tomater og løk",
      "Lag hulba av fenugreek",
      "Bland inn zhug",
      "Topp med skummende hulba"
    ],
    tips: "Hulba gir unik tekstur!",
    category: "Jemenitisk"
  }
];