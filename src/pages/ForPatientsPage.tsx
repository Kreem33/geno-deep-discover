
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HowItWorksSection from '@/components/sections/HowItWorksSection'; // Potentially reuse

const ForPatientsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">For Patients</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Information tailored for patients, including details about our tests, the process, patient stories, and how to get started.
        </p>
        {/* We can include the HowItWorksSection here or similar patient-focused content */}
        <div className="my-8 p-6 bg-secondary/30 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-3">Understanding Your Genetic Health</h2>
          <p className="text-muted-foreground">Learn how Kreem Genomic can empower you with insights into your genetic predispositions and help guide personalized healthcare decisions.</p>
        </div>
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default ForPatientsPage;
