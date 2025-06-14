
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center py-16">
          <Users className="h-16 w-16 text-sky-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 mb-6">
            About Kreem Genomic
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            We are a team of scientists, engineers, and innovators dedicated to revolutionizing medicine through the power of artificial intelligence and genomics. Our mission is to decode complex biology and develop curative therapies for diseases with unmet needs.
          </p>
        </div>

        <div className="py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-sky-400 mb-4">Our Vision</h2>
            <p className="text-slate-300 mb-6 text-lg">
              To create a future where genetic insights lead to personalized and highly effective treatments for all patients, transforming the landscape of healthcare.
            </p>
            <h2 className="text-3xl font-semibold text-sky-400 mb-4">Our Approach</h2>
            <p className="text-slate-300 text-lg">
              By integrating advanced AI with deep biological understanding, we aim to accelerate drug discovery, improve diagnostic accuracy, and ultimately, improve patient outcomes on a global scale.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start space-x-4">
              <Target className="h-8 w-8 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-sky-400 mb-1">Precision Focus</h3>
                <p className="text-slate-400">Targeting the root causes of disease with unparalleled accuracy.</p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-start space-x-4">
              <Lightbulb className="h-8 w-8 text-cyan-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-sky-400 mb-1">Innovative Science</h3>
                <p className="text-slate-400">Pushing the boundaries of genetic research and AI application.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
