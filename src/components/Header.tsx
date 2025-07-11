
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary font-unna">
              EARLY
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-satoshi font-medium">
              Programs
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-satoshi font-medium">
              Science
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-satoshi font-medium">
              Success Stories
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-satoshi font-medium">
              Support
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary-light text-primary-foreground font-satoshi font-semibold px-6 py-2 rounded-lg transition-colors">
            Start EARLY
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
