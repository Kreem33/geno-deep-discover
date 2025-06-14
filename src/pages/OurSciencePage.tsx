
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const OurSciencePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Our Science</h1>
        <p className="text-lg text-muted-foreground">
          Detailed information about our scientific approach, research, and breakthroughs will be presented here.
        </p>
        {/* Placeholder content - more to be added */}
      </main>
      <Footer />
    </div>
  );
};

export default OurSciencePage;
