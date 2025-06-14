
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Dna, Microscope, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platformFeatures = [
  {
    icon: Dna,
    title: 'Genomic Data Analysis',
    description: 'Advanced algorithms for interpreting complex genetic data and identifying disease-associated variants.',
  },
  {
    icon: Microscope,
    title: 'AI Drug Discovery',
    description: 'Leveraging machine learning to accelerate the identification and development of novel therapeutic candidates.',
  },
  {
    icon: ArrowRight, // Placeholder, consider more specific icon
    title: 'Clinical Integration',
    description: 'Tools and services to seamlessly integrate genetic insights into clinical practice for personalized patient care.',
  },
];

const PlatformSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Integrated Platform</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining cutting-edge technology and deep scientific expertise to power the future of genetic medicine.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            Learn More About Our Platform
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
