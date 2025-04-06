
import React from 'react';
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
              When you submit this form, your suggestion will be sent directly to our review team via email. 
              If approved, the brand will be added to our database. If you provide your email, we'll notify you when your suggestion is reviewed.
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <SuggestBrandForm />
        </div>
      </div>
    </div>
  );
};

export default SuggestBrandPage;
