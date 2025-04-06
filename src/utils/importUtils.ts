
import { Brand, Alternative, Category } from '@/data/brands/types';

/**
 * Convert CSV data to Brand objects
 * Expected CSV format:
 * id,name,category,description,reasons,alternativeNames,alternativeDescriptions,alternativeLinks
 * 
 * Reasons should be separated by semicolons (;)
 * Alternative data should be separated by semicolons (;) with consistent ordering
 */
export const csvToBrands = (csvContent: string): Brand[] => {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).filter(line => line.trim() !== '').map((line, index) => {
    const values = line.split(',');
    const data: Record<string, string> = {};
    
    headers.forEach((header, i) => {
      data[header.trim()] = values[i]?.trim() || '';
    });
    
    // Convert reasons string to array
    const reasons = data.reasons ? data.reasons.split(';').map(r => r.trim()) : [];
    
    // Parse alternatives
    const alternativeNames = data.alternativeNames ? data.alternativeNames.split(';').map(n => n.trim()) : [];
    const alternativeDescriptions = data.alternativeDescriptions ? data.alternativeDescriptions.split(';').map(d => d.trim()) : [];
    const alternativeLinks = data.alternativeLinks ? data.alternativeLinks.split(';').map(l => l.trim()) : [];
    
    // Create alternatives array
    const alternatives: Alternative[] = alternativeNames.map((name, i) => ({
      id: `a${index + 1}-${i + 1}`,
      name,
      description: alternativeDescriptions[i] || '',
      link: alternativeLinks[i] || undefined
    }));
    
    // Validate category
    const validCategories: Category[] = [
      "Food & Beverage", 
      "Tech & Electronics", 
      "Fashion & Apparel", 
      "Cosmetics & Personal Care", 
      "Household", 
      "Entertainment"
    ];
    
    const category = data.category as Category;
    if (!validCategories.includes(category)) {
      console.warn(`Invalid category "${category}" for brand "${data.name}". Using "Food & Beverage" instead.`);
    }
    
    return {
      id: data.id || `imported-${index + 1}`,
      name: data.name || `Unknown Brand ${index + 1}`,
      category: validCategories.includes(category) ? category : "Food & Beverage",
      description: data.description || '',
      reasons,
      alternatives
    };
  });
};

/**
 * Create a CSV template for brand data import
 */
export const createCsvTemplate = (): string => {
  return `id,name,category,description,reasons,alternativeNames,alternativeDescriptions,alternativeLinks
1,Brand Name,Food & Beverage,Description of the brand,Reason 1; Reason 2,Alternative 1; Alternative 2,Description 1; Description 2,http://example.com/1; http://example.com/2`;
};
