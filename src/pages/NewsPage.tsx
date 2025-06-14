
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react'; // Changed from Rss to Newspaper

const newsArticles = [
  {
    id: 1,
    title: "Kreem Genomic Announces Breakthrough in AI-Driven Cancer Detection",
    date: "June 10, 2025",
    summary: "Our latest research published in 'Nature Medicine' highlights a novel AI algorithm that significantly improves early-stage cancer detection accuracy using genomic data.",
    link: "#", // Placeholder link
  },
  {
    id: 2,
    title: "New Partnership to Expand Genomic Data Platform",
    date: "May 22, 2025",
    summary: "Kreem Genomic is excited to announce a strategic partnership with QuantumLeap AI to enhance our genomic data analysis capabilities and accelerate therapeutic discovery.",
    link: "#",
  },
  {
    id: 3,
    title: "Dr. Elara Vance Joins Kreem Genomic as Chief Scientific Officer",
    date: "April 15, 2025",
    summary: "We are thrilled to welcome Dr. Elara Vance, a renowned expert in computational biology, to lead our scientific research and development efforts.",
    link: "#",
  },
];

const NewsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center py-16">
          <Newspaper className="h-16 w-16 text-sky-400 mx-auto mb-6" /> {/* Changed icon */}
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-6">
            Latest News & Updates
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Stay informed about Kreem Genomic's breakthroughs, publications, and company announcements.
          </p>
        </div>

        <div className="py-12">
          <h2 className="text-3xl font-semibold text-sky-400 mb-8 text-center">Recent Articles</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-sky-400 mb-2">{article.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{article.date}</p>
                <p className="text-slate-400">
                  {article.summary}
                </p>
                <Button variant="link" asChild className="text-cyan-400 hover:text-cyan-300 p-0 mt-3">
                  <a href={article.link}>Read More &rarr;</a>
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
