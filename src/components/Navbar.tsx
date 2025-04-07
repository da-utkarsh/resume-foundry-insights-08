
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 font-bold text-white">PF</div>
            <span className="hidden text-xl font-semibold sm:inline-block">PrepFoundry</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${isActive('/') ? 'text-brand-700' : 'text-foreground/80'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/resume-checker" 
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${isActive('/resume-checker') ? 'text-brand-700' : 'text-foreground/80'}`}
              >
                Resume Checker
              </Link>
            </li>
            <li>
              <span className="cursor-not-allowed text-sm font-medium text-muted-foreground">
                Future Features
              </span>
            </li>
          </ul>
          <Button asChild variant="default" size="sm">
            <Link to="/resume-checker">Try Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 flex flex-col gap-6 bg-background p-6 md:hidden">
            <nav className="flex flex-col gap-6">
              <Link 
                to="/" 
                className={`text-lg font-medium ${isActive('/') ? 'text-brand-700' : 'text-foreground/80'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/resume-checker" 
                className={`text-lg font-medium ${isActive('/resume-checker') ? 'text-brand-700' : 'text-foreground/80'}`}
                onClick={closeMenu}
              >
                Resume Checker
              </Link>
              <span className="cursor-not-allowed text-lg font-medium text-muted-foreground">
                Future Features
              </span>
              <Button asChild className="mt-4 w-full">
                <Link to="/resume-checker" onClick={closeMenu}>Try Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
