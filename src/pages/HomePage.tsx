
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

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [filteredBrands, setFilteredBrands] = useState(getAllBrands());
  const [isLoading, setIsLoading] = useState(true);

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
      }

      setFilteredBrands(result);
      setIsLoading(false);
    }, 300); // Short delay to show loading state
    
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSelectCategory = (category: Category | 'all') => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-palestinian-black">Boycott4Palestine</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover which brands to avoid and find ethical alternatives
          </p>
        </div>
        
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        
        <div className="flex justify-between items-center mb-4">
          {!isLoading && (
            <>
              <p className="text-sm text-palestinian-black">
                {filteredBrands.length} {filteredBrands.length === 1 ? 'brand' : 'brands'} found
              </p>
              
              <p className="text-sm text-muted-foreground">
                Total: {getAllBrands().length} brands
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
