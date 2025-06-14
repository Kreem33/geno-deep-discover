import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone } from 'lucide-react'; // Added icons

const ContactUsPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted');
    // Potentially use a toast notification for submission success
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Get in Touch</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-10 text-center text-lg">
            We're eager to connect with you! Whether you have inquiries about our innovative genetic testing services, are interested in research collaborations, media relations, investment opportunities, or simply want to learn more, our dedicated team is here to provide prompt and thorough answers. Please fill out the form below, or reach out via our alternative contact methods.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Full Name" required className="mt-1"/>
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required className="mt-1"/>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input id="subject" type="text" placeholder="Reason for contacting" required className="mt-1"/>
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea id="message" placeholder="Your message..." required rows={5} className="mt-1"/>
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" />
                  General Inquiries
                </h3>
                <p className="text-muted-foreground">For general questions or information about Kreem Genomic.</p>
                <a href="mailto:info@kreemgenomic.com" className="text-primary hover:underline block mt-2">info@kreemgenomic.com</a>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  Support
                </h3>
                <p className="text-muted-foreground">For support with our services or platform.</p>
                <a href="tel:+1234567890" className="text-primary hover:underline block mt-2">+1 (234) 567-890 (Example)</a>
              </div>
               <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Office</h3>
                <p className="text-muted-foreground">123 Genome Drive<br/>BioTech City, SC 54321<br/>United States</p>
                {/* You could add a map link here if desired */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
