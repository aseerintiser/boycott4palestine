
import React from 'react';
import { Brand } from '@/data/brands/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowUpRight } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  const navigate = useNavigate();
  const alternativesCount = brand.alternatives?.length || 0;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow border-gray-200 overflow-hidden group">
      <CardContent className="pt-6 pb-3 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-palestinian-black group-hover:text-palestinian-red transition-colors">{brand.name}</h3>
          <Badge variant="palestinian" className="ml-2 whitespace-nowrap">{brand.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{brand.description}</p>
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <ShieldAlert className="h-4 w-4 text-palestinian-red" />
            <h4 className="text-xs font-medium text-palestinian-red">WHY AVOID:</h4>
          </div>
          <ul className="text-sm list-disc list-inside space-y-1">
            {brand.reasons.slice(0, 1).map((reason, i) => (
              <li key={i} className="text-foreground text-sm line-clamp-2">{reason}</li>
            ))}
            {brand.reasons.length > 1 && (
              <li className="text-muted-foreground text-sm list-none pl-4">+{brand.reasons.length - 1} more reasons</li>
            )}
          </ul>
        </div>
        
        {alternativesCount > 0 && (
          <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
            <p className="text-xs font-medium text-palestinian-green mb-1.5">
              ALTERNATIVES: <span className="text-muted-foreground">({alternativesCount} available)</span>
            </p>
            <p className="text-sm text-palestinian-black">
              {brand.alternatives[0].name}
              {alternativesCount > 1 && ` +${alternativesCount - 1} more`}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-palestinian-green hover:text-white hover:bg-palestinian-green border-palestinian-green/70 group-hover:border-palestinian-green transition-colors flex items-center gap-1"
          onClick={() => navigate(`/brand/${brand.id}`)}
        >
          View Details
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BrandCard;
