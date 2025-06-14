
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PlatformSection from '@/components/sections/PlatformSection'; // We can reuse the existing section

const PlatformPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* We can reuse the PlatformSection or add more content specific to this page */}
        <PlatformSection />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">More Platform Details</h2>
          <p className="text-lg text-muted-foreground">
            Further details about our integrated platform, technology stack, and capabilities can be explored here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformPage;
