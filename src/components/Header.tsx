
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: 'https://early.fit', active: false },
    { name: 'Early Program', href: 'https://early.fit/#program', active: false },
    { name: 'Medications', href: 'https://early.fit/medications', active: false },
    { name: 'Calculators', href: 'https://early.fit/calculators', active: false },
    { name: 'Research', href: 'https://early.fit/research', active: false },
    { name: 'Blogs', href: 'https://blog.early.fit', active: false },
    { name: 'Metabolic Test', href: 'https://early.fit/#btnQuiz', active: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
              alt="EARLY"
              className="h-11 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <div className="bg-[#d6d9ce] rounded-full px-1 py-1">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors px-3 py-1 rounded-full ${
                      item.active
                        ? 'text-black underline cursor-default'
                        : 'text-black'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <Button 
            className="hidden md:flex bg-primary hover:opacity-90 text-white font-medium px-8 py-3 rounded-full transition-opacity"
            onClick={() => window.open('https://wa.aisensy.com/aaaflf', '_blank')}
          >
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
              <SheetContent 
                side="right" 
                className="w-full h-full bg-white/50 backdrop-blur-md border-0 p-0 flex flex-col"
              >
                {/* Close button */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary p-2"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu items */}
                <div className="flex-1 flex flex-col justify-center px-8 space-y-0">
                  {navItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <a
                        href={item.href}
                        className={`text-lg font-medium py-6 transition-colors text-center ${
                          item.active
                            ? 'text-primary underline underline-offset-4'
                            : 'text-gray-700 hover:text-primary'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                      {index < navItems.length - 1 && (
                        <div className="h-px bg-white/30"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* CTA Button at bottom */}
                <div className="p-8">
                  <Button 
                    className="bg-primary hover:opacity-90 text-white font-medium px-6 py-4 rounded-full w-full text-lg"
                    onClick={() => {
                      window.open('https://wa.aisensy.com/aaaflf', '_blank');
                      setIsOpen(false);
                    }}
                  >
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
