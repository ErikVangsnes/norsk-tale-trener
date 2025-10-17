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
    ingredients: [
      { name: "pasta", amount: 400, unit: "g spaghetti" },
      { name: "hvitløk", amount: 6, unit: "fedd" },
      { name: "olivenolej", amount: 1, unit: "dl" },
      { name: "chili", amount: 1, unit: "ts flak" },
      { name: "parmesan", amount: 50, unit: "g" },
      { name: "persille", amount: 2, unit: "ss hakket" }
    ],
    cookingTime: "15 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 3,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 400g spaghetti al dente i saltet vann",
      "Varm 1 dl olivenolej i en stor panne",
      "Tilsett 6 fedd finhakket hvitløk og 1 ts chiliflak",
      "Stek til hvitløken er gyllen, ikke brun (ca 1 minutt)",
      "Tilsett den varme pastaen med ca 1 dl pastavann",
      "Bland godt og server med 50g revet parmesan og persille"
    ],
    tips: "Ikke la hvitløken bli brun - da blir smaken bitter!",
    category: "Italiensk"
  },
  {
    id: 5,
    title: "Fiskekaker med Poteter",
    description: "Tradisjonelle norske fiskekaker med kokte poteter",
    ingredients: [
      { name: "laks", amount: 500, unit: "g filet" },
      { name: "egg", amount: 1, unit: "stk" },
      { name: "melk", amount: 1, unit: "dl" },
      { name: "poteter", amount: 800, unit: "g" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "45 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 800g poteter til de er møre",
      "Mal 500g laksefilet i en kjøttkvern eller foodprocessor",
      "Bland fisken med 1 egg, 1 dl melk, 1 ts salt og 0.5 ts pepper",
      "Form til 12 små kaker",
      "Stek i 50g smør på middels varme til gylne (ca 4 min per side)",
      "Server med de kokte potetene og erter"
    ],
    tips: "Fiskekakene kan lages på forhånd og varmes opp senere!",
    category: "Norsk"
  },
  {
    id: 222,
    title: "Stekt Laks med Poteter",
    description: "Enkel og sunn lakserett",
    ingredients: [
      { name: "laks", amount: 600, unit: "g filet" },
      { name: "poteter", amount: 800, unit: "g" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "sitron", amount: 1, unit: "stk" },
      { name: "dill", amount: 0.5, unit: "bunt" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 800g poteter til møre",
      "Krydre 600g laksefilt med 1 ts salt og 0.5 ts pepper",
      "Stek laksen i 50g smør, skinnsiden først, i 4 min",
      "Vend og stek ferdig, 3-4 min til",
      "Hell over brunet smør og saft fra 1 sitron",
      "Pynt med 0.5 bunt fersk dill"
    ],
    tips: "Ikke overstekk laksen!",
    category: "Norsk"
  },
  {
    id: 223,
    title: "Laks i Ovn med Grønnsaker",
    description: "Sunn og enkel ovnsrett",
    ingredients: [
      { name: "laks", amount: 600, unit: "g filet" },
      { name: "brokkoli", amount: 300, unit: "g" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "squash", amount: 1, unit: "stk" },
      { name: "olivenolej", amount: 3, unit: "ss" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "sitron", amount: 1, unit: "stk" },
      { name: "salt", amount: 1, unit: "ts" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Forvarm ovnen til 200°C",
      "Legg 600g laksefilt og grønnsaker (300g brokkoli, 2 paprika, 1 squash) på brett",
      "Drypp over 3 ss olivenolej og tilsett 3 pressede fedd hvitløk",
      "Krydre med 1 ts salt og pepper",
      "Stek i 18-20 minutter til laksen er gjennomstekt",
      "Server med sitronbåter"
    ],
    tips: "Perfekt hverdagsmiddag!",
    category: "Norsk"
  },
  {
    id: 224,
    title: "Lakseburger",
    description: "Saftig lakseburger med dill",
    ingredients: [
      { name: "laks", amount: 500, unit: "g filet" },
      { name: "egg", amount: 1, unit: "stk" },
      { name: "brødsmuler", amount: 1, unit: "dl" },
      { name: "dill", amount: 3, unit: "ss hakket" },
      { name: "løk", amount: 1, unit: "stk liten" },
      { name: "hamburgerbrød", amount: 4, unit: "stk" },
      { name: "salt", amount: 0.5, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Hakk 500g laksefilet fint (med kniv eller foodprocessor)",
      "Bland med 1 egg, 1 dl brødsmuler, 3 ss dill, 1 finhakket løk, salt og pepper",
      "Form til 4 burgere",
      "Stek i panne på middels varme, 4 min per side",
      "Rist 4 hamburgerbrød",
      "Bygg burgeren med salat, lakseburger og remoulade"
    ],
    tips: "Server med remoulade!",
    category: "Rask"
  },
  {
    id: 225,
    title: "Lakselasagne",
    description: "Kremet lasagne med laks og spinat",
    ingredients: [
      { name: "laks", amount: 600, unit: "g filet" },
      { name: "lasagneplater", amount: 12, unit: "stk" },
      { name: "spinat", amount: 300, unit: "g fersk" },
      { name: "fløte", amount: 5, unit: "dl" },
      { name: "ost", amount: 200, unit: "g revet" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "smør", amount: 30, unit: "g" },
      { name: "mel", amount: 2, unit: "ss" }
    ],
    cookingTime: "60 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Lag hvit saus: smelt 30g smør, rør inn 2 ss mel, tilsett gradvis 5 dl fløte",
      "Stek 600g laks i biter med 1 finhakket løk",
      "Bland laks med 300g spinat i sausen",
      "Lag lag i form: saus, 12 lasagneplater, fyll",
      "Topp med 200g revet ost",
      "Stek på 180°C i 40 minutter"
    ],
    tips: "Kan lages dagen før!",
    category: "Italiensk"
  },
  {
    id: 226,
    title: "Laksepasta",
    description: "Kremet pasta med røkt laks",
    ingredients: [
      { name: "røkt laks", amount: 300, unit: "g" },
      { name: "pasta", amount: 400, unit: "g" },
      { name: "fløte", amount: 3, unit: "dl" },
      { name: "spinat", amount: 200, unit: "g" },
      { name: "hvitløk", amount: 2, unit: "fedd" },
      { name: "sitron", amount: 1, unit: "stk" },
      { name: "smør", amount: 30, unit: "g" },
      { name: "parmesan", amount: 50, unit: "g" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 400g pasta etter pakningens anvisning",
      "Stek 2 fedd hvitløk i 30g smør",
      "Tilsett 3 dl fløte og 200g spinat",
      "Riv i 300g røkt laks",
      "Bland inn den kokte pastaen",
      "Tilsett saft fra 1 sitron og 50g parmesan"
    ],
    tips: "Ferdig på 20 minutter!",
    category: "Italiensk"
  },
  {
    id: 227,
    title: "Gravlaks",
    description: "Hjemmelaget gravlaks med dill",
    ingredients: [
      { name: "laks", amount: 1, unit: "kg side med skinn" },
      { name: "sukker", amount: 1, unit: "dl" },
      { name: "salt", amount: 1, unit: "dl grovt" },
      { name: "dill", amount: 2, unit: "bunter" },
      { name: "pepper", amount: 2, unit: "ts knust" }
    ],
    cookingTime: "48 timer",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 8,
    hasDetailedIngredients: true,
    instructions: [
      "Bland 1 dl sukker og 1 dl grovt salt",
      "Gni blandingen inn i 1 kg lakseside",
      "Dekk laksen med 2 bunter fersk dill og 2 ts knust pepper",
      "Legg de to laksesidene mot hverandre med skinnet ut",
      "Pakk inn i plast og legg på noe tungt",
      "La ligge i kjøleskapet i 48 timer, vend hver 12. time"
    ],
    tips: "Perfekt til festmåltid!",
    category: "Norsk"
  },
  {
    id: 228,
    title: "Laksewrap",
    description: "Rask og sunn lunsj",
    ingredients: [
      { name: "røkt laks", amount: 200, unit: "g" },
      { name: "tortilla", amount: 2, unit: "stk store" },
      { name: "salat", amount: 4, unit: "blad" },
      { name: "avokado", amount: 1, unit: "stk" },
      { name: "tomat", amount: 1, unit: "stk" },
      { name: "rømme", amount: 1, unit: "dl" },
      { name: "sitron", amount: 0.5, unit: "stk" }
    ],
    cookingTime: "15 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Varm 2 store tortilla",
      "Legg på 4 salatblad og 200g røkt laks",
      "Tilsett skiver av 1 avokado og 1 tomat",
      "Topp med 1 dl rømme og saft fra 0.5 sitron",
      "Rull sammen og skjær i to",
      "Server umiddelbart"
    ],
    tips: "Perfekt lunsjmat!",
    category: "Rask"
  },
  {
    id: 6,
    title: "Kjøttkaker i Brun Saus",
    description: "Saftige kjøttkaker med kremet brun saus",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "egg", amount: 1, unit: "stk" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "melk", amount: 1, unit: "dl" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "mel", amount: 2, unit: "ss" },
      { name: "kraft", amount: 3, unit: "dl" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "40 min",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Bland 600g kjøttdeig med 1 finhakket løk, 1 egg, 1 dl melk, salt og pepper",
      "Krydre godt med salt og pepper",
      "Form til 12 kjøttkaker",
      "Stek i 50g smør til brunet på alle sider (ca 4 min per side)",
      "Ta ut kjøttkakene og lag saus: rør 2 ss mel i stekesaften, tilsett 3 dl kraft og 1 dl melk",
      "La kjøttkakene trekke i sausen i 10 minutter"
    ],
    tips: "Tilsett litt revet gulrot i kjøttdeigen for ekstra saftighet!",
    category: "Norsk"
  },
  {
    id: 200,
    title: "Tacos med Kjøttdeig",
    description: "Meksikansk klassiker med krydret kjøttdeig og friske tilbehør",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "tacoskjell", amount: 12, unit: "stk" },
      { name: "tomat", amount: 4, unit: "stk" },
      { name: "salat", amount: 1, unit: "hode" },
      { name: "ost", amount: 200, unit: "g" },
      { name: "rødløk", amount: 1, unit: "stk" },
      { name: "tacokrydder", amount: 1, unit: "pose" },
      { name: "rømme", amount: 2, unit: "dl" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Brun 600g kjøttdeig i en panne",
      "Tilsett 1 pose tacokrydder og 1.5 dl vann",
      "La det småkoke i 10 minutter til tykt",
      "Varm 12 tacoskjell i ovnen på 180°C i 5 minutter",
      "Hakk 1 hode salat, 4 tomater og 1 rødløk",
      "Fyll tacoskjellene med kjøttdeig, salat, tomat, 200g revet ost og 2 dl rømme"
    ],
    tips: "Tilsett en klatt rømme og guacamole for ekstra god smak!",
    category: "Meksikansk"
  },
  {
    id: 201,
    title: "Lasagne",
    description: "Italiensk klassiker med kjøttdeig, tomatsaus og hvit saus",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "lasagneplater", amount: 12, unit: "stk" },
      { name: "hermetiske tomater", amount: 800, unit: "g" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "melk", amount: 6, unit: "dl" },
      { name: "ost", amount: 200, unit: "g" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "mel", amount: 0.5, unit: "dl" },
      { name: "tomatpuré", amount: 2, unit: "ss" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "90 min",
    difficulty: "Middels",
    totalIngredients: 12,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Brun 600g kjøttdeig sammen med 2 finhakkede løk og 3 pressede hvitløksfedd i en stor panne",
      "Tilsett 800g hermetiske tomater, 2 ss tomatpuré og la putre i 20 minutter. Krydre med salt og pepper",
      "Lag hvit saus: Smelt 50g smør i en kjele, rør inn 0.5 dl mel og tilsett gradvis 6 dl melk under pisking til sausen tykner",
      "Smør en ildfast form (ca. 30x20 cm) og lag lag: Start med kjøttsaus, så lasagneplater, deretter hvit saus",
      "Gjenta lagene til du har brukt opp ingrediensene, avslutt med hvit saus og topp med 200g revet ost",
      "Stek i ovnen på 180°C i 45 minutter til osten er gyllen og bobler"
    ],
    tips: "La lasagnen hvile 10 minutter før servering for lettere kutt!",
    category: "Italiensk"
  },
  {
    id: 202,
    title: "Spaghetti Bolognese",
    description: "Klassisk italiensk pasta med rik kjøttsaus",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "spaghetti", amount: 400, unit: "g" },
      { name: "hermetiske tomater", amount: 800, unit: "g" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "gulrot", amount: 2, unit: "stk" },
      { name: "selleri", amount: 2, unit: "stilker" },
      { name: "rødvin", amount: 1, unit: "dl" },
      { name: "tomatpuré", amount: 2, unit: "ss" },
      { name: "oregano", amount: 1, unit: "ts" }
    ],
    cookingTime: "60 min",
    difficulty: "Lett",
    totalIngredients: 10,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Sautér 2 finhakkede løk, 3 fedd hvitløk, 2 riv gulrøtter og 2 hakket selleri i olje",
      "Tilsett 600g kjøttdeig og brun den godt",
      "Hell i 800g knuste tomater, 2 ss tomatpuré og 1 dl rødvin",
      "Krydre med oregano, salt og pepper",
      "La småkoke i 45 minutter til sausen er tykk",
      "Kok 400g spaghetti al dente og server kjøttsausen over pastaen"
    ],
    tips: "Jo lengre sausen får putre, jo bedre smak!",
    category: "Italiensk"
  },
  {
    id: 203,
    title: "Chili con Carne",
    description: "Meksikansk gryterett med kjøttdeig og bønner",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "kidneybønner", amount: 2, unit: "bokser à 400g" },
      { name: "hermetiske tomater", amount: 800, unit: "g" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "chili", amount: 2, unit: "ts" },
      { name: "spisskum", amount: 2, unit: "ts" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "tomatpuré", amount: 2, unit: "ss" }
    ],
    cookingTime: "50 min",
    difficulty: "Lett",
    totalIngredients: 9,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Brun 600g kjøttdeig med 2 finhakkede løk og 3 fedd hvitløk",
      "Tilsett 2 hakket paprika og stek i 5 minutter",
      "Hell i 800g hermetiske tomater, 2 bokser kidneybønner (800g) og 2 ss tomatpuré",
      "Krydre med 2 ts chili, 2 ts spisskum, salt og pepper",
      "La småkoke i 30 minutter til sausen tykner",
      "Server med ris, rømme og tortillachips"
    ],
    tips: "Smaken blir bedre dagen etter - perfekt for meal prep!",
    category: "Meksikansk"
  },
  {
    id: 204,
    title: "Klassisk Hamburger",
    description: "Saftig hjemmelaget burger med kjøttdeig",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "hamburgerbrød", amount: 4, unit: "stk" },
      { name: "salat", amount: 8, unit: "blad" },
      { name: "tomat", amount: 2, unit: "stk" },
      { name: "ost", amount: 4, unit: "skiver cheddar" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "agurk", amount: 4, unit: "skiver syltet" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 9,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Form 600g kjøttdeig til 4 burgere (ca 150g hver)",
      "Krydre med 1 ts salt og 0.5 ts pepper",
      "Stek på høy varme, 3-4 min per side for medium",
      "Legg på 1 skive ost per burger siste minutt",
      "Rist 4 brød lett",
      "Bygg burgeren: brød, salat, tomat, burger med ost, løkringer, agurk, topp-brød"
    ],
    tips: "Press ikke ned burgeren mens den steker - da mister den saften!",
    category: "Amerikansk"
  },
  {
    id: 205,
    title: "Kjøttboller i Tomatsaus",
    description: "Italiensk inspirerte kjøttboller i rik tomatsaus",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "egg", amount: 1, unit: "stk" },
      { name: "brødsmuler", amount: 1, unit: "dl" },
      { name: "parmesan", amount: 50, unit: "g" },
      { name: "hermetiske tomater", amount: 800, unit: "g" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "basilikum", amount: 1, unit: "bunt" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "olivenolej", amount: 3, unit: "ss" }
    ],
    cookingTime: "45 min",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Bland 600g kjøttdeig med 1 egg, 1 dl brødsmuler, 50g parmesan, salt og pepper",
      "Form til ca 20 små kjøttboller",
      "Brun kjøttbollene i 2 ss olivenolej i panne",
      "Lag tomatsaus: stek 1 finhakket løk og 3 fedd hvitløk i 1 ss olje, tilsett 800g tomater",
      "La kjøttbollene småkoke i sausen i 20 min",
      "Pynt med fersk basilikum og server med pasta eller brød"
    ],
    tips: "Tilsett litt melk i kjøttdeigen for ekstra møre kjøttboller!",
    category: "Italiensk"
  },
  {
    id: 206,
    title: "Cottage Pie",
    description: "Britisk komfortmat med kjøttdeig og potetmos",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "poteter", amount: 1, unit: "kg" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "gulrot", amount: 2, unit: "stk" },
      { name: "ærter", amount: 2, unit: "dl frosne" },
      { name: "oksekraft", amount: 3, unit: "dl" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "melk", amount: 1, unit: "dl" }
    ],
    cookingTime: "60 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Brun 600g kjøttdeig med 2 finhakkede løk",
      "Tilsett 2 kutt gulrøtter, 2 dl ærter og 3 dl oksekraft",
      "La småkoke til tykk konsistens (ca 20 min)",
      "Kok og mos 1 kg poteter med 50g smør og 1 dl melk",
      "Legg kjøttblandingen i ildfast form",
      "Topp med potetmos og gratiner i ovnen på 200°C i 20 min"
    ],
    tips: "Bruk en gaffel til å lage mønster i potetmoset - det blir ekstra sprøtt!",
    category: "Britisk"
  },
  {
    id: 207,
    title: "Taco-pai",
    description: "Tex-Mex paiform med kjøttdeig og ost",
    ingredients: [
      { name: "kjøttdeig", amount: 600, unit: "g" },
      { name: "paideig", amount: 1, unit: "pakke" },
      { name: "tomat", amount: 3, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "mais", amount: 1, unit: "boks 200g" },
      { name: "ost", amount: 200, unit: "g revet" },
      { name: "tacokrydder", amount: 1, unit: "pose" },
      { name: "rømme", amount: 2, unit: "dl" }
    ],
    cookingTime: "50 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Brun 600g kjøttdeig med 1 pose tacokrydder",
      "Bland kjøtt med 3 hakket tomater, 2 hakket paprika og 1 boks mais (200g)",
      "Legg 1 pakke paideig i en form (ca 24cm)",
      "Hell i kjøttblandingen",
      "Topp med 200g revet ost",
      "Stek på 200°C i 30 minutter til gyllen, server med 2 dl rømme"
    ],
    tips: "Server med rømme, salsa og guacamole!",
    category: "Meksikansk"
  },
  {
    id: 208,
    title: "Kjøttpudding",
    description: "Tradisjonell norsk rett med kjøttdeig og kålrotstappe",
    ingredients: [
      { name: "kjøttdeig", amount: 800, unit: "g" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "melk", amount: 3, unit: "dl" },
      { name: "potetmel", amount: 1, unit: "dl" },
      { name: "kålrot", amount: 600, unit: "g" },
      { name: "poteter", amount: 400, unit: "g" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "salt", amount: 1, unit: "ts" }
    ],
    cookingTime: "90 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Bland 800g kjøttdeig med 1 finhakket løk, 3 dl melk, 1 dl potetmel, salt og pepper",
      "Hell i smurt form (ca 1.5 liter)",
      "Damp i 60 minutter (eller kok i vannbad)",
      "Kok og mos 600g kålrot og 400g poteter med 50g smør",
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
    ingredients: [
      { name: "kjøttdeig", amount: 500, unit: "g" },
      { name: "paprika", amount: 4, unit: "stk store" },
      { name: "ris", amount: 2, unit: "dl" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "hermetiske tomater", amount: 400, unit: "g" },
      { name: "hvitløk", amount: 2, unit: "fedd" },
      { name: "ost", amount: 100, unit: "g revet" },
      { name: "oregano", amount: 1, unit: "ts" }
    ],
    cookingTime: "50 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kutt toppen av 4 paprikaer og fjern kjernene",
      "Brun 500g kjøttdeig med 1 finhakket løk og 2 fedd hvitløk",
      "Bland kjøtt med 2 dl kokt ris og 400g hakket hermetiske tomater",
      "Krydre med 1 ts oregano, salt og pepper",
      "Fyll paprikaene med blandingen og topp med 100g revet ost",
      "Stek i ovn på 180°C i 35 minutter"
    ],
    tips: "Bruk fargerike paprikaer for et vakkert fat!",
    category: "Internasjonal"
  },
  {
    id: 7,
    title: "Fried Rice",
    description: "Asiatisk stekt ris med egg og grønnsaker",
    ingredients: [
      { name: "ris", amount: 3, unit: "dl" },
      { name: "egg", amount: 3, unit: "stk" },
      { name: "gulrot", amount: 2, unit: "stk" },
      { name: "ærter", amount: 1, unit: "dl frosne" },
      { name: "soyasaus", amount: 3, unit: "ss" },
      { name: "sesamolje", amount: 1, unit: "ss" },
      { name: "vårløk", amount: 3, unit: "stk" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 3,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 3 dl ris og la den kjølne seg ned (gjerne bruk risen fra dagen før)",
      "Stek 3 rørt egg i en vok eller stor panne, ta ut",
      "Tilsett risen og 1 ss sesamolje, bland godt",
      "Tilsett 2 terningskårne gulrøtter og 1 dl ærter",
      "Krydre med 3 ss soyasaus og stek i 5 minutter på høy varme",
      "Rør inn egget og 3 finhakkede vårløk, server varm"
    ],
    tips: "Bruk gjerne risen fra dagen før - den blir mindre klissete!",
    category: "Asiatisk"
  },
  {
    id: 210,
    title: "Omelett",
    description: "Klassisk fransk omelett med valgfritt fyll",
    ingredients: [
      { name: "egg", amount: 4, unit: "stk" },
      { name: "melk", amount: 2, unit: "ss" },
      { name: "smør", amount: 20, unit: "g" },
      { name: "ost", amount: 50, unit: "g revet" },
      { name: "tomat", amount: 1, unit: "stk" },
      { name: "løk", amount: 0.5, unit: "stk" }
    ],
    cookingTime: "10 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Visp 4 egg og 2 ss melk sammen i en bolle",
      "Varm 20g smør i en panne på middels varme",
      "Hell i eggblandingen og la den dekke bunnen",
      "La stivne på bunnen, dra kanten inn med slikkepott",
      "Legg 50g revet ost, 1 hakket tomat og 0.5 hakket løk på den ene siden",
      "Brett omeletten forsiktig og server umiddelbart"
    ],
    tips: "Lav varme gir mykere omelett!",
    category: "Rask"
  },
  {
    id: 211,
    title: "Egg Benedict",
    description: "Luksuriøs frokost med posjert egg og hollandaisesaus",
    ingredients: [
      { name: "egg", amount: 6, unit: "stk" },
      { name: "bacon", amount: 150, unit: "g" },
      { name: "brød", amount: 4, unit: "skiver" },
      { name: "smør", amount: 100, unit: "g" },
      { name: "sitron", amount: 0.5, unit: "stk" },
      { name: "hvitvin", amount: 1, unit: "ss" }
    ],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 6,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Lag hollandaise: pisk 2 eggeplommer med 1 ss hvitvin i vannbad, tilsett gradvis 100g smeltet smør og saft fra 0.5 sitron",
      "Posjer 4 egg i kokende vann med litt eddik i 3-4 minutter",
      "Rist 4 brødskiver til gylne",
      "Stek 150g bacon sprø i panne",
      "Legg bacon og posjert egg på brødskivene",
      "Topp med varm hollandaisesaus og server umiddelbart"
    ],
    tips: "Hold hollandaisen varm i vannbad!",
    category: "Frokost"
  },
  {
    id: 212,
    title: "Spansk Tortilla",
    description: "Tykk potetomelett fra Spania",
    ingredients: [
      { name: "egg", amount: 6, unit: "stk" },
      { name: "poteter", amount: 600, unit: "g" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "olivenolej", amount: 1, unit: "dl" },
      { name: "salt", amount: 1, unit: "ts" }
    ],
    cookingTime: "30 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 600g poteter og 1 løk i tynne skiver",
      "Stek i 1 dl olivenolje på lav varme til myke (ca 15 min)",
      "Visp 6 egg med 1 ts salt i en stor bolle",
      "Bland de kokte potetene og løken inn i eggene",
      "Hell blandingen tilbake i pannen og stek på lav varme til bunnen er gyllen (8-10 min)",
      "Vend omeletten med et brett og stek den andre siden (5 min), server varm eller kald i trekanter"
    ],
    tips: "Perfekt som tapas eller piknik-mat!",
    category: "Spansk"
  },
  {
    id: 213,
    title: "Shakshuka",
    description: "Israelske egg i krydret tomatsaus",
    ingredients: [
      { name: "egg", amount: 6, unit: "stk" },
      { name: "hermetiske tomater", amount: 800, unit: "g" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "spiskum", amount: 1, unit: "ts" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Sautér 1 hakket løk, 3 pressede fedd hvitløk og 2 hakket paprika i olivenolej i 5 minutter",
      "Tilsett 800g hermetiske tomater og 1 ts spiskum, krydre med salt og pepper",
      "La småkoke i 15 minutter til sausen tykner",
      "Lag 6 fordypninger i sausen og knekk 1 egg i hver",
      "Dekk til pannen og kok i 5-7 minutter til eggene er stivnet",
      "Pynt med fersk koriander og server med brød"
    ],
    tips: "Perfekt for brunch!",
    category: "Israelittisk"
  },
  {
    id: 214,
    title: "Posjerte Egg på Toast",
    description: "Enkel og elegant frokost",
    ingredients: [
      { name: "egg", amount: 4, unit: "stk" },
      { name: "brød", amount: 4, unit: "skiver" },
      { name: "eddik", amount: 1, unit: "ss" },
      { name: "smør", amount: 20, unit: "g" },
      { name: "salt", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "10 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Kok en stor gryte med vann og tilsett 1 ss eddik",
      "Lag en forsiktig virvelvind i vannet med en slikkepott",
      "Slipp 1 egg forsiktig oppi virvelvindet, gjenta med de andre eggene",
      "Kok i 3-4 minutter til hviten er stivnet men plommen fortsatt er myk",
      "Ta opp eggene med en hullslev og la de renne av",
      "Smør 4 brødskiver med 20g smør, rist dem og topp med de posjerte eggene, krydre med 0.5 ts salt og pepper"
    ],
    tips: "Ferske egg gir best resultat!",
    category: "Frokost"
  },
  {
    id: 8,
    title: "Kylling Teriyaki",
    description: "Søt og salt kylling med asiatiske smaker",
    ingredients: [
      { name: "kylling", amount: 600, unit: "g bryst" },
      { name: "soyasaus", amount: 4, unit: "ss" },
      { name: "honning", amount: 3, unit: "ss" },
      { name: "ingefær", amount: 2, unit: "cm" },
      { name: "hvitløk", amount: 2, unit: "fedd" },
      { name: "ris", amount: 3, unit: "dl" },
      { name: "sesamfrø", amount: 1, unit: "ss" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 3,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 600g kyllingbryst i biter",
      "Bland 4 ss soyasaus, 3 ss honning, 2 cm hakket ingefær og 2 pressede fedd hvitløk",
      "Mariner kyllingen i blandingen i 15 minutter",
      "Kok 3 dl ris etter pakningens anvisning",
      "Stek kyllingen på høy varme til gjennomstekt (ca 6-8 min)",
      "Hell over marinaden og la koke inn, server med dampet ris og 1 ss sesamfrø"
    ],
    tips: "Tilsett sesamfrø som pynt for ekstra crunch!",
    category: "Asiatisk"
  },
  {
    id: 215,
    title: "Kylling i Karri",
    description: "Kremet kyllingkarri med kokosmjølk",
    ingredients: [
      { name: "kylling", amount: 600, unit: "g bryst" },
      { name: "kokosmjølk", amount: 400, unit: "ml" },
      { name: "karripasta", amount: 3, unit: "ss" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "paprika", amount: 1, unit: "stk" },
      { name: "ingefær", amount: 3, unit: "cm" }
    ],
    cookingTime: "35 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kutt 600g kyllingbryst i terninger",
      "Stek 1 hakket løk og 3 cm hakket ingefær i olje i 3 minutter",
      "Tilsett 3 ss karripasta og stek i 1 minutt",
      "Hell i 400ml kokosmjølk og kyllingen",
      "Tilsett 1 hakket paprika og la småkoke i 20 minutter til kyllingen er gjennomstekt",
      "Smak til med salt og server med dampet ris og limebåter"
    ],
    tips: "Tilsett lime for friskhet!",
    category: "Asiatisk"
  },
  {
    id: 216,
    title: "Ovnsbakt Kylling med Grønnsaker",
    description: "Enkel hverdagsmiddag fra ovnen",
    ingredients: [
      { name: "kylling", amount: 800, unit: "g lår" },
      { name: "poteter", amount: 600, unit: "g" },
      { name: "gulrot", amount: 3, unit: "stk" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "hvitløk", amount: 4, unit: "fedd" },
      { name: "rosmarin", amount: 3, unit: "kvister" }
    ],
    cookingTime: "60 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Forvarm ovnen til 200°C og skjær 600g poteter, 3 gulrøtter og 2 løk i biter",
      "Krydre 800g kyllinglår med salt, pepper og 3 kvister rosmarin",
      "Legg kyllingen og grønnsakene på et stekebrett med 4 hele fedd hvitløk",
      "Drypp over 3 ss olivenolej",
      "Stek i ovnen i 45-50 minutter, vend grønnsakene halvveis",
      "Sjekk at kyllingen er gjennomstekt med termometer (75°C) før servering"
    ],
    tips: "Vend grønnsakene halvveis!",
    category: "Norsk"
  },
  {
    id: 217,
    title: "Kyllingpanne med Pasta",
    description: "Rask og enkel pastarett",
    ingredients: [
      { name: "kylling", amount: 500, unit: "g bryst" },
      { name: "pasta", amount: 400, unit: "g" },
      { name: "fløte", amount: 3, unit: "dl" },
      { name: "parmesan", amount: 100, unit: "g" },
      { name: "hvitløk", amount: 3, unit: "fedd" },
      { name: "spinat", amount: 200, unit: "g" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 400g pasta etter pakningens anvisning, spar 1 dl pastavann",
      "Stek 500g kyllingbryst i biter til gylne og gjennomstekte (ca 6 min)",
      "Tilsett 3 pressede fedd hvitløk og stek i 1 minutt",
      "Hell i 3 dl fløte, 100g revet parmesan og 200g spinat",
      "Bland inn den kokte pastaen og litt pastavann om nødvendig",
      "Smak til med salt og pepper, server med ekstra parmesan"
    ],
    tips: "Bruk pastavann for tynnere saus!",
    category: "Italiensk"
  },
  {
    id: 218,
    title: "Kyllingwok med Nudler",
    description: "Asiatisk wok med grønnsaker",
    ingredients: [
      { name: "kylling", amount: 500, unit: "g bryst" },
      { name: "nudler", amount: 300, unit: "g" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "brokkoli", amount: 300, unit: "g" },
      { name: "soyasaus", amount: 4, unit: "ss" },
      { name: "ingefær", amount: 3, unit: "cm" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 3,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 300g nudler etter pakningens anvisning",
      "Stek 500g kyllingbryst i strimler på høy varme i wok i 4-5 minutter",
      "Tilsett 2 hakket paprika, 300g brokkolibuketter og 3 cm hakket ingefær",
      "Stek i 3 minutter til grønnsakene er sprø-møre",
      "Hell i 4 ss soyasaus og bland inn de kokte nudlene",
      "Stek alt sammen i 2 minutter på høy varme og server umiddelbart"
    ],
    tips: "Høy varme er nøkkelen!",
    category: "Asiatisk"
  },
  {
    id: 219,
    title: "Grillet Kylling med Salat",
    description: "Sunn og enkel sommerrett",
    ingredients: [
      { name: "kylling", amount: 600, unit: "g bryst" },
      { name: "salat", amount: 1, unit: "hode" },
      { name: "tomat", amount: 3, unit: "stk" },
      { name: "agurk", amount: 1, unit: "stk" },
      { name: "olivenolej", amount: 5, unit: "ss" },
      { name: "sitron", amount: 1, unit: "stk" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Mariner 600g kyllingbryst med 2 ss olivenolej og saft fra 0.5 sitron i 15 minutter",
      "Grill kyllingen på middels høy varme i 6-7 minutter per side til gjennomstekt",
      "Kutt 1 hode salat, 3 tomater og 1 agurk i biter",
      "Lag dressing av 3 ss olivenolej, saft fra 0.5 sitron, salt og pepper",
      "La kyllingen hvile i 5 minutter, skjær i skiver",
      "Bland salaten med dressing, topp med kylling og server"
    ],
    tips: "Perfekt sommermat!",
    category: "Salat"
  },
  {
    id: 220,
    title: "Kylling Quesadilla",
    description: "Meksikansk tortilla med kylling",
    ingredients: [
      { name: "kylling", amount: 300, unit: "g bryst" },
      { name: "tortilla", amount: 4, unit: "stk" },
      { name: "ost", amount: 200, unit: "g revet" },
      { name: "paprika", amount: 1, unit: "stk" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "rømme", amount: 1, unit: "dl" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Stek 300g kyllingbryst i strimler med 1 hakket paprika og 1 hakket løk i 6-7 minutter",
      "Legg 2 tortilla i en panne, fordel kyllingblandingen på den ene halvdelen",
      "Strø over 200g revet ost",
      "Brett tortillaen sammen og stek på middels varme til osten smelter (3 min per side)",
      "Gjenta med de to andre tortillaene",
      "Skjær i biter og server med 1 dl rømme og guacamole"
    ],
    tips: "Server med guacamole!",
    category: "Meksikansk"
  },
  {
    id: 221,
    title: "Kyllingsuppe",
    description: "Varmende suppe med kylling og grønnsaker",
    ingredients: [
      { name: "kylling", amount: 600, unit: "g bryst" },
      { name: "gulrot", amount: 3, unit: "stk" },
      { name: "selleri", amount: 2, unit: "stilker" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "kyllingbuljong", amount: 1.5, unit: "liter" },
      { name: "nudler", amount: 200, unit: "g" }
    ],
    cookingTime: "45 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 600g kyllingbryst i 1.5 liter kyllingbuljong i 20 minutter",
      "Ta ut kyllingen og plukk kjøttet i strimler",
      "Tilsett 3 skåret gulrøtter, 2 hakket selleri og 1 hakket løk i buljongen",
      "Kok grønnsakene til møre (ca 10 min)",
      "Tilsett 200g nudler og kok i 8 minutter",
      "Rør kyllingen tilbake i suppen, krydre med salt og pepper, og server varm"
    ],
    tips: "Perfekt når du er forkjølet!",
    category: "Suppe"
  },
  {
    id: 9,
    title: "Caprese Salat",
    description: "Frisk italiensk salat med tomat, mozzarella og basilikum",
    ingredients: [
      { name: "tomat", amount: 4, unit: "stk store" },
      { name: "mozzarella", amount: 250, unit: "g" },
      { name: "basilikum", amount: 1, unit: "bunt" },
      { name: "olivenolej", amount: 3, unit: "ss" },
      { name: "balsamico", amount: 2, unit: "ss" },
      { name: "salt", amount: 0.5, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "10 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 4 store tomater i tykke skiver (ca 1 cm)",
      "Skjær 250g mozzarella i skiver",
      "Veksle mellom tomat og mozzarella på et fat",
      "Pynt med ferske blad fra 1 bunt basilikum",
      "Drypp over 3 ss olivenolej og 2 ss balsamico",
      "Krydre med 0.5 ts salt og pepper"
    ],
    tips: "Bruk modne tomater og fersk mozzarella for beste smak!",
    category: "Vegetarisk"
  },
  {
    id: 10,
    title: "Champignon Risotto",
    description: "Kremet risotto med sauterte champignoner",
    ingredients: [
      { name: "risottoris", amount: 3, unit: "dl" },
      { name: "champignon", amount: 400, unit: "g" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "parmesan", amount: 100, unit: "g" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "hvitvin", amount: 1, unit: "dl" },
      { name: "grønnsaksbuljong", amount: 1, unit: "liter" },
      { name: "hvitløk", amount: 2, unit: "fedd" }
    ],
    cookingTime: "35 min",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Sautér 400g champignoner i smør til gylne, ta ut",
      "Stek 1 finhakket løk og 2 fedd hvitløk i 50g smør til myk",
      "Tilsett 3 dl risottoris og rør i 2 minutter",
      "Hell i 1 dl hvitvin og la koke inn",
      "Tilsett 1 liter varm buljong gradvis (1 øse om gangen) mens du rører konstant",
      "Fortsett til risen er kremet og al dente (ca 20 min), rør inn champignoner og 100g parmesan"
    ],
    tips: "Bruk gjerne flere soppsorter for mer kompleks smak!",
    category: "Vegetarisk"
  },
  {
    id: 11,
    title: "Avokado Toast",
    description: "Trendy og sunn frokost med mose avokado",
    ingredients: [
      { name: "brød", amount: 4, unit: "skiver" },
      { name: "avokado", amount: 2, unit: "stk modne" },
      { name: "sitron", amount: 1, unit: "stk" },
      { name: "salt", amount: 0.5, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" },
      { name: "chiliflak", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "8 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 2,
    hasDetailedIngredients: true,
    instructions: [
      "Rist 4 skiver brød til gyllen",
      "Mos 2 modne avokadoer med en gaffel",
      "Tilsett saft fra 1 sitron, 0.5 ts salt og pepper",
      "Smør avokadosmørpålegget på brødet",
      "Pynt med 0.5 ts chiliflak",
      "Server umiddelbart"
    ],
    tips: "Tilsett et stekt egg på toppen for ekstra protein!",
    category: "Rask"
  },
  {
    id: 12,
    title: "Cæsar Salat",
    description: "Klassisk amerikansk salat med krutong og parmesan",
    ingredients: [
      { name: "salat", amount: 2, unit: "hoder romaine" },
      { name: "parmesan", amount: 100, unit: "g" },
      { name: "brød", amount: 4, unit: "skiver" },
      { name: "hvitløk", amount: 2, unit: "fedd" },
      { name: "olivenolej", amount: 4, unit: "ss" },
      { name: "sitron", amount: 1, unit: "stk" },
      { name: "ansjos", amount: 3, unit: "stk" },
      { name: "eggeplomme", amount: 1, unit: "stk" }
    ],
    cookingTime: "15 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 3,
    hasDetailedIngredients: true,
    instructions: [
      "Kutt 4 skiver brød i terninger og rist i 2 ss olivenolej med 1 fedd hvitløk til krutong",
      "Gnid salatbollen med 1 fedd hvitløk",
      "Riv 2 hoder romaine salat i biter i bollen",
      "Lag dressing: bland 2 ss olivenolej, saft fra 1 sitron, 3 ansjos, 1 eggeplomme og 50g parmesan",
      "Tilsett krutonger og 50g revet parmesan til salaten",
      "Hell over dressing, bland godt og server"
    ],
    tips: "Tilsett grillet kylling for å gjøre det til hovedrett!",
    category: "Salat"
  },
  {
    id: 13,
    title: "Stekt Torsk med Poteter",
    description: "Klassisk norsk fiskemiddag med stekt torsk",
    ingredients: [
      { name: "torsk", amount: 600, unit: "g filet" },
      { name: "poteter", amount: 800, unit: "g" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "sitron", amount: 1, unit: "stk" },
      { name: "persille", amount: 0.5, unit: "bunt" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 800g poteter til møre (ca 20 min)",
      "Krydre 600g torskefilet med 1 ts salt og 0.5 ts pepper",
      "Stek fisken i 50g smør, 3-4 min per side til gyllen",
      "Hell over brunet smør med saft fra 1 sitron",
      "Pynt med 0.5 bunt hakket persille",
      "Server med de kokte potetene"
    ],
    tips: "Pass på at fisken ikke blir overstekt - den skal være saftig!",
    category: "Norsk"
  },
  {
    id: 14,
    title: "Sei i Ovn med Grønnsaker",
    description: "Sunn og enkel seifilé med rotgrønnsaker",
    ingredients: [
      { name: "sei", amount: 600, unit: "g filet" },
      { name: "gulrot", amount: 3, unit: "stk" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "rosmarin", amount: 2, unit: "kvister" },
      { name: "olivenolej", amount: 3, unit: "ss" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Forvarm ovnen til 200°C",
      "Skjær 3 gulrøtter, 2 løk og 2 paprika i biter",
      "Legg 600g seifilé og grønnsaker på stekebrett",
      "Drypp over 3 ss olivenolej og krydre med 1 ts salt og 0.5 ts pepper",
      "Stek i 20-25 minutter til fisken er gjennomstekt",
      "Pynt med frisk rosmarin og server"
    ],
    tips: "Bruk timer for perfekt resultat!",
    category: "Norsk"
  },
  {
    id: 15,
    title: "Fiskesuppe",
    description: "Kremet og nærende fiskesuppe med hvitfisk",
    ingredients: [
      { name: "hvitfisk", amount: 500, unit: "g" },
      { name: "fiskefond", amount: 8, unit: "dl" },
      { name: "fløte", amount: 2, unit: "dl" },
      { name: "gulrot", amount: 2, unit: "stk" },
      { name: "purre", amount: 1, unit: "stk" },
      { name: "smør", amount: 30, unit: "g" },
      { name: "dill", amount: 2, unit: "ss" },
      { name: "salt", amount: 1, unit: "ts" }
    ],
    cookingTime: "35 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kutt 500g hvitfisk i biter",
      "Sautér 2 skårne gulrøtter og 1 purre i 30g smør",
      "Hell i 8 dl fiskefond og la koke i 10 min",
      "Tilsett fiskebiter og simmer 10 min",
      "Rør inn 2 dl fløte og varm opp",
      "Krydre med 1 ts salt, pepper og 2 ss hakket dill"
    ],
    tips: "Ikke la fisken koke for lenge - den blir da tøff!",
    category: "Norsk"
  },
  {
    id: 16,
    title: "Kylling Curry",
    description: "Mild og kremet kyllingcurry med kokosmjølk",
    ingredients: [
      { name: "kylling", amount: 600, unit: "g bryst" },
      { name: "kokosmjølk", amount: 400, unit: "ml" },
      { name: "curry", amount: 2, unit: "ss" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "hvitløk", amount: 2, unit: "fedd" },
      { name: "ingefær", amount: 2, unit: "cm" },
      { name: "ris", amount: 3, unit: "dl" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 600g kyllingbryst i biter",
      "Stek 2 finhakket løk, 2 paprika i biter, 2 fedd hvitløk og 2 cm ingefær i olje",
      "Tilsett kylling og stek til hvit",
      "Rør inn 2 ss curry og 400 ml kokosmjølk",
      "La simmer i 15 minutter",
      "Kok 3 dl ris og server med currygryta"
    ],
    tips: "Tilsett chili for mer hete, eller ananas for sødme!",
    category: "Indisk"
  },
  {
    id: 17,
    title: "Biff Stroganoff",
    description: "Russisk klassiker med mørt kjøtt i sursøt saus",
    ingredients: [
      { name: "biff", amount: 600, unit: "g mørbrad" },
      { name: "champignon", amount: 400, unit: "g" },
      { name: "fløte", amount: 3, unit: "dl" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "sennep", amount: 2, unit: "ss" }
    ],
    cookingTime: "30 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 600g biffmørbrad i tynne strimler",
      "Stek kjøttet raskt på høy varme i 2-3 minutter, ta det ut",
      "Sautér 1 hakket løk og 400g skåret champignon i samme panne i 5 minutter",
      "Tilsett 3 dl fløte og 2 ss sennep, la småkoke i 5 minutter",
      "La kjøttet varmes forsiktig i sausen i 2 minutter",
      "Smak til med salt og pepper, server med ris eller pasta"
    ],
    tips: "Bruk mør biff som indrefilet for best resultat!",
    category: "Russisk"
  },
  {
    id: 18,
    title: "Grønnsakssuppe",
    description: "Sunn og mettende suppe med sesonggrønnsaker",
    ingredients: [
      { name: "brokkoli", amount: 300, unit: "g" },
      { name: "gulrot", amount: 3, unit: "stk" },
      { name: "selleri", amount: 2, unit: "stilker" },
      { name: "grønnsaksbuljong", amount: 1, unit: "liter" },
      { name: "rømme", amount: 1, unit: "dl" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kutt 300g brokkoli, 3 gulrøtter og 2 selleri i biter",
      "Sautér grønnsakene i litt olivenolej i 5 minutter",
      "Tilsett 1 liter grønnsaksbuljong",
      "La koke i 15 minutter til grønnsakene er møre",
      "Mikse halvparten av suppen for en kremaktig konsistens",
      "Rør inn 1 dl rømme og krydre med salt og pepper"
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
  },
  {
    id: 71,
    title: "Fårikål",
    description: "Tradisjonell norsk høstrett med lam og kål",
    ingredients: [
      { name: "lammekjøtt", amount: 1, unit: "kg" },
      { name: "hodekål", amount: 1, unit: "kg" },
      { name: "hel pepper", amount: 2, unit: "ss" },
      { name: "mel", amount: 3, unit: "ss" },
      { name: "salt", amount: 2, unit: "ts" },
      { name: "vann", amount: 1, unit: "liter" }
    ],
    cookingTime: "150 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 1 kg lammekjøtt i biter og 1 kg hodekål i store deler",
      "Legg lagvis kjøtt og kål i en stor gryte",
      "Strø over 2 ss hel pepper, 3 ss mel og 2 ts salt mellom lagene",
      "Hell på 1 liter vann",
      "La småkoke under lokk i 2-2,5 timer til kjøttet er mørt",
      "Server med kokte poteter"
    ],
    tips: "Jo lengre det koker, jo bedre blir det!",
    category: "Norsk"
  },
  {
    id: 72,
    title: "Poke Bowl",
    description: "Hawaiisk risbolle med rå laks og grønnsaker",
    ingredients: [
      { name: "sushi ris", amount: 3, unit: "dl" },
      { name: "laks", amount: 400, unit: "g rå filet" },
      { name: "soyasaus", amount: 3, unit: "ss" },
      { name: "sesamolje", amount: 1, unit: "ss" },
      { name: "avokado", amount: 2, unit: "stk" },
      { name: "edamame", amount: 200, unit: "g" },
      { name: "agurk", amount: 1, unit: "stk" },
      { name: "sesamfrø", amount: 2, unit: "ss" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 3 dl sushi ris etter pakningens anvisning",
      "Skjær 400g rå laks i terninger og mariner i 3 ss soyasaus og 1 ss sesamolje",
      "Kok 200g edamame i 5 minutter",
      "Skjær 2 avokado og 1 agurk i skiver",
      "Fordel risen i 4 boller",
      "Topp med marinert laks, avokado, agurk, edamame og 2 ss sesamfrø"
    ],
    tips: "Bruk fersk laks av sushi-kvalitet!",
    category: "Hawaiisk"
  },
  {
    id: 73,
    title: "Ratatouille",
    description: "Fransk grønnsaksstuing fra Provence",
    ingredients: [
      { name: "aubergine", amount: 2, unit: "stk" },
      { name: "squash", amount: 2, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "tomat", amount: 6, unit: "stk" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "hvitløk", amount: 4, unit: "fedd" },
      { name: "timian", amount: 2, unit: "ts tørket" },
      { name: "olivenolej", amount: 1, unit: "dl" }
    ],
    cookingTime: "60 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 2 auberginer, 2 squash og 2 paprika i 1 cm skiver",
      "Stek 2 hakket løk og 4 pressede fedd hvitløk i 3 ss olivenolej",
      "Tilsett 6 hakket tomater og 2 ts timian, la putre i 15 min",
      "Legg grønnsaksskivene vekselvis i en ildfast form på tomatsausen",
      "Drypp over resten av olivenoljen og krydre med salt og pepper",
      "Bak på 180°C i 40 minutter til grønnsakene er møre"
    ],
    tips: "Perfekt som tilbehør eller vegetarisk hovedrett!",
    category: "Fransk"
  },
  {
    id: 74,
    title: "Tom Yum Suppe",
    description: "Thai sursøt sjømatsuppe",
    ingredients: [
      { name: "reker", amount: 400, unit: "g" },
      { name: "sitrongress", amount: 2, unit: "stilker" },
      { name: "galangal", amount: 3, unit: "cm" },
      { name: "kaffirlime blad", amount: 4, unit: "stk" },
      { name: "chili", amount: 3, unit: "stk" },
      { name: "champignon", amount: 200, unit: "g" },
      { name: "fiskesaus", amount: 3, unit: "ss" },
      { name: "limesaft", amount: 3, unit: "ss" },
      { name: "koriander", amount: 1, unit: "bunt" }
    ],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 9,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 1 liter vann med 2 stilker sitrongress, 3 cm galangal og 4 kaffirlimeblad i 10 min",
      "Tilsett 200g skåret champignon og 3 hakket chili",
      "Kok i 5 minutter",
      "Tilsett 400g reker og kok til de blir rosa (3 min)",
      "Smak til med 3 ss fiskesaus og 3 ss limesaft",
      "Pynt med fersk koriander før servering"
    ],
    tips: "Balansen mellom surt, søtt og sterkt er viktig!",
    category: "Thai"
  },
  {
    id: 75,
    title: "Boeuf Bourguignon",
    description: "Klassisk fransk oksekjøttgryte i rødvin",
    ingredients: [
      { name: "oksekjøtt", amount: 1, unit: "kg" },
      { name: "rødvin", amount: 750, unit: "ml" },
      { name: "bacon", amount: 200, unit: "g" },
      { name: "små løk", amount: 300, unit: "g" },
      { name: "champignon", amount: 300, unit: "g" },
      { name: "gulrot", amount: 3, unit: "stk" },
      { name: "tomapuré", amount: 2, unit: "ss" },
      { name: "oksekraft", amount: 3, unit: "dl" },
      { name: "timian", amount: 3, unit: "kvister" }
    ],
    cookingTime: "180 min",
    difficulty: "Krevende",
    totalIngredients: 9,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Brun 1 kg oksekjøtt i biter og 200g bacon i en gryte",
      "Tilsett 300g små løk og 3 skåret gulrøtter",
      "Tilsett 2 ss tomatpuré og stek i 2 minutter",
      "Hell i 750ml rødvin og 3 dl oksekraft",
      "Tilsett 3 kvister timian og la småkoke i 2,5 timer",
      "Stek 300g champignon og tilsett siste 30 min"
    ],
    tips: "Bruk en god rødvin - det påvirker smaken!",
    category: "Fransk"
  },
  {
    id: 76,
    title: "Quinoasalat med Fetaost",
    description: "Sunn og mettende salat",
    ingredients: [
      { name: "quinoa", amount: 3, unit: "dl" },
      { name: "fetaost", amount: 200, unit: "g" },
      { name: "kirsebærtomat", amount: 300, unit: "g" },
      { name: "agurk", amount: 1, unit: "stk" },
      { name: "rødløk", amount: 1, unit: "stk" },
      { name: "mynthe", amount: 1, unit: "bunt" },
      { name: "olivenolej", amount: 4, unit: "ss" },
      { name: "sitron", amount: 1, unit: "stk" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 3 dl quinoa i dobbelt mengde vann i 15 minutter",
      "Halvér 300g kirsebærtomater, skjær 1 agurk og 1 rødløk i biter",
      "Smuldr 200g fetaost og hakk 1 bunt mynthe",
      "Bland alt med avkjølt quinoa",
      "Lag dressing av 4 ss olivenolej og saft fra 1 sitron",
      "Hell over dressingen og bland godt"
    ],
    tips: "Kan lages dagen før!",
    category: "Salat"
  },
  {
    id: 77,
    title: "Pad Thai",
    description: "Thailandsk wok med nudler",
    ingredients: [
      { name: "risnudler", amount: 300, unit: "g" },
      { name: "reker", amount: 300, unit: "g" },
      { name: "egg", amount: 2, unit: "stk" },
      { name: "soyabønner", amount: 200, unit: "g" },
      { name: "vårløk", amount: 3, unit: "stk" },
      { name: "fiskesaus", amount: 3, unit: "ss" },
      { name: "limesaft", amount: 2, unit: "ss" },
      { name: "peanøtter", amount: 100, unit: "g" }
    ],
    cookingTime: "20 min",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Bløtlegg 300g risnudler i varmt vann i 10 minutter",
      "Stek 2 egg i wok, ta ut og skjær i biter",
      "Stek 300g reker på høy varme i 3 minutter",
      "Tilsett nudlene, 200g soyabønner og 3 hakket vårløk",
      "Bland inn 3 ss fiskesaus og 2 ss limesaft",
      "Topp med egget og 100g hakkede peanøtter"
    ],
    tips: "Høy varme er essensielt!",
    category: "Thai"
  },
  {
    id: 78,
    title: "Focaccia",
    description: "Italiensk flatbrød med olivenolje",
    ingredients: [
      { name: "mel", amount: 600, unit: "g" },
      { name: "gjær", amount: 25, unit: "g fersk" },
      { name: "vann", amount: 400, unit: "ml" },
      { name: "olivenolej", amount: 1.5, unit: "dl" },
      { name: "salt", amount: 2, unit: "ts" },
      { name: "rosmarin", amount: 2, unit: "ss frisk" },
      { name: "grovt salt", amount: 1, unit: "ss" }
    ],
    cookingTime: "120 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 8,
    hasDetailedIngredients: true,
    instructions: [
      "Bland 600g mel, 25g gjær oppløst i 400ml lunkent vann, 5 ss olivenolej og 2 ts salt",
      "Kna deigen i 10 minutter til den er glatt",
      "La heve i 1 time til dobbel størrelse",
      "Press deigen ut i en oljet langpanne (ca 30x40 cm)",
      "Lag hull med fingrene, drypp over 5 ss olivenolej, strø over rosmarin og grovt salt",
      "Bak på 220°C i 25 minutter til gyllen"
    ],
    tips: "Perfekt som tilbehør eller til dip!",
    category: "Italiensk"
  },
  {
    id: 79,
    title: "Pinnekjøtt",
    description: "Tradisjonell norsk julemat",
    ingredients: [
      { name: "pinnekjøtt", amount: 1.5, unit: "kg saltet" },
      { name: "poteter", amount: 1, unit: "kg" },
      { name: "kålrot", amount: 600, unit: "g" },
      { name: "smør", amount: 100, unit: "g" }
    ],
    cookingTime: "180 min",
    difficulty: "Middels",
    totalIngredients: 4,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Bløtlegg 1.5 kg pinnekjøtt i vann i 24-30 timer, skift vann 2-3 ganger",
      "Legg bjørkepinner eller aluminiumsfolie i bunnen av en stor gryte",
      "Legg pinnekjøttet på pinnene, hell vann til like under kjøttet",
      "Damp under lokk i 2,5-3 timer til mørt",
      "Kok 1 kg poteter og mos 600g kålrot med 100g smør",
      "Server kjøttet med kålrot, poteter og sur kumle"
    ],
    tips: "Bløtlegging er viktig for å fjerne salt!",
    category: "Norsk"
  },
  {
    id: 80,
    title: "Green Curry",
    description: "Thai grønn curry med kylling",
    ingredients: [
      { name: "kylling", amount: 600, unit: "g bryst" },
      { name: "grønn currypasta", amount: 3, unit: "ss" },
      { name: "kokosmjølk", amount: 400, unit: "ml" },
      { name: "aubergine", amount: 2, unit: "stk små" },
      { name: "paprika", amount: 1, unit: "stk" },
      { name: "basilikum", amount: 1, unit: "bunt thai" },
      { name: "fiskesaus", amount: 2, unit: "ss" },
      { name: "sukker", amount: 1, unit: "ss" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Stek 3 ss grønn currypasta i en wok i 2 minutter",
      "Tilsett 400ml kokosmjølk og la koke opp",
      "Tilsett 600g kyllingbryst i biter",
      "Tilsett 2 skåret auberginer og 1 hakket paprika",
      "La småkoke i 15 minutter til kyllingen er gjennomstekt",
      "Smak til med 2 ss fiskesaus og 1 ss sukker, pynt med thai basilikum"
    ],
    tips: "Juster styrken etter smak!",
    category: "Thai"
  },
  {
    id: 81,
    title: "Tiramisu",
    description: "Italiensk kaffedessert",
    ingredients: [
      { name: "mascarpon", amount: 500, unit: "g" },
      { name: "egg", amount: 6, unit: "stk" },
      { name: "sukker", amount: 150, unit: "g" },
      { name: "kaffe", amount: 3, unit: "dl sterk" },
      { name: "amaretto", amount: 3, unit: "ss" },
      { name: "loff", amount: 300, unit: "g" },
      { name: "kakao", amount: 3, unit: "ss" }
    ],
    cookingTime: "30 min + 4 timer kjøling",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 8,
    hasDetailedIngredients: true,
    instructions: [
      "Skill 6 egg, visp plommene med 150g sukker til lys og luftig",
      "Rør inn 500g mascarpone forsiktig",
      "Visp eggehvitene til stive topper og vend inn i mascarponeblandingen",
      "Bland 3 dl kald kaffe med 3 ss amaretto",
      "Dypp 300g loff raskt i kaffen og legg i en form",
      "Dekk med halvparten av mascarponeblandingen, gjenta lagene, dryss 3 ss kakao over"
    ],
    tips: "La stå i kjøleskapet i minst 4 timer!",
    category: "Dessert"
  },
  {
    id: 82,
    title: "Lakseloin med Ertepuré",
    description: "Elegant fiskerett",
    ingredients: [
      { name: "laks", amount: 600, unit: "g loin" },
      { name: "frosne erter", amount: 500, unit: "g" },
      { name: "fløte", amount: 1, unit: "dl" },
      { name: "mynthe", amount: 0.5, unit: "bunt" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "sitron", amount: 1, unit: "stk" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 500g frosne erter i 5 minutter",
      "Mikse ertene med 1 dl fløte, 0.5 bunt mynthe og smak til med salt og pepper",
      "Krydre 600g laks med salt, pepper og saft fra 0.5 sitron",
      "Stek laksen i 50g smør, skinnsiden først, i 4 min per side",
      "Server laksen på ertepuré med sitronbåter"
    ],
    tips: "Ikke overstekk laksen!",
    category: "Norsk"
  },
  {
    id: 83,
    title: "Couscous med Grønnsaker",
    description: "Nordafrikansk vegetarrett",
    ingredients: [
      { name: "couscous", amount: 3, unit: "dl" },
      { name: "aubergine", amount: 1, unit: "stk" },
      { name: "squash", amount: 1, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "kikerter", amount: 1, unit: "boks 400g" },
      { name: "ras el hanout", amount: 2, unit: "ts" },
      { name: "grønnsaksbuljong", amount: 4, unit: "dl" },
      { name: "koriander", amount: 1, unit: "bunt" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 4 dl grønnsaksbuljong og hell over 3 dl couscous, la trekke i 5 min",
      "Stek 1 terningskåret aubergine, 1 squash og 2 paprika med 2 ts ras el hanout",
      "Tilsett 1 boks kikerter (400g) og varm",
      "Løsne couscous med en gaffel",
      "Server couscous med grønnsakene oppå",
      "Pynt med fersk koriander"
    ],
    tips: "Tilsett rosiner for sødme!",
    category: "Nordafrikansk"
  },
  {
    id: 84,
    title: "Banh Mi",
    description: "Vietnamesisk baguette",
    ingredients: [
      { name: "baguette", amount: 2, unit: "stk" },
      { name: "svinekjøtt", amount: 400, unit: "g skiver" },
      { name: "gulrot", amount: 2, unit: "stk" },
      { name: "agurk", amount: 1, unit: "stk" },
      { name: "koriander", amount: 1, unit: "bunt" },
      { name: "soyasaus", amount: 3, unit: "ss" },
      { name: "eddik", amount: 2, unit: "ss" },
      { name: "chilimajones", amount: 3, unit: "ss" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Mariner 400g svinekjøtt i 3 ss soyasaus i 15 minutter",
      "Riv 2 gulrøtter og 1 agurk i tynne strimler, mariner i 2 ss eddik",
      "Stek kjøttet til gjennomstekt",
      "Skjær 2 baguetter i lengden",
      "Smør med 3 ss chilimajones",
      "Fyll med kjøtt, marinerte grønnsaker og fersk koriander"
    ],
    tips: "Perfekt street food!",
    category: "Vietnamesisk"
  },
  {
    id: 85,
    title: "Brownie",
    description: "Sjokoladekake med sprø bunn",
    ingredients: [
      { name: "mørk sjokolade", amount: 200, unit: "g" },
      { name: "smør", amount: 200, unit: "g" },
      { name: "sukker", amount: 3, unit: "dl" },
      { name: "egg", amount: 4, unit: "stk" },
      { name: "mel", amount: 2, unit: "dl" },
      { name: "kakao", amount: 3, unit: "ss" },
      { name: "vanilje", amount: 1, unit: "ts" }
    ],
    cookingTime: "35 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 12,
    hasDetailedIngredients: true,
    instructions: [
      "Smelt 200g sjokolade og 200g smør sammen",
      "Visp inn 3 dl sukker",
      "Tilsett 4 egg, ett om gangen",
      "Rør inn 2 dl mel, 3 ss kakao og 1 ts vanilje",
      "Hell i en smurt form (ca 20x30 cm)",
      "Bak på 175°C i 25-30 minutter (skal være litt klissete i midten)"
    ],
    tips: "Ikke overbak - de skal være saftige!",
    category: "Dessert"
  },
  {
    id: 86,
    title: "Sushi",
    description: "Japanske risruller",
    ingredients: [
      { name: "sushi ris", amount: 3, unit: "dl" },
      { name: "riseddik", amount: 3, unit: "ss" },
      { name: "laks", amount: 300, unit: "g rå" },
      { name: "avokado", amount: 2, unit: "stk" },
      { name: "agurk", amount: 1, unit: "stk" },
      { name: "nori", amount: 6, unit: "ark" },
      { name: "soyasaus", amount: 1, unit: "dl" },
      { name: "wasabi", amount: 2, unit: "ts" }
    ],
    cookingTime: "45 min",
    difficulty: "Krevende",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 3 dl sushi ris, bland med 3 ss riseddik når den er ferdig",
      "Skjær 300g laks, 2 avokado og 1 agurk i tynne strimler",
      "Legg 1 nori-ark på en sushimatte",
      "Spre et tynt lag ris over arket, legg fyll i en stripe",
      "Rull sammen stramt med matten",
      "Skjær i 8 biter, server med soyasaus og wasabi"
    ],
    tips: "Fukt kniven mellom hvert kutt!",
    category: "Japansk"
  },
  {
    id: 87,
    title: "Pavlova",
    description: "Australsk marengskake",
    ingredients: [
      { name: "eggehviter", amount: 4, unit: "stk" },
      { name: "sukker", amount: 2.5, unit: "dl" },
      { name: "eddik", amount: 1, unit: "ts" },
      { name: "maisstivelse", amount: 1, unit: "ts" },
      { name: "kremfløte", amount: 3, unit: "dl" },
      { name: "bær", amount: 400, unit: "g blandet" },
      { name: "flormelis", amount: 2, unit: "ss" }
    ],
    cookingTime: "90 min",
    difficulty: "Middels",
    totalIngredients: 7,
    servings: 8,
    hasDetailedIngredients: true,
    instructions: [
      "Visp 4 eggehviter til stive topper",
      "Tilsett 2.5 dl sukker gradvis mens du visper",
      "Vend inn 1 ts eddik og 1 ts maisstivelse",
      "Form til en stor kake på et bakepapir",
      "Bak på 120°C i 75 minutter, la kjølne i ovnen",
      "Topp med 3 dl pisket krem og 400g friske bær"
    ],
    tips: "Skal være sprø utenpå og myk inni!",
    category: "Dessert"
  },
  {
    id: 88,
    title: "Falafel",
    description: "Midtøstenske kikertboller",
    ingredients: [
      { name: "tørkede kikerter", amount: 400, unit: "g" },
      { name: "løk", amount: 1, unit: "stk" },
      { name: "hvitløk", amount: 4, unit: "fedd" },
      { name: "persille", amount: 1, unit: "bunt" },
      { name: "koriander", amount: 1, unit: "bunt" },
      { name: "spiskum", amount: 2, unit: "ts" },
      { name: "bakepulver", amount: 1, unit: "ts" },
      { name: "olje", amount: 1, unit: "liter til frityrering" }
    ],
    cookingTime: "30 min + 12 timer bløtlegging",
    difficulty: "Middels",
    totalIngredients: 8,
    servings: 6,
    hasDetailedIngredients: true,
    instructions: [
      "Bløtlegg 400g tørkede kikerter i vann i 12-24 timer",
      "Mal kikertene med 1 løk, 4 fedd hvitløk, 1 bunt persille, 1 bunt koriander og 2 ts spiskum",
      "Tilsett 1 ts bakepulver og la hvile i 30 minutter",
      "Form til små boller",
      "Fritér i 180°C olje til gylne (ca 4 min)",
      "Server i pitabrød med tahini, salat og tomat"
    ],
    tips: "Bruk tørkede, ikke kokte kikerter!",
    category: "Midtøsten"
  },
  {
    id: 89,
    title: "Risengrynsgrøt",
    description: "Norsk julegrøt",
    ingredients: [
      { name: "rundkorna ris", amount: 2, unit: "dl" },
      { name: "vann", amount: 3, unit: "dl" },
      { name: "melk", amount: 1, unit: "liter" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "sukker", amount: 2, unit: "ss" },
      { name: "kanel", amount: 1, unit: "ts" },
      { name: "smør", amount: 30, unit: "g" }
    ],
    cookingTime: "50 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 2 dl ris i 3 dl vann i 10 minutter",
      "Tilsett 1 liter melk og 1 ts salt",
      "La småkoke under omrøring i 40 minutter til kremete",
      "Smak til med 2 ss sukker",
      "Server med 1 ts kanel, 30g smør og ekstra sukker",
      "Gjøm en mandel i grøten til den heldige!"
    ],
    tips: "Rør ofte for å unngå at det brenner ved!",
    category: "Norsk"
  },
  {
    id: 90,
    title: "Ceviche de Camarón",
    description: "Ecuadoriansk rekeceviche",
    ingredients: [
      { name: "reker", amount: 500, unit: "g kokte" },
      { name: "tomat", amount: 4, unit: "stk" },
      { name: "rødløk", amount: 2, unit: "stk" },
      { name: "limesaft", amount: 1, unit: "dl" },
      { name: "koriander", amount: 1, unit: "bunt" },
      { name: "ketchup", amount: 3, unit: "ss" },
      { name: "appelsin", amount: 2, unit: "stk" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Bland 500g kokte reker med 4 terningskåret tomater",
      "Tilsett 2 finhakket rødløk",
      "Bland inn 1 dl limesaft, 3 ss ketchup og saft fra 2 appelsiner",
      "Tilsett 1 bunt hakket koriander",
      "La trekke i kjøleskapet i 15 minutter",
      "Server med tortillachips eller fritert banan"
    ],
    tips: "Serveres tradisjonelt kald!",
    category: "Ecuadoriansk"
  },
  {
    id: 300,
    title: "Pølse med Potetmos",
    description: "Klassisk norsk pølserett med kremet potetmos",
    ingredients: [
      { name: "pølse", amount: 8, unit: "stk" },
      { name: "poteter", amount: 1, unit: "kg" },
      { name: "melk", amount: 2, unit: "dl" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 6,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Kok 1 kg poteter til de er møre",
      "Mos potetene med 50g smør og 2 dl varm melk",
      "Smak til med 1 ts salt og 0.5 ts pepper",
      "Kok eller stek 8 pølser til de er varme",
      "Server pølsene med potetmoset",
      "Gjerne med ketchup eller sennep"
    ],
    tips: "Potetmoset blir ekstra godt med litt muskatnøtt!",
    category: "Norsk"
  },
  {
    id: 301,
    title: "Grillede Pølser med Grønnsaker",
    description: "Saftige grillede pølser med stekte paprika og løk",
    ingredients: [
      { name: "pølse", amount: 8, unit: "stk" },
      { name: "paprika", amount: 3, unit: "stk" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "olivenolje", amount: 3, unit: "ss" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" },
      { name: "brød", amount: 8, unit: "stk pølsebrød" }
    ],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 3 paprika og 2 løk i strimler",
      "Stek grønnsakene i 3 ss olivenolje til myke",
      "Krydre med 1 ts salt og 0.5 ts pepper",
      "Grill eller stek 8 pølser til gylne",
      "Varm 8 pølsebrød",
      "Server pølsene i brød med stekte grønnsaker"
    ],
    tips: "Legg til jalapeño for litt styrke!",
    category: "Rask"
  },
  {
    id: 302,
    title: "Pølsegryte",
    description: "Enkel og mettende pølsegryte med poteter og grønnsaker",
    ingredients: [
      { name: "pølse", amount: 8, unit: "stk" },
      { name: "poteter", amount: 800, unit: "g" },
      { name: "gulrot", amount: 3, unit: "stk" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "hermetiske tomater", amount: 400, unit: "g" },
      { name: "kraft", amount: 3, unit: "dl" },
      { name: "paprikapulver", amount: 2, unit: "ts" },
      { name: "salt", amount: 1, unit: "ts" }
    ],
    cookingTime: "40 min",
    difficulty: "Lett",
    totalIngredients: 8,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 8 pølser i biter, 800g poteter og 3 gulrøtter i terninger",
      "Stek 2 finhakkede løk i en gryte",
      "Tilsett pølsebitene og stek i 2 min",
      "Legg i poteter, gulrøtter, 400g hermetiske tomater og 3 dl kraft",
      "Krydre med 2 ts paprikapulver og 1 ts salt",
      "La småkoke i 25 min til potetene er møre"
    ],
    tips: "Perfekt hverdagsmiddag som er ferdig på under 45 min!",
    category: "Norsk"
  },
  {
    id: 303,
    title: "Pølse i Svøp",
    description: "Butterdeigspakker med pølse - perfekt fingermat",
    ingredients: [
      { name: "pølse", amount: 8, unit: "stk" },
      { name: "butterdeig", amount: 1, unit: "pk" },
      { name: "egg", amount: 1, unit: "stk" },
      { name: "sesamfrø", amount: 2, unit: "ss" }
    ],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 4,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Forvarm ovnen til 225°C",
      "Rull ut 1 pk butterdeig og skjær i 8 strimler",
      "Vikle deigen rundt 8 pølser",
      "Pensle med 1 pisket egg og dryss 2 ss sesamfrø over",
      "Stek på stekebrett i 15-18 min til gylne",
      "Server varme med ketchup"
    ],
    tips: "Barn elsker disse! Lag gjerne ekstra til lunsj neste dag.",
    category: "Rask"
  },
  {
    id: 304,
    title: "Pølsepanne",
    description: "Rask og enkel pølsepanne med poteter",
    ingredients: [
      { name: "pølse", amount: 8, unit: "stk" },
      { name: "poteter", amount: 800, unit: "g" },
      { name: "løk", amount: 2, unit: "stk" },
      { name: "paprika", amount: 2, unit: "stk" },
      { name: "smør", amount: 50, unit: "g" },
      { name: "salt", amount: 1, unit: "ts" },
      { name: "pepper", amount: 0.5, unit: "ts" }
    ],
    cookingTime: "30 min",
    difficulty: "Lett",
    totalIngredients: 7,
    servings: 4,
    hasDetailedIngredients: true,
    instructions: [
      "Skjær 800g poteter i terninger og kok i 10 min",
      "Skjær 8 pølser, 2 løk og 2 paprika i biter",
      "Stek potetene i 50g smør til gylne",
      "Tilsett løk, paprika og pølser",
      "Stek videre i 5-7 min",
      "Krydre med 1 ts salt og 0.5 ts pepper"
    ],
    tips: "Alt-i-ett middag som hele familien liker!",
    category: "Rask"
  }
];
