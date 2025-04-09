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

// Logo base URL - change this to your actual hosted logos folder
const LOGO_BASE_URL = "https://raw.githubusercontent.com/brand-logos/brand-logos/main/logos/";

// Add logos to brands
const addLogosToHousehold = typedHousehold.map(brand => {
  const logoMap: {[key: string]: string} = {
    "Caterpillar": `${LOGO_BASE_URL}caterpillar/caterpillar-logo.svg`,
    "Electrolux": `${LOGO_BASE_URL}electrolux/electrolux-logo.svg`,
    "Home Depot": `${LOGO_BASE_URL}home-depot/home-depot-logo.svg`,
    "Bed Bath & Beyond": `${LOGO_BASE_URL}bed-bath-beyond/bed-bath-beyond-logo.svg`,
    "Ikea": `${LOGO_BASE_URL}ikea/ikea-logo.svg`,
    "Black & Decker": `${LOGO_BASE_URL}black-decker/black-decker-logo.svg`,
    "Procter & Gamble": `${LOGO_BASE_URL}procter-gamble/procter-gamble-logo.svg`,
    "Siemens": `${LOGO_BASE_URL}siemens/siemens-logo.svg`,
    "Whirlpool": `${LOGO_BASE_URL}whirlpool/whirlpool-logo.svg`,
    "Lowe's": `${LOGO_BASE_URL}lowes/lowes-logo.svg`,
    "Dyson": `${LOGO_BASE_URL}dyson/dyson-logo.svg`,
    "Rubbermaid": `${LOGO_BASE_URL}rubbermaid/rubbermaid-logo.svg`,
    "Pyrex": `${LOGO_BASE_URL}pyrex/pyrex-logo.svg`,
    "Calphalon": `${LOGO_BASE_URL}calphalon/calphalon-logo.svg`,
    "OXO": `${LOGO_BASE_URL}oxo/oxo-logo.svg`
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random`
  };
});

const addLogosToBeverages = typedFoodAndBeverage.map(brand => {
  const logoMap: {[key: string]: string} = {
    "SodaStream": `${LOGO_BASE_URL}sodastream/sodastream-logo.svg`,
    "Sabra": `${LOGO_BASE_URL}sabra/sabra-logo.svg`,
    "Pillsbury": `${LOGO_BASE_URL}pillsbury/pillsbury-logo.svg`,
    "Coca-Cola": `${LOGO_BASE_URL}coca-cola/coca-cola-logo.svg`,
    "Nestlé": `${LOGO_BASE_URL}nestle/nestle-logo.svg`,
    "McDonald's": `${LOGO_BASE_URL}mcdonalds/mcdonalds-logo.svg`,
    "Starbucks": `${LOGO_BASE_URL}starbucks/starbucks-logo.svg`,
    "PepsiCo": `${LOGO_BASE_URL}pepsico/pepsico-logo.svg`,
    "Danone": `${LOGO_BASE_URL}danone/danone-logo.svg`,
    "Unilever": `${LOGO_BASE_URL}unilever/unilever-logo.svg`,
    "Heinz": `${LOGO_BASE_URL}heinz/heinz-logo.svg`,
    "Kellogg's": `${LOGO_BASE_URL}kelloggs/kelloggs-logo.svg`,
    "Mondelez": `${LOGO_BASE_URL}mondelez/mondelez-logo.svg`,
    "Häagen-Dazs": `${LOGO_BASE_URL}haagen-dazs/haagen-dazs-logo.svg`,
    "Lidl": `${LOGO_BASE_URL}lidl/lidl-logo.svg`
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random`
  };
});

const addLogosToTech = typedTechAndElectronics.map(brand => {
  const logoMap: {[key: string]: string} = {
    "HP (Hewlett-Packard)": `${LOGO_BASE_URL}hp/hp-logo.svg`,
    "Motorola": `${LOGO_BASE_URL}motorola/motorola-logo.svg`,
    "Intel": `${LOGO_BASE_URL}intel/intel-logo.svg`,
    "Microsoft": `${LOGO_BASE_URL}microsoft/microsoft-logo.svg`,
    "Apple": `${LOGO_BASE_URL}apple/apple-logo.svg`,
    "Google": `${LOGO_BASE_URL}google/google-logo.svg`,
    "Dell": `${LOGO_BASE_URL}dell/dell-logo.svg`,
    "Cisco": `${LOGO_BASE_URL}cisco/cisco-logo.svg`,
    "IBM": `${LOGO_BASE_URL}ibm/ibm-logo.svg`,
    "Oracle": `${LOGO_BASE_URL}oracle/oracle-logo.svg`,
    "Samsung": `${LOGO_BASE_URL}samsung/samsung-logo.svg`,
    "Nvidia": `${LOGO_BASE_URL}nvidia/nvidia-logo.svg`,
    "Qualcomm": `${LOGO_BASE_URL}qualcomm/qualcomm-logo.svg`,
    "Check Point": `${LOGO_BASE_URL}check-point/check-point-logo.svg`,
    "Western Digital": `${LOGO_BASE_URL}western-digital/western-digital-logo.svg`,
    "Akamai": `${LOGO_BASE_URL}akamai/akamai-logo.svg`
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random`
  };
});

// For other categories, use a fallback logo service
const addFallbackLogos = (brands: Brand[]) => {
  return brands.map(brand => ({
    ...brand,
    logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random`
  }));
};

// Combine all brands into a single array with logos added
export const brands: Brand[] = [
  ...addLogosToBeverages,
  ...addLogosToTech,
  ...addLogosToHousehold,
  ...addFallbackLogos(typedFashionAndApparel),
  ...addFallbackLogos(typedCosmeticsAndPersonalCare),
  ...addFallbackLogos(typedEntertainment)
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
