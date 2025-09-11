// Fuzzy matching implementasjon for bedre søk
export class FuzzyMatcher {
  // Levenshtein distance - måler hvor mange endringer som trengs for å gjøre to strenger like
  static levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) {
      matrix[0][i] = i;
    }
    
    for (let j = 0; j <= str2.length; j++) {
      matrix[j][0] = j;
    }
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  }
  
  // Beregn likhet mellom to strenger (0-1, hvor 1 er perfekt match)
  static similarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) {
      return 1.0;
    }
    
    const distance = this.levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  }
  
  // Sjekk om en streng inneholder deler av en annen (for delvis matching)
  static partialMatch(search: string, target: string): number {
    const searchLower = search.toLowerCase();
    const targetLower = target.toLowerCase();
    
    // Eksakt match får høyest score
    if (targetLower === searchLower) return 1.0;
    
    // Sjekk om target starter med search
    if (targetLower.startsWith(searchLower)) return 0.9;
    
    // Sjekk om target inneholder search
    if (targetLower.includes(searchLower)) return 0.8;
    
    // Sjekk fuzzy similarity
    const similarity = this.similarity(searchLower, targetLower);
    
    // Kun aksepter hvis similarity er over en terskel
    return similarity > 0.6 ? similarity * 0.7 : 0;
  }
  
  // Søk gjennom en liste av strenger og returner matches sortert etter relevans
  static search<T>(
    query: string,
    items: T[],
    extractText: (item: T) => string[],
    threshold: number = 0.3
  ): Array<T & { matchScore: number; matchedFields: string[] }> {
    const results: Array<T & { matchScore: number; matchedFields: string[] }> = [];
    
    for (const item of items) {
      const texts = extractText(item);
      let bestScore = 0;
      const matchedFields: string[] = [];
      
      for (const text of texts) {
        const score = this.partialMatch(query, text);
        if (score > bestScore) {
          bestScore = score;
        }
        if (score > threshold) {
          matchedFields.push(text);
        }
      }
      
      if (bestScore > threshold) {
        results.push({
          ...item,
          matchScore: bestScore,
          matchedFields
        });
      }
    }
    
    // Sorter etter score (høyest først)
    return results.sort((a, b) => b.matchScore - a.matchScore);
  }
}