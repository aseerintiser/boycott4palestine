
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Info, HandHeart, Star, Github, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-palestinian-red">About Boycott4Palestine</h1>
        
        <Card className="mb-8 border-l-4 border-l-palestinian-red">
          <CardContent className="pt-6">
            <div className="flex items-start mb-4">
              <Info className="h-5 w-5 text-palestinian-red mt-1 mr-2 flex-shrink-0" />
              <h2 className="text-xl font-bold text-palestinian-black">Our Mission</h2>
            </div>
            <p className="mb-6">
              Boycott4Palestine aims to support the Palestinian cause by empowering consumers with 
              knowledge about companies and brands with connections to Israeli occupation or companies 
              that support it. We provide information to help you make informed ethical purchasing 
              decisions that align with your values of justice and human rights.
            </p>
            
            <div className="flex items-start mb-4">
              <HandHeart className="h-5 w-5 text-palestinian-red mt-1 mr-2 flex-shrink-0" />
              <h2 className="text-xl font-bold text-palestinian-black">How It Works</h2>
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
              <Star className="h-5 w-5 text-palestinian-red mt-1 mr-2 flex-shrink-0" />
              <h2 className="text-xl font-bold text-palestinian-black">Why Boycott?</h2>
            </div>
            <p className="mb-6">
              Economic pressure through boycotts has historically been an effective non-violent method 
              to promote change and justice. By choosing to boycott companies complicit in injustice, 
              you're using your consumer power to stand in solidarity with Palestinians and advocate for 
              their fundamental human rights.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md border-l-4 border-l-palestinian-green">
              <h2 className="text-xl font-bold mb-2 text-palestinian-black">Disclaimer</h2>
              <p>
                The information provided on this app is for educational purposes only. We strive for accuracy, 
                but circumstances and company practices may change. We encourage users to conduct their own 
                research before making decisions based on our information.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-palestinian-green">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-palestinian-black">Contact Us</h2>
            <p className="mb-4">
              If you have suggestions for additional companies to add to our database, corrections to existing 
              information, or any other feedback, please reach out to us through one of the following channels:
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-palestinian-black" />
                <span>Submit an issue on our <a href="https://github.com/boycott4palestine/database" className="text-palestinian-red hover:underline">GitHub repository</a></span>
              </div>
              
              <div className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-palestinian-black" />
                <span>Message us on <a href="https://twitter.com/boycott4pal" className="text-palestinian-red hover:underline">Twitter/X @boycott4pal</a></span>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md mt-2 text-sm">
                <p>Note: Please include detailed information with any submission, including sources and references when possible.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
