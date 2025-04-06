
import React from 'react';
import { Brand } from '@/data/brands';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{brand.name}</h3>
          <Badge variant="outline" className="ml-2">{brand.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{brand.description}</p>
        <div className="mt-2">
          <h4 className="text-xs font-medium text-muted-foreground mb-1">WHY AVOID:</h4>
          <ul className="text-sm list-disc list-inside">
            {brand.reasons.slice(0, 1).map((reason, i) => (
              <li key={i} className="text-foreground">{reason}</li>
            ))}
            {brand.reasons.length > 1 && (
              <li className="text-muted-foreground text-sm">+{brand.reasons.length - 1} more reasons</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => navigate(`/brand/${brand.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BrandCard;
