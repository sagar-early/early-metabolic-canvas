import React, { useState } from 'react';
// These imports are assumed to be from your project's component library and lucide-react.
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navigation items as per your request
  const navItems = [
    { name: 'Home', href: 'https://early.fit', active: false },
    { name: 'Early Program', href: 'https://early.fit/#program', active: false },
    { name: 'Medications', href: 'https://early.fit/medications', active: false },
        { name: 'Calculators', href: 'https://early.fit/calculators', active: false },
    // Renamed item is now the active one
    { name: 'Metabolic Test', href: 'https://early.fit/#btnQuiz', active: true },
    { name: 'Blogs', href: 'https://blog.early.fit', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased header height to accommodate larger elements */}
        <div className="flex items-center justify-between h-20">
          {/* Logo - Increased size */}
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
              alt="EARLY"
              className="h-11 w-auto" // Increased logo height from h-8 to h-10
            />
          </div>

          {/* Desktop Navigation - Updated styling */}
          <nav className="hidden md:flex">
            {/* Changed background color, reduced padding and spacing */}
            <div className="bg-[#79855F] rounded-full px-1 py-1">
              <div className="flex items-center space-x-1"> {/* Reduced space between items */}
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    // Updated class logic for active/inactive states
                    className={`text-sm font-medium transition-colors px-3 py-1 rounded-full ${
                      item.active
                        ? 'text-black underline cursor-default' // Active: White text, underlined, no background or hover effects
                        : 'text-black-200 hover:text-black' // Inactive: Light gray text, brightens to white on hover
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA Button - Updated styling */}
          <Button className="hidden md:flex bg-primary hover:opacity-90 text-white font-medium px-8 py-3 rounded-full transition-opacity">
            Start EARLY
          </Button>

          {/* Mobile menu - Logic updated for consistency */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-700 hover:text-primary p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-6">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      // Updated mobile menu styles to match desktop logic
                      className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                        item.active
                          ? 'text-primary underline' // Active: Underlined, no background
                          : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="bg-primary hover:opacity-90 text-white font-medium px-6 py-3 rounded-full mt-6 w-full">
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