
import React from 'react';
import SuggestBrandForm from '@/components/SuggestBrandForm';

const SuggestBrandPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Suggest a Brand to Boycott</h1>
          <p className="text-muted-foreground">
            Help us expand our database by suggesting brands that support occupation
          </p>
        </div>
        
        <div className="mt-6">
          <SuggestBrandForm />
        </div>
      </div>
    </div>
  );
};

export default SuggestBrandPage;
