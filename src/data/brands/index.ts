
import type { Brand, Category } from './types';

// Import all brand category files
import foodAndBeverage from './food-beverage.json';
import techAndElectronics from './tech-electronics.json';
import fashionAndApparel from './fashion-apparel.json';
import cosmeticsAndPersonalCare from './cosmetics-personal-care.json';
import household from './household.json';
import entertainment from './entertainment.json';

// Type assertion to ensure the JSON data conforms to the Brand type
const typedFoodAndBeverage = foodAndBeverage as Brand[];
const typedTechAndElectronics = techAndElectronics as Brand[];
const typedFashionAndApparel = fashionAndApparel as Brand[];
const typedCosmeticsAndPersonalCare = cosmeticsAndPersonalCare as Brand[];
const typedHousehold = household as Brand[];
const typedEntertainment = entertainment as Brand[];

// Combine all brands into a single array
export const brands: Brand[] = [
  ...typedFoodAndBeverage,
  ...typedTechAndElectronics,
  ...typedFashionAndApparel,
  ...typedCosmeticsAndPersonalCare,
  ...typedHousehold,
  ...typedEntertainment
];

export const getAllBrands = () => brands;

export const getBrandById = (id: string) => {
  return brands.find(brand => brand.id === id);
};

export const getBrandsByCategory = (category: Category) => {
  return brands.filter(brand => brand.category === category);
};

export const getCategories = (): Category[] => {
  return Array.from(new Set(brands.map(brand => brand.category)));
};

export const searchBrands = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return brands.filter(
    brand => 
      brand.name.toLowerCase().includes(lowercaseQuery) ||
      brand.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Export types
export * from './types';
