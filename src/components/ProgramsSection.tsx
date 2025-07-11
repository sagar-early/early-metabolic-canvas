
import React from 'react';
import { Button } from '@/components/ui/button';
import { Package, Users, Microscope } from 'lucide-react';

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-light to-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-unna mb-6">
            Your Diagnosis is Just the Beginning
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-accent/20 p-4 rounded-xl w-fit mb-6">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary font-unna mb-4">
              Path 1: The All-Inclusive Program
            </h3>
            <p className="text-gray-700 font-satoshi leading-relaxed">
              Based on your diagnosis, you may qualify for our comprehensive medical weight loss program. 
              This includes prescription medications (like GLP-1s), ongoing doctor supervision, nutritionist 
              support, and health coaching. Members typically see 15-20% body weight reduction over 12 months.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-accent/20 p-4 rounded-xl w-fit mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary font-unna mb-4">
              Path 2: Coaching & Expert Guidance
            </h3>
            <p className="text-gray-700 font-satoshi leading-relaxed">
              If medications aren't right for you, our metabolic insights guide a personalized coaching program. 
              Work with nutritionists and health coaches who understand your specific metabolic challenges. 
              This path focuses on sustainable lifestyle changes backed by your biological data.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-accent/20 p-4 rounded-xl w-fit mb-6">
              <Microscope className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary font-unna mb-4">
              How Do Medications Help?
            </h3>
            <p className="text-gray-700 font-satoshi leading-relaxed">
              For those with metabolic dysfunction, medications like GLP-1 receptor agonists can restore 
              normal hunger signals and improve insulin sensitivity. Your diagnosis determines if you're 
              a candidate and helps our doctors choose the most effective treatment protocol for your body.
            </p>
          </div>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary-light text-primary-foreground font-satoshi font-bold px-8 py-4 text-lg rounded-xl transition-all transform hover:scale-[1.02] shadow-lg">
            Explore Our Full Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
