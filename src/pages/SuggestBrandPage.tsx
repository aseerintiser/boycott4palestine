
import React, { useState } from 'react';
import SuggestBrandForm from '@/components/SuggestBrandForm';
import { AlertCircle } from 'lucide-react';

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
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-800">How suggestion submissions work</h3>
            <p className="text-amber-700 text-sm mt-1">
              Your suggestion is sent to our review team via email. Each submission is carefully evaluated
              before being added to our database. Please provide detailed information to help with verification.
            </p>
          </div>
        </div>
        
        <div className="mt-2">
          <SuggestBrandForm />
        </div>
      </div>
    </div>
  );
};

export default SuggestBrandPage;
