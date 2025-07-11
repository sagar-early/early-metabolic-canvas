
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: 'https://early.fit', active: false },
    { name: 'Early Program', href: 'https://early.fit/#program', active: false },
    { name: 'Medications', href: 'https://early.fit/medications', active: true },
    { name: 'Blog', href: 'https://blog.early.fit', active: false },
    { name: 'Metabolic Quiz', href: 'https://early.fit/#btnQuiz', active: false },
    { name: 'Calculators', href: 'https://early.fit/calculators', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png" 
              alt="EARLY" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border border-gray-200">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-satoshi font-medium transition-colors px-3 py-1 rounded-full ${
                      item.active
                        ? 'bg-primary-soft text-primary underline'
                        : 'text-gray-700 hover:text-primary hover:bg-primary-soft/20'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-primary hover:bg-primary-light text-primary-foreground font-satoshi font-semibold px-6 py-2 rounded-full transition-colors">
            Start EARLY
          </Button>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-700 hover:text-primary p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-satoshi font-medium py-3 px-4 rounded-lg transition-colors ${
                        item.active
                          ? 'bg-primary-soft text-primary'
                          : 'text-gray-700 hover:text-primary hover:bg-primary-soft/20'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="bg-primary hover:bg-primary-light text-primary-foreground font-satoshi font-semibold px-6 py-3 rounded-full mt-6">
                    Start EARLY
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
