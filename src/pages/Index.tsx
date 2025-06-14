
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FutureMedicineSection from '@/components/sections/FutureMedicineSection';
import PlatformSection from '@/components/sections/PlatformSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection'; // Added import
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FutureMedicineSection />
        <PlatformSection />
        <HowItWorksSection /> {/* Added new section */}
        {/* You can add more sections here as we build them out */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

