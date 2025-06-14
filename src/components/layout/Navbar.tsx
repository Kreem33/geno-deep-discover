
import React from 'react';
import { Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 text-xl font-semibold text-primary">
          <Dna className="h-7 w-7" />
          <span>Kreem Genomic</span>
        </a>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Our Science</Button>
          <Button variant="ghost">Platform</Button>
          <Button variant="ghost">For Patients</Button>
          <Button variant="ghost">For Clinicians</Button>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
