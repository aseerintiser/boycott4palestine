
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
    "Fiverr": ["Upwork", "Freelancer", "PeoplePerHour", "Guru", "Local Freelancers"],
    "Nike": ["New Balance", "Brooks", "Saucony", "Local athletic wear brands"],
    "Adidas": ["Puma", "Brooks", "New Balance", "Ethical athletic wear brands"],
    "McDonald's": ["Local restaurants", "Independent food shops", "Homemade meals"],
    "Starbucks": ["Local coffee shops", "Independent cafes", "Fair trade coffee brands"],
    "Microsoft": ["Linux alternatives", "Open source software", "Alternative tech solutions"],
    "Google": ["DuckDuckGo", "Brave Search", "Proton services", "Ethical tech alternatives"],
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

/**
 * Brands that might be missing from our current database but are on official boycott lists
 * This helps identify potential gaps in our data
 */
export const getMissingHighPriorityBrands = () => {
  return [
    {
      name: "Coca-Cola",
      reason: "Operates production facilities and invests in Israel"
    },
    {
      name: "Nestlé",
      reason: "Major investments and operations in Israel"
    },
    {
      name: "Amazon",
      reason: "Provides cloud services to Israeli military and government"
    },
    {
      name: "McDonald's",
      reason: "Operations in Israeli settlements and ties to occupation"
    },
    {
      name: "Disney",
      reason: "Investments in Israel and media bias"
    },
    {
      name: "Starbucks",
      reason: "Financial support to Israel and operations in contested areas"
    },
    {
      name: "Airbnb",
      reason: "Lists properties in illegal settlements"
    },
    {
      name: "Microsoft",
      reason: "Investments in Israeli tech and military companies"
    },
    {
      name: "Google",
      reason: "Partnerships with Israeli military and surveillance projects"
    },
    {
      name: "Nike",
      reason: "Sponsors Israeli sports teams and events"
    },
    {
      name: "Adidas",
      reason: "Sponsors Israeli sports and maintains operations in Israel"
    }
  ];
};
