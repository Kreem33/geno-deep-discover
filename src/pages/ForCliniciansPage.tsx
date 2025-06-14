
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ForCliniciansPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">For Clinicians</h1>
        <p className="text-lg text-muted-foreground">
          Resources and information for healthcare professionals. Details on test offerings, sample requirements, result interpretation, and integrating genetic testing into clinical practice.
        </p>
        {/* Placeholder content - more to be added */}
         <div className="my-8 p-6 bg-secondary/30 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-3">Partnering with Kreem Genomic</h2>
          <p className="text-muted-foreground">Discover how our advanced genetic testing services can support your clinical practice and enhance patient care. Access resources, order tests, and manage patient results seamlessly.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForCliniciansPage;
