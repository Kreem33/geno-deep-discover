
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ForCliniciansPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Empowering Clinicians with Precision Insights</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Kreem Genomic is your trusted partner in integrating advanced genetic insights into clinical practice. We provide a comprehensive suite of validated tests, streamlined ordering processes, and clear, actionable reports designed to support your diagnostic, prognostic, and therapeutic decisions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-primary mb-3">Actionable Reporting</h2>
            <p className="text-muted-foreground">Our reports are designed for clinical utility, translating complex genomic data into understandable insights. We highlight clinically relevant variants, potential drug interactions, and risk predispositions, all within a secure and easily accessible portal.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-primary mb-3">Dedicated Support & Resources</h2>
            <p className="text-muted-foreground">Access dedicated clinician support for test selection, interpretation queries, and case consultations. We also offer a wealth of educational resources, including webinars, white papers, and guidelines to help you stay at the forefront of genomic medicine.</p>
          </div>
        </div>

        <div className="my-8 p-8 bg-secondary/30 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">Partnering for Better Patient Outcomes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover how our advanced genetic testing services can support your clinical practice, optimize treatment strategies, and ultimately enhance patient care. Join us in shaping the future of personalized medicine.</p>
          {/* Consider adding a Call to Action button here, e.g., "Learn More" or "Clinician Portal" */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForCliniciansPage;
