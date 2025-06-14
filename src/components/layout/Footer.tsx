
import React from 'react';
import { Dna } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-muted-foreground">
          <div>
            <a href="/" className="flex items-center space-x-2 text-lg font-semibold text-primary mb-4">
              <Dna className="h-6 w-6" />
              <span>GenoDeep Discover</span>
            </a>
            <p className="text-sm">
              Transforming lives through genetic insights and advanced AI.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Press</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} GenoDeep Discover. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
