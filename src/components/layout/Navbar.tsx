
```typescript
import React from 'react';
import { Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-semibold text-sky-400 hover:text-sky-300 transition-colors">
          <Dna className="h-7 w-7" />
          <span>Kreem Genomic</span>
        </Link>
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-700/50">
            <Link to="/platform">Our Platform</Link>
          </Button>
          <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-700/50">
            <Link to="/pipeline">Pipeline</Link>
          </Button>
          <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-700/50">
            <Link to="/news">News</Link>
          </Button>
          <Button variant="ghost" asChild className="text-slate-300 hover:text-white hover:bg-slate-700/50">
            <Link to="/about-us">About Us</Link>
          </Button>
        </div>
        <div className="flex items-center space-x-2 md:space-x-3">
          <Button variant="outline" asChild className="border-sky-500 text-sky-400 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300 transition-all text-sm px-3 py-1.5 h-auto hidden sm:inline-flex">
            <Link to="/careers">Careers</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm px-3 py-1.5 h-auto transition-all transform hover:scale-105">
            <Link to="/contact-us">Contact Us</Link>
          </Button>
          {/* Mobile Menu Button (Optional - Can be implemented later) */}
          {/* <Button variant="ghost" size="icon" className="md:hidden text-slate-300 hover:text-white hover:bg-slate-700/50">
            <Menu className="h-6 w-6" />
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```
