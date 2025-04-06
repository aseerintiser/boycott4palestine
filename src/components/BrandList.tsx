
import React, { useState } from 'react';
import { Brand } from '@/data/brands';
import BrandCard from '@/components/BrandCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface BrandListProps {
  brands: Brand[];
}

const BrandList: React.FC<BrandListProps> = ({ brands }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Show 9 brands per page for a 3x3 grid
  
  if (brands.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No brands found. Try a different search.</p>
      </div>
    );
  }

  // Calculate pagination
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBrands = brands.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(currentPage - 1);
                    window.scrollTo(0, 0);
                  }} 
                />
              </PaginationItem>
            )}
            
            {pageNumbers.map(number => (
              <PaginationItem key={number}>
                <PaginationLink 
                  href="#"
                  isActive={currentPage === number}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(number);
                    window.scrollTo(0, 0);
                  }}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(currentPage + 1);
                    window.scrollTo(0, 0);
                  }} 
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default BrandList;
