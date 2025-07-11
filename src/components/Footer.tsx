
import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#434935] text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Social */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
                alt="EARLY"
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
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
          <div className="text-center lg:text-left">
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
            </div>
          </div>

          {/* Column 3 - More Links */}
          <div className="text-center lg:text-left">
            <div className="space-y-3">
              <a href="https://early.fit/calculators" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Calculators
              </a>
              <a href="https://blog.early.fit" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Blogs
              </a>
              <a href="https://early.fit/research" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Research
              </a>
            </div>
          </div>

          {/* Column 4 - Legal */}
          <div className="text-center lg:text-left">
            <div className="space-y-3">
              <a href="https://early.fit/termsandconditon" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Terms & Conditions
              </a>
              <a href="https://early.fit/privacypolicy" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-primary-foreground/60 font-satoshi">
            © 2025 EARLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
