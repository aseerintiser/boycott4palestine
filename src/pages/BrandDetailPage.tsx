
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBrandById } from '@/data/brands';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import AlternativeCard from '@/components/AlternativeCard';
import { Separator } from '@/components/ui/separator';

const BrandDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const brand = id ? getBrandById(id) : null;

  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Brand not found</h2>
        <p className="mb-6">The brand you're looking for doesn't exist in our database.</p>
        <Button onClick={() => navigate('/')}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          size="sm"
          className="mb-4 flex items-center"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to List
        </Button>

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold">{brand.name}</h1>
            <Badge variant="outline">{brand.category}</Badge>
          </div>
          <p className="text-lg text-muted-foreground">{brand.description}</p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Why avoid this brand?</h2>
            <ul className="space-y-2">
              {brand.reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-semibold mb-4">Ethical Alternatives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brand.alternatives.map((alternative) => (
              <AlternativeCard 
                key={alternative.id} 
                alternative={alternative} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailPage;
