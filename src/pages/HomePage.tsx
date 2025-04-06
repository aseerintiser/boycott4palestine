
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import BrandList from '@/components/BrandList';
import { 
  getAllBrands, 
  getBrandsByCategory, 
  searchBrands, 
  Category 
} from '@/data/brands';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [filteredBrands, setFilteredBrands] = useState(getAllBrands());

  useEffect(() => {
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Boycott4Palestine</h1>
          <p className="text-muted-foreground">
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
          <p className="text-sm text-muted-foreground">
            {filteredBrands.length} {filteredBrands.length === 1 ? 'brand' : 'brands'} found
          </p>
        </div>
        
        <BrandList brands={filteredBrands} />
      </div>
    </div>
  );
};

export default HomePage;
