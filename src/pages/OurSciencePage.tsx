
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const OurSciencePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Our Science: Pioneering Genetic Discovery</h1>
        <p className="text-lg text-muted-foreground mb-6">
          At Kreem Genomic, our scientific endeavors are at the heart of our mission. We leverage cutting-edge technologies, including advanced Artificial Intelligence, next-generation sequencing (NGS), and multi-omics data integration, to unravel the complexities of the human genome.
        </p>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Core Research Areas</h2>
            <p className="text-muted-foreground">
              Our research focuses on critical areas such as early disease detection, personalized therapeutic responses, and understanding complex genetic disorders. We are committed to translating these scientific discoveries into tangible solutions that advance personalized medicine and improve patient outcomes globally.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Innovation Through Collaboration</h2>
            <p className="text-muted-foreground">
              We believe in the power of collaboration. Kreem Genomic actively partners with leading academic institutions, research organizations, and pharmaceutical companies to accelerate the pace of discovery and bring innovative genetic solutions to those who need them most.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Looking Ahead</h2>
            <p className="text-muted-foreground">
              The future of medicine is genetic. Explore our publications, ongoing research projects, and learn about the brilliant minds driving innovation at Kreem Genomic as we continue to push the boundaries of what's possible in genetic science.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurSciencePage;
