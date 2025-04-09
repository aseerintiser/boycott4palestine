
import { Brand } from '@/data/brands/types';

/**
 * Check if an alternative is also in the boycott list
 */
export const findAlternativesInBoycottList = (brands: Brand[]): {
  brandName: string;
  alternativeName: string;
}[] => {
  const brandNames = new Set(brands.map(brand => brand.name.toLowerCase()));
  const conflicts: { brandName: string; alternativeName: string }[] = [];
  
  brands.forEach(brand => {
    brand.alternatives.forEach(alternative => {
      if (brandNames.has(alternative.name.toLowerCase())) {
        conflicts.push({
          brandName: brand.name,
          alternativeName: alternative.name
        });
      }
    });
  });
  
  return conflicts;
};

/**
 * Get a list of suggested alternatives that are not in the boycott list
 */
export const getSafeAlternatives = (brandName: string): string[] => {
  // This is just a sample list of verified alternatives
  // In a real application, this would come from a curated database
  const safeAlternativesMap: Record<string, string[]> = {
    "Airbnb": ["Vrbo", "Homestay", "Agoda", "Local Guesthouses"],
    "Booking.com": ["Agoda", "Hostelworld", "Direct hotel bookings", "Independent travel agents"],
    "TripAdvisor": ["Culture Trip", "Lonely Planet", "WikiVoyage", "Local tourism offices"],
    "Expedia": ["Agoda", "Kayak", "Direct bookings", "Responsible Travel"],
    // Add more as needed
  };
  
  return safeAlternativesMap[brandName] || [];
};

/**
 * Information about data sources used in the application
 */
export const getDataSources = () => {
  return {
    primary: {
      name: "BDS Movement",
      description: "The Boycott, Divestment, Sanctions (BDS) movement works to end international support for Israel's oppression of Palestinians and pressure Israel to comply with international law.",
      url: "https://bdsmovement.net/",
      citation: "This list is based on information from the BDS Movement, the Palestinian-led global movement for freedom, justice and equality."
    },
    supplementary: [
      {
        name: "Who Profits Research Center",
        url: "https://whoprofits.org/",
        description: "Research center dedicated to exposing the commercial involvement of companies in the occupation."
      },
      {
        name: "American Muslims for Palestine",
        url: "https://www.ampalestine.org/boycott-list",
        description: "Organization that provides educational resources on Palestine and companies to boycott."
      }
    ]
  };
};
