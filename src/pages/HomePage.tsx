
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import BrandList from '@/components/BrandList';
import { 
  getAllBrands, 
  getBrandsByCategory, 
  searchBrands, 
  Category 
} from '@/data/brands/index';
import { AlertCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [filteredBrands, setFilteredBrands] = useState(getAllBrands());
  const [isLoading, setIsLoading] = useState(true);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  useEffect(() => {
    // Simulate a loading delay for data fetching
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      let result = getAllBrands();

      // Apply category filter if not 'all'
      if (selectedCategory !== 'all') {
        result = getBrandsByCategory(selectedCategory);
      }

      // Apply search filter if there is a query
      if (searchQuery) {
        result = searchBrands(searchQuery).filter(brand => 
          selectedCategory === 'all' || brand.category === selectedCategory
        );

        // If this is a new search, add it to previous searches
        if (searchQuery.trim() !== '' && !previousSearches.includes(searchQuery.trim())) {
          setPreviousSearches(prev => {
            const newSearches = [searchQuery.trim(), ...prev.slice(0, 4)];
            return newSearches;
          });
        }
      }

      setFilteredBrands(result);
      setIsLoading(false);
    }, 500); // Short delay to show loading state
    
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, previousSearches]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // If clearing the search, show a toast notification
    if (query.trim() === '' && searchQuery !== '') {
      toast({
        title: "Search cleared",
        description: "Showing all brands",
        duration: 2000,
      });
    }
  };

  const handleSelectCategory = (category: Category | 'all') => {
    setSelectedCategory(category);
    // Toast notifications completely removed from category selection
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-palestinian-black">Boycott4Palestine</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Discover which brands to avoid and find ethical alternatives
          </p>
        </div>
        
        <div className="mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            recentSearches={previousSearches}
          />
        </div>
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        
        {filteredBrands.length === 0 && !isLoading && (
          <div className="my-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3 animate-fade-in">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800">No brands found for your search criteria.</p>
              <p className="text-sm text-amber-700 mt-1">Try adjusting your search or browse through different categories.</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center mb-6 mt-6 animate-fade-in">
          {!isLoading && filteredBrands.length > 0 && (
            <>
              <p className="text-sm font-medium text-palestinian-black">
                {filteredBrands.length} {filteredBrands.length === 1 ? 'brand' : 'brands'} found
              </p>
              
              <p className="text-sm text-muted-foreground">
                Total: {getAllBrands().length} brands in database
              </p>
            </>
          )}
        </div>
        
        <BrandList brands={filteredBrands} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default HomePage;
