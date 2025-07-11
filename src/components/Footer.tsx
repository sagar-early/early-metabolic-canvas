
import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#434935] text-white">
      <div className="w-full py-12 lg:py-16">
        {/* Desktop Layout */}
        <div className="hidden lg:block px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-3 gap-12 mb-8">
            {/* Column 1 - Logo and Social */}
            <div className="space-y-8">
              <div className="flex justify-start">
                <img
                  src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
                  alt="EARLY"
                  className="h-12 w-auto filter brightness-0 invert"
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
              <div className="space-y-4">
                <a href="https://early.fit" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Home
                </a>
                <a href="https://early.fit/#program" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Early Program
                </a>
                <a href="https://early.fit/medications" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Medications
                </a>
                <a href="https://early.fit/calculators" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Calculators
                </a>
              </div>
            </div>

            {/* Column 3 - More Links */}
            <div>
              <div className="space-y-4">
                <a href="https://early.fit/research" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Research
                </a>
                <a href="https://blog.early.fit" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Blogs
                </a>
                <a href="https://early.fit/termsandconditon" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Terms & Conditions
                </a>
                <a href="https://early.fit/privacypolicy" className="block text-white hover:text-white/80 transition-colors font-satoshi">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar with line */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/80 font-satoshi text-center">
              © 2025 EARLY. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden px-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/lovable-uploads/742fd2f1-7617-4622-bb00-40422b00ca21.png"
              alt="EARLY"
              className="h-10 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Separator Line */}
          <div className="border-t border-white/20 mb-6"></div>

          {/* Menu Links in 2 Columns */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-center">
            <div className="space-y-4">
              <a href="https://early.fit" className="block text-white font-satoshi text-sm">
                Home
              </a>
              <a href="https://early.fit/#program" className="block text-white font-satoshi text-sm">
                Early Program
              </a>
              <a href="https://early.fit/medications" className="block text-white font-satoshi text-sm">
                Medications
              </a>
              <a href="https://early.fit/calculators" className="block text-white font-satoshi text-sm">
                Calculators
              </a>
            </div>
            <div className="space-y-4">
              <a href="https://early.fit/research" className="block text-white font-satoshi text-sm">
                Research
              </a>
              <a href="https://blog.early.fit" className="block text-white font-satoshi text-sm">
                Blogs
              </a>
              <a href="https://early.fit/termsandconditon" className="block text-white font-satoshi text-sm">
                Terms & Conditions
              </a>
              <a href="https://early.fit/privacypolicy" className="block text-white font-satoshi text-sm">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-white/20 mb-6"></div>

          {/* Dividing line between menu columns */}
          <div className="absolute left-1/2 transform -translate-x-px h-32 w-px bg-white/20 -mt-40"></div>

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
          <div className="border-t border-white/20 mb-6"></div>

          {/* Bottom Bar */}
          <div className="text-center">
            <p className="text-white/80 font-satoshi text-sm">
              © 2025 EARLY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
