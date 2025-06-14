
import React from 'react';
import { Microscope, Dna } from 'lucide-react';

const FutureMedicineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Future of Medicine is Here. <br className="hidden md:block" /> And We're Building It.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are an artificial intelligence company that is developing a new generation of medicines. We’re imagining a world where we can diagnose and treat disease with therapies that are tailored to an individual’s unique genetic makeup.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VuZXRpY3MlMjByZXNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
              alt="Genetic Research" 
              className="rounded-lg shadow-xl object-cover aspect-video"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                <Microscope className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">AI-Powered Discovery</h3>
                <p className="text-muted-foreground">
                  Our AI platform analyzes vast amounts of biological data to identify novel therapeutic targets and design effective genetic medicines.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                <Dna className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">Precision Therapies</h3>
                <p className="text-muted-foreground">
                  We focus on creating therapies that are precisely matched to the underlying genetic drivers of disease, leading to better outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureMedicineSection;
