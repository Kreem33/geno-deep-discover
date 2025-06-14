
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PlatformSection from '@/components/sections/PlatformSection'; // We can reuse the existing section

const PlatformPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <PlatformSection />
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-primary mt-8 mb-6 text-center">Deep Dive into Our Technology</h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">Scalable & Secure Infrastructure</h3>
              <p className="text-muted-foreground">
                Our integrated platform is engineered for robust scalability and uncompromising security. It combines sophisticated bioinformatics pipelines, advanced machine learning models, and a user-friendly interface to provide comprehensive genomic insights. We ensure data integrity and privacy through state-of-the-art encryption and compliance with global data protection regulations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-3">Advanced Analytical Capabilities</h3>
              <p className="text-muted-foreground">
                Key capabilities include high-throughput variant interpretation, predictive modeling for disease risk and drug response, and seamless integration of diverse omics data. Our platform features powerful APIs for custom integrations, empowering researchers and clinicians with the tools they need to make groundbreaking discoveries and informed decisions.
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-8 text-center">
            Discover how Kreem Genomic's robust infrastructure and analytical prowess are revolutionizing genetic medicine, supporting complex research initiatives, and enabling truly personalized clinical care.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformPage;
