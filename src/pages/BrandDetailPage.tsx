
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBrandById } from '@/data/brands/index';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import AlternativeCard from '@/components/AlternativeCard';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BrandDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const brand = id ? getBrandById(id) : null;

  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Brand not found</h2>
        <p className="mb-6">The brand you're looking for doesn't exist in our database.</p>
        <Button onClick={() => navigate('/')} className="bg-palestinian-green hover:bg-palestinian-green/90">
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
          className="mb-4 flex items-center text-palestinian-black hover:text-palestinian-green hover:bg-transparent"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to List
        </Button>

        <div className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-16 w-16 bg-gray-100 border border-gray-200">
              {brand.logo ? (
                <AvatarImage src={brand.logo} alt={`${brand.name} logo`} />
              ) : (
                <AvatarFallback className="text-xl font-medium text-gray-500">
                  {brand.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold">{brand.name}</h1>
                <Badge variant="palestinian">{brand.category}</Badge>
              </div>
              <p className="text-lg text-muted-foreground">{brand.description}</p>
            </div>
          </div>
        </div>

        <Card className="mb-8 border-palestinian-red/20">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-palestinian-red">Why avoid this brand?</h2>
            <ul className="space-y-2">
              {brand.reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-palestinian-red mr-2">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-palestinian-green">
            Ethical Alternatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brand.alternatives.map((alternative) => (
              <AlternativeCard 
                key={alternative.id} 
                alternative={alternative} 
              />
            ))}
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            We've provided several ethical alternatives. If you know of more options that should be added, 
            please use our "Suggest" form to let us know.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailPage;
