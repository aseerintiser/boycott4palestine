
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">About Ethical Choice Guide</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="mb-4">
              Ethical Choice Guide aims to empower consumers with knowledge about the ethical implications 
              of their purchasing decisions. We provide information about companies and brands that may have 
              ties to controversial business practices, and offer ethical alternatives to help you align your 
              spending with your values.
            </p>
            
            <h2 className="text-xl font-semibold mb-2 mt-6">How It Works</h2>
            <p className="mb-4">
              Our database includes companies and brands that have been identified as having ties to 
              controversial business practices or operations in disputed territories. For each entry, 
              we provide:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>A brief description of the company</li>
              <li>Specific reasons for ethical concerns</li>
              <li>Alternative products or brands to consider</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-2 mt-6">Disclaimer</h2>
            <p>
              The information provided on this app is for educational purposes only. We strive for accuracy, 
              but circumstances and company practices may change. We encourage users to conduct their own 
              research before making decisions based on our information.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have suggestions for additional companies to add to our database, corrections to existing 
              information, or any other feedback, please reach out to us at 
              <a href="mailto:contact@ethicalchoiceguide.org" className="text-primary ml-1">
                contact@ethicalchoiceguide.org
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
