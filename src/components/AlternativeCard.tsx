
import React from 'react';
import { Alternative } from '@/data/brands';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface AlternativeCardProps {
  alternative: Alternative;
}

const AlternativeCard: React.FC<AlternativeCardProps> = ({ alternative }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <h3 className="font-medium">{alternative.name}</h3>
          {alternative.link && (
            <a 
              href={alternative.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 ml-2"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{alternative.description}</p>
      </CardContent>
    </Card>
  );
};

export default AlternativeCard;
