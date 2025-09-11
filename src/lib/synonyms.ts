// Synonym-database for bedre ingredient matching
export const ingredientSynonyms: Record<string, string[]> = {
  // Grunnleggende
  "hvitløk": ["garlic", "vitløk", "hvitlok", "vitlok"],
  "løk": ["onion", "gul løk", "vanlig løk"],
  "rødløk": ["red onion", "rød løk"],
  "sjalottløk": ["shallot", "sjalott", "chalottløk"],
  "purreløk": ["leek", "purre", "porre"],
  
  // Kjøtt og fisk
  "kjøttdeig": ["hackekjøtt", "malt kjøtt", "ground meat", "minced meat"],
  "bacon": ["flesk", "spekeskinke"],
  "kylling": ["chicken", "kyllingkjøtt", "kyllingfilet"],
  "laks": ["salmon", "laksefilet"],
  "torsk": ["cod", "torskefilet"],
  "sei": ["saithe", "seifilé", "sei filet"],
  "reker": ["shrimp", "scampi"],
  
  // Ost og meieri
  "parmesan": ["parmesanost", "parmeggiano"],
  "mozzarella": ["mozzarellaost"],
  "cheddar": ["cheddarost"],
  "feta": ["fetaost", "feta cheese"],
  "cottage cheese": ["hytteost", "kornete ost"],
  "rømme": ["sour cream", "creme fraiche"],
  "melk": ["milk", "lettmelk", "helmelk"],
  
  // Grønnsaker
  "tomat": ["tomato", "tomater", "cherrytomater", "cherry tomater"],
  "paprika": ["pepper", "bell pepper", "rød paprika", "gul paprika", "grønn paprika"],
  "champignon": ["sopp", "mushroom", "hvite sopp"],
  "brokkoli": ["broccoli"],
  "gulrot": ["carrot", "karotte", "gulrøtter"],
  "squash": ["zucchini", "courgette"],
  "aubergine": ["eggplant", "eggplant"],
  "agurk": ["cucumber", "saltagurk"],
  "spinat": ["spinach", "baby spinat"],
  "salat": ["lettuce", "isbergsalat", "ruccola", "rucola", "arugula"],
  "selleri": ["celery", "stangselleri"],
  "kål": ["cabbage", "hvitkaål", "grønnkål"],
  "blomkål": ["cauliflower"],
  "rødbeter": ["beetroot", "beets"],
  "søtpotet": ["sweet potato", "søtpoteter"],
  "poteter": ["potato", "kokte poteter", "nye poteter"],
  "mais": ["corn", "sweet corn", "sukkermais"],
  "ærter": ["peas", "grønne ærter", "frosne ærter"],
  "bønner": ["beans", "kidneybønner", "hvite bønner", "sorte bønner"],
  
  // Krydder og urter  
  "basilikum": ["basil", "fresh basil"],
  "oregano": ["oregano"],
  "timian": ["thyme"],
  "rosmarin": ["rosemary"],
  "persille": ["parsley", "flat persille", "kruset persille"],
  "dill": ["dill"],
  "koriander": ["cilantro", "fresh coriander"],
  "mint": ["peppermint", "fresh mint"],
  "paprikapulver": ["paprika powder"],
  "karri": ["curry", "curry powder", "karripulver"],
  "cumin": ["spisskummen"],
  "chili": ["chilipepper", "rød chili", "jalapeño"],
  "ingefær": ["ginger", "fresh ginger"],
  "muskatnøtt": ["nutmeg"],
  "kanel": ["cinnamon"],
  
  // Pasta og korn
  "pasta": ["makaroni", "spaghetti", "penne", "fusilli", "farfalle", "linguine"],
  "ris": ["rice", "jasmin ris", "basmati ris", "rundkornris"],
  "quinoa": ["kinoa"],
  "couscous": ["kuskus"],
  "bulgur": ["bulgur wheat"],
  "havre": ["oats", "havregryn"],
  "brød": ["bread", "toast", "loff", "rundstykker"],
  
  // Frukt
  "sitron": ["lemon", "sitronsaft"],
  "lime": ["lime juice"],
  "avokado": ["avocado"],
  "eple": ["apple", "grønne epler", "røde epler"],
  "pære": ["pear"],
  "appelsin": ["orange", "appelsinsaft"],
  
  // Diverse
  "olivenolej": ["olive oil", "extra virgin olive oil"],
  "soyasaus": ["soy sauce", "soja"],
  "balsamico": ["balsamic vinegar", "balsamicoeddik"],
  "honning": ["honey"],
  "sirup": ["syrup", "lønnesirup", "maple syrup"],
  "tomatpuré": ["tomato paste", "tomato puree"],
  "kokosnøttmelk": ["coconut milk", "kokosmelk"],
  "mandler": ["almonds", "flaked almonds"],
  "valnøtter": ["walnuts"],
  "oliven": ["olives", "grønne oliven", "sorte oliven"],
  "kapers": ["capers"],
  "pinjekjerner": ["pine nuts"],
  
  // Tilberedningsformer
  "egg": ["eggs", "rørte egg", "kokte egg", "stekte egg"],
  "smør": ["butter", "saltet smør", "usaltet smør"],
  "salt": ["sea salt", "table salt"],
  "pepper": ["black pepper", "hvit pepper", "ground pepper"]
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