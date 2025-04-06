
import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Search, X, Loader2 } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { searchBrands } from '@/data/brands/index';
import { Brand } from '@/data/brands/types';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 1) {
      setIsLoading(true);
      
      // Add a small delay to simulate API call and prevent excessive searching
      const timer = setTimeout(() => {
        const results = searchBrands(searchQuery);
        setSuggestions(results.slice(0, 5)); // Limit to 5 suggestions
        setIsLoading(false);
        setIsOpen(true);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  const handleSelectSuggestion = (brandId: string) => {
    setIsOpen(false);
    navigate(`/brand/${brandId}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search brands or products..."
          value={searchQuery}
          onChange={handleSearch}
          className="pl-10 pr-10 w-full"
          onFocus={() => searchQuery.length > 1 && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
        
        {searchQuery && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            {isLoading ? (
              <Loader2 className="h-5 w-5 text-gray-400 animate-spin mr-3" />
            ) : (
              <button 
                onClick={handleClear}
                className="p-1 rounded-full mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <ul className="py-1">
            {suggestions.map((brand) => (
              <li 
                key={brand.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectSuggestion(brand.id)}
              >
                <div className="font-medium">{brand.name}</div>
                <div className="text-xs text-muted-foreground">{brand.category}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
