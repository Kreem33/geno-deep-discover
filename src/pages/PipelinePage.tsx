
```typescript
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PipelinePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-6">
            Our Therapeutic Pipeline
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Discover the innovative therapies Kreem Genomic is developing to target complex diseases at their genetic core.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
            Learn More About Our Research
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Placeholder for more content */}
        <div className="py-12">
          <h2 className="text-3xl font-semibold text-sky-400 mb-8 text-center">Focus Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg">
                <h3 className="text-2xl font-bold text-sky-400 mb-3">Disease Area {i + 1}</h3>
                <p className="text-slate-400">
                  Detailed information about our approach and progress in targeting this specific disease area through genetic medicine. 
                  (Content to be added)
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PipelinePage;
```
