
import React from 'react';
import { ShoppingCart, TestTube2, BrainCircuit, FileCheck2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Order Your Kit',
    description: 'Easily order our comprehensive genetic testing kit online through our secure platform.',
  },
  {
    icon: TestTube2,
    title: 'Provide Sample',
    description: 'Collect your sample conveniently at home using our simple, non-invasive collection kit.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Analysis',
    description: 'Our cutting-edge AI algorithms meticulously analyze your genetic data for accurate insights.',
  },
  {
    icon: FileCheck2,
    title: 'Unlock Your Insights',
    description: 'Receive a detailed, easy-to-understand report with actionable insights about your health.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How GenoDeep Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple and secure process to unlock your genetic potential and gain valuable health insights.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

