export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  cookingTime: string;
  difficulty: string;
  totalIngredients: number;
  servings: number;
  instructions: string[];
  tips: string;
  category: string;
}

export const recipes: Recipe[] = [
  // Italiensk
  {
    id: 1,
    title: "Pasta Carbonara",
    description: "Kremet og deilig carbonara med egg, bacon og parmesan",
    ingredients: ["egg", "bacon", "pasta", "parmesan", "hvitløk"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
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
    ingredients: ["brød", "tomat", "mozzarella", "basilikum", "olivenolej"],
    cookingTime: "25 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 2,
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
  
  // Norsk
  {
    id: 4,
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
    id: 5,
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

  // Asiatisk
  {
    id: 6,
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
    id: 7,
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

  // Vegetarisk
  {
    id: 8,
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
    id: 9,
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

  // Rask og enkel
  {
    id: 10,
    title: "Scrambled Eggs",
    description: "Perfekt krøsket eggerøre på norsk vis",
    ingredients: ["egg", "melk", "smør", "salt", "pepper"],
    cookingTime: "5 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 2,
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

  // Salater og supper
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
    title: "Tomatsuppe",
    description: "Kremet og varmende tomatsuppe",
    ingredients: ["tomat", "løk", "hvitløk", "rømme", "basilikum"],
    cookingTime: "25 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Sautér løk og hvitløk til mykt",
      "Tilsett hermetiske tomater og la koke 15 min",
      "Kjør suppen jevn med stavmikser",
      "Rør inn rømme og varm forsiktig",
      "Krydre med salt, pepper og basilikum",
      "Server med brød"
    ],
    tips: "Tilsett litt sukker om tomatene er sure!",
    category: "Suppe"
  },

  // Kjøtt og fisk
  {
    id: 14,
    title: "Laks med Dill",
    description: "Stekt laks med kremete dillsaus",
    ingredients: ["laks", "dill", "rømme", "sitron", "smør"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Krydre laksen med salt og pepper",
      "Stek i smør, skin side først",
      "Snu og stek ferdig",
      "Lag saus av rømme, dill og sitronsaft",
      "Varm sausen forsiktig",
      "Server laksen med sausen"
    ],
    tips: "Ikke stek laksen for lenge - den blir tørr!",
    category: "Fisk"
  },
  {
    id: 15,
    title: "Kylling Tikka Masala",
    description: "Kremet indisk curry med kylling",
    ingredients: ["kylling", "tomat", "rømme", "karri", "hvitløk"],
    cookingTime: "40 min",
    difficulty: "Middels",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Skjær kyllingen i biter og krydre med karri",
      "Stek kyllingen til gyllen",
      "Sautér hvitløk i samme panne",
      "Tilsett hermetiske tomater og la koke",
      "Rør inn rømme og la puttre 15 min",
      "Server med ris eller naanbrød"
    ],
    tips: "Mariner kyllingen i yoghurt og krydder for ekstra smak!",
    category: "Indisk"
  },

  // Retter med egg
  {
    id: 16,
    title: "Spansk Tortilla",
    description: "Tradisjonell spansk omelett med poteter",
    ingredients: ["poteter", "egg", "løk", "olivenolej", "salt"],
    cookingTime: "35 min",
    difficulty: "Krevende",
    totalIngredients: 5,
    servings: 4,
    instructions: [
      "Skjær poteter og løk i tynne skiver",
      "Stek i olivenolej til møre",
      "Visp eggene og bland med potet-løk blandingen",
      "Stek tortillaen på begge sider",
      "Vend med et fat eller lokk",
      "Server varm eller kald"
    ],
    tips: "La tortillaen hvile litt før du skjærer den!",
    category: "Spansk"
  },

  // Pasta varianter
  {
    id: 17,
    title: "Pasta Arrabbiata",
    description: "Spicy italiensk pasta med tomat og chili",
    ingredients: ["pasta", "tomat", "hvitløk", "chili", "parmesan"],
    cookingTime: "20 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Kok pastaen al dente",
      "Sautér hvitløk og chili i olivenolej",
      "Tilsett hermetiske tomater",
      "La sausen koke inn 10 minutter",
      "Bland med den varme pastaen",
      "Topp med parmesan og persille"
    ],
    tips: "Juster chilimengden etter hvor sterkt du liker det!",
    category: "Italiensk"
  },
  {
    id: 18,
    title: "Fettuccine Alfredo",
    description: "Kremet pasta med smør og parmesan",
    ingredients: ["pasta", "smør", "parmesan", "rømme", "hvitløk"],
    cookingTime: "18 min",
    difficulty: "Lett",
    totalIngredients: 5,
    servings: 3,
    instructions: [
      "Kok fettuccine al dente",
      "Smelt smør i en stor panne",
      "Tilsett rømme og varm forsiktig",
      "Rør inn revet parmesan til sausen tykner",
      "Bland inn den varme pastaen",
      "Server umiddelbart med extra parmesan"
    ],
    tips: "Bruk pastavann til å tynne sausen om nødvendig!",
    category: "Italiensk"
  }
];