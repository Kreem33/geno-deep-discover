
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-28 md:py-40 bg-background text-center"> {/* Using bg-background for dark theme, increased padding */}
      <div className="container mx-auto px-4">
        <div className="mb-6 inline-flex items-center gap-2 bg-sky-700/30 text-sky-400 px-4 py-1.5 rounded-full text-sm font-medium">
          <Zap className="h-4 w-4" />
          AI-Powered Genetic Medicines
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-sky-300 via-cyan-300 to-sky-400">
          The Future of Medicine is <br className="hidden md:block" /> Written in <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-sky-300 to-cyan-400">Our DNA</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Kreem Genomic is pioneering a new era of drug discovery, using artificial intelligence to decode complex biology and program curative therapies.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 px-8 py-3 w-full md:w-auto">
            Discover Our Platform
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-sky-500 text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300 shadow-md hover:shadow-sky-500/30 transition-all duration-300 transform hover:scale-105 px-8 py-3 w-full md:w-auto">
            Our Pipeline
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
