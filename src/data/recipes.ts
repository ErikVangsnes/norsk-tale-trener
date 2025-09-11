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
  }
];