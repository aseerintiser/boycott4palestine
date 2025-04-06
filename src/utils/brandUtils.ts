
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
