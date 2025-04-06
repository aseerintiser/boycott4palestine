
import React, { useState } from 'react';
import SuggestBrandForm from '@/components/SuggestBrandForm';
import { AlertCircle, InfoIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const SuggestBrandPage: React.FC = () => {
  const [showSetupGuide, setShowSetupGuide] = useState(false);
  
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
        
        <div className="flex justify-end mb-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2" 
            onClick={() => setShowSetupGuide(true)}
          >
            <InfoIcon className="h-4 w-4" />
            EmailJS Setup Guide
          </Button>
        </div>
        
        <div className="mt-2">
          <SuggestBrandForm />
        </div>
      </div>
      
      <Dialog open={showSetupGuide} onOpenChange={setShowSetupGuide}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>EmailJS Setup Guide</DialogTitle>
            <DialogDescription>
              Follow these steps to configure email sending for the suggestion form
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-sm">
            <div className="space-y-2">
              <h3 className="font-medium">Step 1: Create an EmailJS Account</h3>
              <p>Sign up for a free account at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">EmailJS.com</a></p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Step 2: Add an Email Service</h3>
              <p>From your EmailJS dashboard, click "Add New Service" and connect your email provider (Gmail, Outlook, etc.)</p>
              <p>Once created, copy the "Service ID" for the next step</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Step 3: Create an Email Template</h3>
              <p>Click "Email Templates" → "Create New Template"</p>
              <p>Design your template using these variables: {"{{brand_name}}"}, {"{{reason}}"}, {"{{supporting_link}}"}, {"{{contact_email}}"}, {"{{submission_date}}"}</p>
              <p>Save the template and copy the "Template ID"</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Step 4: Get Your User ID</h3>
              <p>Go to "Account" → "API Keys" to find your "User ID"</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Step 5: Add Environment Variables</h3>
              <p>Create a <code>.env</code> file in your project root with these variables:</p>
              <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                VITE_EMAILJS_SERVICE_ID=your_service_id{'\n'}
                VITE_EMAILJS_TEMPLATE_ID=your_template_id{'\n'}
                VITE_EMAILJS_USER_ID=your_user_id
              </pre>
            </div>
            
            <div className="pt-2">
              <p className="text-amber-600 font-medium flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Remember to restart your development server after adding the environment variables
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuggestBrandPage;
