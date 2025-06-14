
import React from 'react';
import { Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold text-primary">
          <Dna className="h-7 w-7" />
          <span>Kreem Genomic</span>
        </Link>
        <div className="flex items-center space-x-1 md:space-x-2"> {/* Reduced space for smaller screens */}
          <Button variant="ghost" asChild>
            <Link to="/our-science">Our Science</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/platform">Platform</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/for-patients">For Patients</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/for-clinicians">For Clinicians</Link>
          </Button>
          <Button asChild>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
