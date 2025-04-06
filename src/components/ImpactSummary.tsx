
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart2, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllBrands } from '@/data/brands';
import { useNavigate } from 'react-router-dom';

const ImpactSummary: React.FC = () => {
  const navigate = useNavigate();
  const brands = getAllBrands();
  const totalBrands = brands.length;
  const totalAlternatives = brands.reduce((acc, brand) => acc + brand.alternatives.length, 0);
  
  return (
    <Card className="border-palestinian-green/20 my-8">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-3">
          <BarChart2 className="h-5 w-5 text-palestinian-green" />
          <h2 className="text-xl font-semibold text-palestinian-black">Boycott Impact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-gray-50 p-4 rounded-md flex items-center gap-3">
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-5 w-5 text-palestinian-red" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Brands Listed</p>
              <p className="text-2xl font-bold">{totalBrands}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-palestinian-green" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Ethical Alternatives</p>
              <p className="text-2xl font-bold">{totalAlternatives}</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Your ethical choices make a difference. By boycotting these brands, you're helping to pressure companies to change their practices and supporting ethical alternatives.
        </p>
        
        <Button 
          variant="outline" 
          className="w-full text-palestinian-green hover:bg-palestinian-green hover:text-white border-palestinian-green/70 transition-colors flex items-center gap-1"
          onClick={() => navigate('/impact')}
        >
          View Full Statistics
          <ExternalLink className="h-3.5 w-3.5" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ImpactSummary;
