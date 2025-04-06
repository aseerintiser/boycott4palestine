
import React from 'react';
import { Alternative } from '@/data/brands/types';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AlternativeCardProps {
  alternative: Alternative;
}

const AlternativeCard: React.FC<AlternativeCardProps> = ({ alternative }) => {
  // Function to check if link is valid (not an example.com link)
  const isValidLink = (link?: string) => {
    if (!link) return false;
    return !link.includes('example.com');
  };

  // Function to get a proper link if current one is just an example
  const getProperLink = (name: string, link?: string) => {
    if (isValidLink(link)) return link;
    // If it's an example.com link, use a search query instead
    const searchQuery = encodeURIComponent(name);
    return `https://www.google.com/search?q=${searchQuery}`;
  };

  return (
    <Card className="h-full">
      <CardContent className="pt-4 flex flex-col h-full">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium">{alternative.name}</h3>
          {alternative.link && (
            <a 
              href={getProperLink(alternative.name, alternative.link)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 ml-2"
              aria-label={`Visit ${alternative.name} website`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{alternative.description}</p>
        
        <div className="mt-auto pt-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-2 text-palestinian-green border-palestinian-green/50 hover:bg-palestinian-green/10"
            onClick={() => window.open(getProperLink(alternative.name, alternative.link), '_blank')}
          >
            Learn More
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlternativeCard;
