
import React, { useState } from 'react';
import { Brand } from '@/data/brands/types';
import BrandCard from '@/components/BrandCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Loader2 } from 'lucide-react';

interface BrandListProps {
  brands: Brand[];
  isLoading?: boolean;
}

const BrandList: React.FC<BrandListProps> = ({ brands, isLoading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Show 9 brands per page for a 3x3 grid
  
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-3">
        <Loader2 className="h-10 w-10 text-palestinian-red animate-spin" />
        <span className="text-muted-foreground">Loading brands...</span>
      </div>
    );
  }
  
  if (brands.length === 0) {
    return null; // We're handling the empty state in HomePage now
  }

  // Calculate pagination
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBrands = brands.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers with ellipsis for many pages
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= 7) {
      // Show all pages if there are 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page, last page, current page, and pages around current
      pageNumbers.push(1);
      
      if (currentPage > 3) {
        pageNumbers.push("ellipsis1");
      }
      
      // Pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pageNumbers.push("ellipsis2");
      }
      
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBrands.map((brand) => (
          <div key={brand.id} className="h-full">
            <BrandCard brand={brand} />
          </div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(currentPage - 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                />
              </PaginationItem>
            )}
            
            {pageNumbers.map((number, index) => {
              if (number === "ellipsis1" || number === "ellipsis2") {
                return (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <span className="px-3 py-2">...</span>
                  </PaginationItem>
                );
              }
              
              return (
                <PaginationItem key={`page-${number}`}>
                  <PaginationLink 
                    href="#"
                    isActive={currentPage === number}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(number as number);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(currentPage + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
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
