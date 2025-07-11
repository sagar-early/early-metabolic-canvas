
import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Social (Centered on Mobile) */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="text-3xl font-bold font-unna text-primary-foreground">
              EARLY
            </div>
            <p className="text-primary-foreground/80 font-satoshi">
              Medically-guided weight loss that works with your biology, not against it.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Programs */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold font-satoshi mb-4">Programs</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Medical Weight Loss
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Metabolic Diagnosis
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Nutritionist Guidance
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Health Coaching
              </a>
            </div>
          </div>

          {/* Column 3 - Company */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold font-satoshi mb-4">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                About Us
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Science & Research
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Success Stories
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Careers
              </a>
            </div>
          </div>

          {/* Column 4 - Support */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold font-satoshi mb-4">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Help Center
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Contact Us
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Privacy Policy
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-satoshi">
                Terms of Service
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
