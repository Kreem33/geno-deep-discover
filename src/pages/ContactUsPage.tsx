
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <p className="text-muted-foreground mb-6 text-center">
            We'd love to hear from you! Whether you have a question about our services, partnerships, or anything else, our team is ready to answer all your questions.
          </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
