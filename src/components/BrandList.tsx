
import React from 'react';
import { Brand } from '@/data/brands';
import BrandCard from '@/components/BrandCard';

interface BrandListProps {
  brands: Brand[];
}

const BrandList: React.FC<BrandListProps> = ({ brands }) => {
  if (brands.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No brands found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
};

export default BrandList;
