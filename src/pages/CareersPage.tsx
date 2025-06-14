
```typescript
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Sparkles } from 'lucide-react';

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center py-16">
          <Briefcase className="h-16 w-16 text-sky-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Be part of a pioneering company at the forefront of AI-driven genetic medicine. We're looking for passionate individuals to help us shape the future of healthcare.
          </p>
        </div>

        <div className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-sky-400 mb-8 text-center">Why Kreem Genomic?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Sparkles className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-bold text-sky-400 mb-2">Impactful Work</h3>
              <p className="text-slate-400">Contribute to groundbreaking research that has the potential to save lives and improve global health.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Users className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-bold text-sky-400 mb-2">Collaborative Culture</h3>
              <p className="text-slate-400">Work alongside a diverse team of brilliant minds in an environment that fosters innovation and growth.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-sky-400 mb-8 text-center">Current Openings</h2>
          <div className="space-y-6">
            {/* Placeholder for job listings */}
            {[
              { title: "Senior AI Research Scientist", location: "Remote / San Francisco" },
              { title: "Bioinformatics Engineer", location: "New York City" },
              { title: "Clinical Genomics Specialist", location: "Boston" },
            ].map((job, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-sky-400 mb-1">{job.title}</h3>
                  <p className="text-slate-500">{job.location}</p>
                </div>
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 mt-4 sm:mt-0">
                  View Details & Apply
                </Button>
              </div>
            ))}
            {/* If no current openings */}
            {/* <p className="text-center text-slate-400">There are no current openings, but we are always interested in hearing from talented individuals. Feel free to <a href="/contact-us" className="text-sky-400 hover:underline">contact us</a>.</p> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Need to import Users icon if used in CareersPage
import { Users } from 'lucide-react'; 
export default CareersPage;
```
