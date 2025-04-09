
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

// Use reliable public logo sources with direct image URLs
const addLogosToHousehold = typedHousehold.map(brand => {
  const logoMap: {[key: string]: string} = {
    "Caterpillar": "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Caterpillar_logo.svg/1200px-Caterpillar_logo.svg.png",
    "Electrolux": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Electrolux_logo.svg/2560px-Electrolux_logo.svg.png",
    "Home Depot": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1200px-TheHomeDepot.svg.png",
    "Bed Bath & Beyond": "https://upload.wikimedia.org/wikipedia/commons/7/77/BedBathAndBeyond.svg",
    "Ikea": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png",
    "Black & Decker": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black_and_Decker_Logo.svg/2560px-Black_and_Decker_Logo.svg.png",
    "Procter & Gamble": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/2560px-Procter_%26_Gamble_logo.svg.png",
    "Siemens": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png",
    "Whirlpool": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Whirlpool_Corporation_logo.svg/1200px-Whirlpool_Corporation_logo.svg.png",
    "Lowe's": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lowe%27s_Companies_Logo.svg/2560px-Lowe%27s_Companies_Logo.svg.png",
    "Dyson": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dyson_logo.svg/2560px-Dyson_logo.svg.png",
    "Rubbermaid": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Rubbermaid_logo.svg/1200px-Rubbermaid_logo.svg.png",
    "Pyrex": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Pyrex_logo.svg/2560px-Pyrex_logo.svg.png",
    "Calphalon": "https://logo.clearbit.com/calphalon.com",
    "OXO": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Oxo_logo.svg/2560px-Oxo_logo.svg.png"
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random&color=fff&size=128`
  };
});

const addLogosToBeverages = typedFoodAndBeverage.map(brand => {
  const logoMap: {[key: string]: string} = {
    "SodaStream": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/SodaStream_Logo.svg/2560px-SodaStream_Logo.svg.png",
    "Sabra": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Sabra_Dipping_Company.svg/1200px-Sabra_Dipping_Company.svg.png",
    "Pillsbury": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Pillsbury_logo.svg/2560px-Pillsbury_logo.svg.png",
    "Coca-Cola": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
    "Nestlé": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nestle-Logo.svg/2560px-Nestle-Logo.svg.png",
    "McDonald's": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    "Starbucks": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
    "PepsiCo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/2560px-Pepsi_2023.svg.png",
    "Danone": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Danone_logo.svg/2560px-Danone_logo.svg.png",
    "Unilever": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unilever_logo.svg/1200px-Unilever_logo.svg.png",
    "Heinz": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Heinz_logo.svg/2560px-Heinz_logo.svg.png",
    "Kellogg's": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Kellogg%27s-Logo.svg/2560px-Kellogg%27s-Logo.svg.png",
    "Mondelez": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mondelez_international_2012_logo.svg/2560px-Mondelez_international_2012_logo.svg.png",
    "Häagen-Dazs": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/H%C3%A4agen-Dazs_Logo.svg/2560px-H%C3%A4agen-Dazs_Logo.svg.png",
    "Lidl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/2560px-Lidl-Logo.svg.png"
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random&color=fff&size=128`
  };
});

const addLogosToTech = typedTechAndElectronics.map(brand => {
  const logoMap: {[key: string]: string} = {
    "HP (Hewlett-Packard)": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
    "Motorola": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Motorola_logo.svg/2560px-Motorola_logo.svg.png",
    "Intel": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png",
    "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
    "Apple": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "Dell": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png",
    "Cisco": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    "IBM": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    "Oracle": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    "Samsung": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    "Nvidia": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
    "Qualcomm": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Qualcomm_logo.svg/2560px-Qualcomm_logo.svg.png",
    "Check Point": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Check_Point_Software_Technologies_logo.svg/2560px-Check_Point_Software_Technologies_logo.svg.png",
    "Western Digital": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Western_Digital_logo.svg/1200px-Western_Digital_logo.svg.png",
    "Akamai": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Akamai_logo.svg/2560px-Akamai_logo.svg.png"
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random&color=fff&size=128`
  };
});

// Now add logos to all remaining categories with better fallback
const addLogosToFashion = typedFashionAndApparel.map(brand => {
  const logoMap: {[key: string]: string} = {
    "Puma": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/2560px-Puma_logo.svg.png",
    "Zara": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png",
    "H&M": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png",
    "Nike": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png",
    "Adidas": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",
    "Calvin Klein": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Calvin_Klein_logo.svg/2560px-Calvin_Klein_logo.svg.png"
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random&color=fff&size=128`
  };
});

const addLogosToCosmetics = typedCosmeticsAndPersonalCare.map(brand => {
  const logoMap: {[key: string]: string} = {
    "Ahava": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ahava_logo.svg/1200px-Ahava_logo.svg.png",
    "L'Oréal": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/2560px-L%27Or%C3%A9al_logo.svg.png",
    "Estée Lauder": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Est%C3%A9e_Lauder_logo.svg/2560px-Est%C3%A9e_Lauder_logo.svg.png",
    "Johnson & Johnson": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Johnson_and_Johnson_Logo.svg/2560px-Johnson_and_Johnson_Logo.svg.png"
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random&color=fff&size=128`
  };
});

const addLogosToEntertainment = typedEntertainment.map(brand => {
  const logoMap: {[key: string]: string} = {
    "Airbnb": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
    "Disney": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Walt_Disney_Pictures_logo.svg/2560px-Walt_Disney_Pictures_logo.svg.png",
    "Netflix": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    "Warner Brothers": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/2560px-Warner_Bros_logo.svg.png"
  };
  return {
    ...brand,
    logo: logoMap[brand.name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(brand.name)}&background=random&color=fff&size=128`
  };
});

// Combine all brands into a single array with logos added
export const brands: Brand[] = [
  ...addLogosToBeverages,
  ...addLogosToTech,
  ...addLogosToHousehold,
  ...addLogosToFashion,
  ...addLogosToCosmetics,
  ...addLogosToEntertainment
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
