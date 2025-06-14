
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Unlock the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Genetic Insight</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Pioneering AI-driven genetic research and testing to transform healthcare and accelerate the discovery of new medicines.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explore Our Tests
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn About Our Science
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
