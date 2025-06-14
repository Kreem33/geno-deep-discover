
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

const ForPatientsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Your Journey to Genetic Understanding</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Embark on a transformative journey to understand your unique genetic blueprint with Kreem Genomic. We believe that knowledge is power, especially when it comes to your health. Our services provide clear, accessible information about your genetics, empowering you and your healthcare provider to make proactive and informed decisions about your well-being.
        </p>
        
        <div className="my-12 p-8 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-3">Understanding Your Genetic Health, Simplified</h2>
          <p className="text-muted-foreground">
            Learn how Kreem Genomic can provide you with profound insights into your genetic predispositions for certain conditions, how your body might respond to specific medications, and traits that make you unique. Our reports are designed to be easy to understand, and we encourage discussing your results with a healthcare professional to guide personalized healthcare decisions.
          </p>
        </div>

        <HowItWorksSection />

        <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-3">Ready to Take Control?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Explore our range of tests or speak with your doctor about how Kreem Genomic can fit into your health plan.
            </p>
            {/* Consider adding a Call to Action button here e.g. "Explore Tests" */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForPatientsPage;
