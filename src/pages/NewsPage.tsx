
```typescript
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Rss } from 'lucide-react';

const NewsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center py-16">
          <Rss className="h-16 w-16 text-sky-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-6">
            Latest News & Updates
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Stay informed about Kreem Genomic's breakthroughs, publications, and company announcements.
          </p>
        </div>

        {/* Placeholder for news articles */}
        <div className="py-12">
          <h2 className="text-3xl font-semibold text-sky-400 mb-8 text-center">Recent Articles</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-sky-400 mb-2">News Article Title {i + 1}</h3>
                <p className="text-sm text-slate-500 mb-3">October 26, 2025</p>
                <p className="text-slate-400">
                  A brief summary of the news article will go here. This is placeholder content. 
                  (Content to be added)
                </p>
                <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 mt-3">
                  Read More &rarr;
                </Button>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button size="lg" variant="outline" className="border-sky-500 text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300">
                View All News
             </Button>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
```
