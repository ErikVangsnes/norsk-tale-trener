// Synonym-database for bedre ingredient matching
export const ingredientSynonyms: Record<string, string[]> = {
  // Grunnleggende
  "hvitløk": ["garlic", "vitløk", "hvitlok", "vitlok", "hvitløksfedd", "hvitløkspress"],
  "løk": ["onion", "gul løk", "vanlig løk", "løker", "sjalottløk", "kepaløk"],
  "rødløk": ["red onion", "rød løk", "rødløker"],
  "sjalottløk": ["shallot", "sjalott", "chalottløk", "chalott"],
  "purreløk": ["leek", "purre", "porre", "purreløker"],
  
  // Kjøtt og fisk
  "kjøttdeig": ["hackekjøtt", "malt kjøtt", "ground meat", "minced meat", "kjøttdeig storfe", "kjøttdeig svin"],
  "bacon": ["flesk", "spekeskinke", "bacon strips", "baconbiter"],
  "kylling": ["chicken", "kyllingkjøtt", "kyllingfilet", "kyllingbryst", "kyllinglår", "kyllingvinger", "hel kylling"],
  "laks": ["salmon", "laksefilet", "røkt laks", "gravet laks", "lakseside"],
  "torsk": ["cod", "torskefilet", "tørrfisk", "klippfisk"],
  "sei": ["saithe", "seifilé", "sei filet", "seifile"],
  "reker": ["shrimp", "scampi", "kokte reker", "råker", "reker i skall"],
  "pølse": ["pølser", "wienerpølse", "grillpølse", "kokt pølse", "chorizo", "salami", "spekepoelse"],
  "skinke": ["kokt skinke", "røkt skinke", "spekeskinke", "skinkebit"],
  "kalkun": ["kalkunbryst", "kalkunfilet", "turkey"],
  "biff": ["beef", "oksekjøtt", "entrecôte", "mørbrad", "ytrefilét", "indrefilét", "storfe"],
  
  // Ost og meieri
  "parmesan": ["parmesanost", "parmeggiano", "parmigiano", "revet parmesan"],
  "mozzarella": ["mozzarellaost", "buffalo mozzarella", "mozzarella kuler"],
  "cheddar": ["cheddarost", "revet cheddar"],
  "feta": ["fetaost", "feta cheese", "fetakuber"],
  "cottage cheese": ["hytteost", "kornete ost", "cottage"],
  "rømme": ["sour cream", "creme fraiche", "creme fraîche", "crème fraîche"],
  "melk": ["milk", "lettmelk", "helmelk", "skummet melk", "søt melk"],
  "ost": ["cheese", "revet ost", "ostebiter", "pizza ost"],
  "fløte": ["kremfløte", "matfløte", "cream", "tykk fløte"],
  "yoghurt": ["naturell yoghurt", "gresk yoghurt", "yogurt"],
  "smør": ["butter", "saltet smør", "usaltet smør", "meierismør"],
  
  // Grønnsaker
  "tomat": ["tomato", "tomater", "cherrytomater", "cherry tomater", "plommetomat", "beefsteak tomat", "cocktailtomat"],
  "paprika": ["pepper", "bell pepper", "rød paprika", "gul paprika", "grønn paprika", "orange paprika", "sweet pepper"],
  "champignon": ["sopp", "mushroom", "hvite sopp", "sjampinjong", "portobello", "østerssopp"],
  "brokkoli": ["broccoli", "brokkolibuketter"],
  "gulrot": ["carrot", "karotte", "gulrøtter", "gulrotstaver", "babygulrot"],
  "squash": ["zucchini", "courgette", "squashbåter"],
  "aubergine": ["eggplant", "aubergineskiver"],
  "agurk": ["cucumber", "saltagurk", "slangeagurk", "miniagurk"],
  "spinat": ["spinach", "baby spinat", "frossenspinat", "frossen spinat"],
  "salat": ["lettuce", "isbergsalat", "ruccola", "rucola", "arugula", "romano", "lollo rosso", "bladgrønnsaker"],
  "selleri": ["celery", "stangselleri", "sellerirot", "knollselleri"],
  "kål": ["cabbage", "hvitkaål", "grønnkål", "rødkål", "surkål", "spitskål"],
  "blomkål": ["cauliflower", "blomkålbuketter"],
  "rødbeter": ["beetroot", "beets", "rødbet", "kokt rødbet"],
  "søtpotet": ["sweet potato", "søtpoteter", "batatas"],
  "poteter": ["potato", "kokte poteter", "nye poteter", "potetes", "mandelpoteter", "gullpoteter"],
  "mais": ["corn", "sweet corn", "sukkermais", "maiskolbe"],
  "ærter": ["peas", "grønne ærter", "frosne ærter", "sukkererter", "erter"],
  "bønner": ["beans", "kidneybønner", "hvite bønner", "sorte bønner", "cannellinibønner", "chickpeas", "kikerter"],
  "linser": ["lentils", "røde linser", "grønne linser", "belugalinser"],
  
  // Krydder og urter
  "basilikum": ["basil", "fresh basil", "basilikumblade", "fersk basilikum"],
  "oregano": ["oregano", "tørket oregano", "fersk oregano"],
  "timian": ["thyme", "timiankvister", "fersk timian", "tørket timian"],
  "rosmarin": ["rosemary", "rosmarinkvister", "fersk rosmarin"],
  "persille": ["parsley", "flat persille", "kruset persille", "fersk persille", "bladpersille"],
  "dill": ["dill", "fersk dill", "tørket dill"],
  "koriander": ["cilantro", "fresh coriander", "korianderblader", "fersk koriander"],
  "mint": ["peppermint", "fresh mint", "fersk mynte", "peppermynte"],
  "paprikapulver": ["paprika powder", "røkt paprika", "sweet paprika"],
  "karri": ["curry", "curry powder", "karripulver", "karrymiks", "currypaste"],
  "cumin": ["spisskummen", "cumin powder", "cuminfrø"],
  "chili": ["chilipepper", "rød chili", "jalapeño", "chiliflak", "chilipulver", "cayennepepper"],
  "ingefær": ["ginger", "fresh ginger", "fersk ingefær", "ingefærrot"],
  "muskatnøtt": ["nutmeg", "revet muskat"],
  "kanel": ["cinnamon", "kanelstang", "kanelpulver"],
  "pepper": ["black pepper", "hvit pepper", "ground pepper", "knust pepper", "hel pepper"],
  "salt": ["sea salt", "table salt", "havsalt", "flaksalt", "grovt salt"],
  
  // Pasta og korn
  "pasta": ["makaroni", "spaghetti", "penne", "fusilli", "farfalle", "linguine", "tagliatelle", "fettuccine", "rigatoni", "lasagneplater"],
  "ris": ["rice", "jasmin ris", "basmati ris", "rundkornris", "arborio ris", "sushiris", "villis", "brunis"],
  "quinoa": ["kinoa", "quinoafrø"],
  "couscous": ["kuskus", "couscous pearls"],
  "bulgur": ["bulgur wheat", "bulgurgrøt"],
  "havre": ["oats", "havregryn", "havregrøt"],
  "brød": ["bread", "toast", "loff", "rundstykker", "brødskiver", "pitabrød", "flatbrød", "tortilla"],
  "mel": ["hvetemel", "flour", "sammalt mel", "grovt mel"],
  
  // Frukt
  "sitron": ["lemon", "sitronsaft", "sitronskall", "sitronzest", "sitronbåter"],
  "lime": ["lime juice", "limesaft", "limeskall"],
  "avokado": ["avocado", "avokadokuber"],
  "eple": ["apple", "grønne epler", "røde epler", "epleskiver"],
  "pære": ["pear", "pæreskiver"],
  "appelsin": ["orange", "appelsinsaft", "appelsinfill"],
  "banan": ["banana", "bananer", "modne bananer"],
  "bær": ["berries", "blåbær", "bringebær", "jordbær", "frosne bær"],
  
  // Diverse
  "olivenolje": ["olive oil", "extra virgin olive oil", "olivenolej", "oliven olje"],
  "soyasaus": ["soy sauce", "soja", "soyasaus"],
  "balsamico": ["balsamic vinegar", "balsamicoeddik", "balsamico eddik"],
  "honning": ["honey", "flytende honning"],
  "sirup": ["syrup", "lønnesirup", "maple syrup", "agave sirup"],
  "tomatpuré": ["tomato paste", "tomato puree", "tomatpure", "konsentrert tomat"],
  "kokosnøttmelk": ["coconut milk", "kokosmelk", "kokosnøtt melk"],
  "mandler": ["almonds", "flaked almonds", "mandelflak", "hakket mandler"],
  "valnøtter": ["walnuts", "valnøtt", "hakket valnøtt"],
  "oliven": ["olives", "grønne oliven", "sorte oliven", "kalamataoliven"],
  "kapers": ["capers", "kapersbær"],
  "pinjekjerner": ["pine nuts", "pinje"],
  "bouillon": ["kraft", "buljong", "oksekraft", "kyllingkraft", "grønnsakskraft"],
  "eddik": ["vinegar", "hvitvin eddik", "rødvin eddik", "epleeddik"],
  "sesamolje": ["sesame oil", "sesam olje"],
  "fiskesaus": ["fish sauce", "nam pla"],
  "oystersaus": ["oyster sauce", "østersaus"],
  
  // Tilberedningsformer
  "egg": ["eggs", "rørte egg", "kokte egg", "stekte egg", "eggehvite", "eggeplomme"]
};

// Funksjon for å finne alle synonymer for en ingredient
export const getAllSynonyms = (ingredient: string): string[] => {
  const normalized = ingredient.toLowerCase();
  
  // Sjekk om ingrediensen er en nøkkel i synonymordboken
  if (ingredientSynonyms[normalized]) {
    return [normalized, ...ingredientSynonyms[normalized]];
  }
  
  // Sjekk om ingrediensen er et synonym av en annen ingredient
  for (const [key, synonyms] of Object.entries(ingredientSynonyms)) {
    if (synonyms.some(syn => syn.toLowerCase() === normalized)) {
      return [key, ...synonyms];
    }
  }
  
  return [normalized];
};

// Funksjon for å normalisere ingredient navn
export const normalizeIngredient = (ingredient: string): string => {
  const normalized = ingredient.toLowerCase().trim();
  
  // Finn hovednøkkelen for denne ingrediensen
  for (const [key, synonyms] of Object.entries(ingredientSynonyms)) {
    if (key === normalized || synonyms.some(syn => syn.toLowerCase() === normalized)) {
      return key;
    }
  }
  
  return normalized;
};