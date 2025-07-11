
import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#434935] text-primary-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Column 1 - Logo and Social */}
          <div className="space-y-6">
            <div className="flex justify-start">
              <img
                src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
                alt="EARLY"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-start space-x-4">
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Facebook className="w-5 h-5 text-[#434935]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Instagram className="w-5 h-5 text-[#434935]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Linkedin className="w-5 h-5 text-[#434935]" />
              </a>
              <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-5 h-5 text-[#434935]" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <div className="space-y-3">
              <a href="https://early.fit" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Home
              </a>
              <a href="https://early.fit/#program" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Early Program
              </a>
              <a href="https://early.fit/medications" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Medications
              </a>
              <a href="https://early.fit/calculators" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Calculators
              </a>
            </div>
          </div>

          {/* Column 3 - More Links */}
          <div>
            <div className="space-y-3">
              <a href="https://early.fit/research" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Research
              </a>
              <a href="https://blog.early.fit" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Blogs
              </a>
              <a href="https://early.fit/termsandconditon" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Terms & Conditions
              </a>
              <a href="https://early.fit/privacypolicy" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Based on reference images */}
        <div className="lg:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
              alt="EARLY"
              className="h-8 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Separator Line */}
          <div className="border-t border-primary-foreground/20 mb-6"></div>

          {/* Menu Links in 2 Columns */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <a href="https://early.fit" className="block text-primary-foreground/80 font-satoshi">
                Home
              </a>
              <a href="https://early.fit/#program" className="block text-primary-foreground/80 font-satoshi">
                Early Program
              </a>
              <a href="https://early.fit/medications" className="block text-primary-foreground/80 font-satoshi">
                Medications
              </a>
              <a href="https://early.fit/calculators" className="block text-primary-foreground/80 font-satoshi">
                Calculators
              </a>
            </div>
            <div className="space-y-3">
              <a href="https://early.fit/research" className="block text-primary-foreground/80 font-satoshi">
                Research
              </a>
              <a href="https://blog.early.fit" className="block text-primary-foreground/80 font-satoshi">
                Blogs
              </a>
              <a href="https://early.fit/termsandconditon" className="block text-primary-foreground/80 font-satoshi">
                Terms & Conditions
              </a>
              <a href="https://early.fit/privacypolicy" className="block text-primary-foreground/80 font-satoshi">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-primary-foreground/20 mb-6"></div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Facebook className="w-5 h-5 text-[#434935]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Instagram className="w-5 h-5 text-[#434935]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Linkedin className="w-5 h-5 text-[#434935]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#434935]" />
            </a>
          </div>

          {/* Separator Line */}
          <div className="border-t border-primary-foreground/20 mb-6"></div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-primary-foreground/60 font-satoshi">
            © 2025 EARLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
