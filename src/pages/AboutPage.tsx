
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Info, HandHeart, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">About Boycott4Palestine</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <Info className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="mb-6">
              Boycott4Palestine aims to support the Palestinian cause by empowering consumers with 
              knowledge about companies and brands with connections to Israeli occupation or companies 
              that support it. We provide information to help you make informed ethical purchasing 
              decisions that align with your values of justice and human rights.
            </p>
            
            <div className="flex items-start mb-4">
              <HandHeart className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
              <h2 className="text-xl font-semibold">How It Works</h2>
            </div>
            <p className="mb-4">
              Our database includes companies and brands that have been identified as having ties to 
              Israeli occupation, providing financial support to the Israeli military, or operating 
              in illegally occupied Palestinian territories.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>We provide detailed information about each brand's connection to the occupation</li>
              <li>We offer ethical alternatives that respect human rights and international law</li>
              <li>Our database is regularly updated based on the latest information</li>
              <li>We fact-check our information to ensure accuracy</li>
            </ul>
            
            <div className="flex items-start mb-4">
              <Star className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
              <h2 className="text-xl font-semibold">Why Boycott?</h2>
            </div>
            <p className="mb-6">
              Economic pressure through boycotts has historically been an effective non-violent method 
              to promote change and justice. By choosing to boycott companies complicit in injustice, 
              you're using your consumer power to stand in solidarity with Palestinians and advocate for 
              their fundamental human rights.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
              <p>
                The information provided on this app is for educational purposes only. We strive for accuracy, 
                but circumstances and company practices may change. We encourage users to conduct their own 
                research before making decisions based on our information.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have suggestions for additional companies to add to our database, corrections to existing 
              information, or any other feedback, please reach out to us at 
              <a href="mailto:contact@boycott4palestine.org" className="text-red-600 hover:underline ml-1">
                contact@boycott4palestine.org
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
