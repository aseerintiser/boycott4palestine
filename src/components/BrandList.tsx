
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
      <div className="flex flex-col items-center justify-center p-12 space-y-4 min-h-[400px] animate-fade-in">
        <div className="relative">
          <Loader2 className="h-12 w-12 text-palestinian-red animate-spin" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-white"></div>
          </div>
        </div>
        <span className="text-muted-foreground text-lg">Gathering brand information...</span>
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
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBrands.map((brand) => (
          <div key={brand.id} className="h-full transform transition-transform hover:translate-y-[-5px] duration-300">
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
                    handlePageChange(currentPage - 1);
                  }} 
                  className="transition-colors hover:bg-palestinian-gray/50"
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
                      handlePageChange(number as number);
                    }}
                    className={currentPage === number ? "bg-palestinian-green text-white hover:bg-palestinian-green/90" : "hover:bg-palestinian-gray/30"}
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
                    handlePageChange(currentPage + 1);
                  }} 
                  className="transition-colors hover:bg-palestinian-gray/50"
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
