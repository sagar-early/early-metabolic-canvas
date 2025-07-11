
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Search, User, Droplets, FileText } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-neutral-light">
      <div className="w-full py-4 lg:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Mobile: Product Details First */}
          <div className="lg:hidden space-y-3 px-4 sm:px-6">
            {/* Module 1: Header & Trust Signal */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-primary font-unna leading-tight">
                Metabolic Diagnosis Test
              </h1>
              <p className="text-lg text-gray-700 font-satoshi font-medium">
                The First Step to Your Medically-Guided Weight Loss Journey
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-satoshi font-semibold text-sm">
                  4.8 (Based on 300+ Reviews)
                </span>
              </div>
            </div>

            {/* Mobile CTA - Sticky */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-lg sticky top-20 z-40">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl font-bold text-primary font-satoshi">
                  ₹1,499
                </span>
                <span className="text-lg text-gray-500 line-through font-satoshi">
                  MRP ₹4,999
                </span>
                <span className="bg-[#c6f15b] text-accent-foreground px-2 py-1 rounded-full text-xs font-satoshi font-bold">
                  Save 70%
                </span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-satoshi font-bold py-3 text-base rounded-full">
                Book Your Diagnosis Test Now
              </Button>
            </div>
          </div>

          {/* Left Column - Image Carousel */}
          <div className="animate-fade-in order-2 lg:order-1 px-4 sm:px-6 lg:px-0">
            <ImageCarousel />
          </div>

          {/* Right Column - Product Details (Desktop) */}
          <div className="hidden lg:flex lg:flex-col space-y-4 animate-fade-in order-1 lg:order-2 px-8 lg:px-12 xl:px-16">
            {/* Module 1: Header & Trust Signal */}
            <div className="space-y-3">
              <h1 className="text-4xl xl:text-5xl font-bold text-primary font-unna leading-tight">
                Metabolic Diagnosis Test
              </h1>
              <p className="text-xl text-gray-700 font-satoshi font-medium">
                The First Step to Your Medically-Guided Weight Loss Journey
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-satoshi font-semibold">
                  4.8 (Based on 300+ Reviews)
                </span>
              </div>
            </div>

            {/* Module 2: Core Description */}
            <div className="space-y-3">
              <p className="text-lg text-gray-800 font-satoshi leading-relaxed">
                Stop guessing. This medical diagnosis uncovers the root biological cause of your weight gain, 
                making it the essential first step towards our full medical program—proven to help eligible 
                users lose up to 20% of their body weight.* Our doctors analyze 35+ metabolic markers to 
                create a plan that works for <em>your</em> body.
              </p>
              <p className="text-xs text-gray-500 font-satoshi">
                *Based on clinical studies of GLP-1 treatments over a 68-week period when combined with a 
                reduced-calorie diet and increased physical activity. Individual results may vary.
              </p>
            </div>

            {/* Module 3: Key Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-satoshi font-semibold text-gray-800">
                    Identify Your Root Cause
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-satoshi font-semibold text-gray-800">
                    Doctor Consultation & Program Advice
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-satoshi font-semibold text-gray-800">
                    Convenient At-Home Lab Test
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-satoshi font-semibold text-gray-800">
                    Nutritionist Guidance for Your Next Steps
                  </p>
                </div>
              </div>
            </div>

            {/* Module 4: Purchase & CTA Block */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-primary font-unna mb-4">
                Complete Diagnostic Package
              </h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-bold text-primary font-satoshi">
                  ₹1,499
                </span>
                <span className="text-xl text-gray-500 line-through font-satoshi">
                  MRP ₹4,999
                </span>
                <span className="bg-[#c6f15b] text-accent-foreground px-3 py-1 rounded-full text-sm font-satoshi font-bold">
                  Save 70%
                </span>
              </div>
              
              <p className="text-gray-700 font-satoshi mb-6">
                Includes all tests, consultations, and your personalized plan.
              </p>
              
              <Button className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-satoshi font-bold py-4 text-lg rounded-full transition-all transform hover:scale-[1.02] shadow-lg">
                Book Your Diagnosis Test Now
              </Button>
            </div>
          </div>

          {/* Mobile: Additional Content */}
          <div className="lg:hidden space-y-4 order-3 mb-8 px-4 sm:px-6">
            {/* Core Description */}
            <div className="space-y-2">
              <p className="text-base text-gray-800 font-satoshi leading-relaxed">
                Stop guessing. This medical diagnosis uncovers the root biological cause of your weight gain, 
                making it the essential first step towards our full medical program—proven to help eligible 
                users lose up to 20% of their body weight.*
              </p>
              <p className="text-xs text-gray-500 font-satoshi">
                *Based on clinical studies of GLP-1 treatments over a 68-week period when combined with a 
                reduced-calorie diet and increased physical activity. Individual results may vary.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <p className="font-satoshi font-semibold text-gray-800 text-sm">
                  Identify Your Root Cause
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <p className="font-satoshi font-semibold text-gray-800 text-sm">
                  Doctor Consultation
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <p className="font-satoshi font-semibold text-gray-800 text-sm">
                  At-Home Lab Test
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-[#c6f15b] p-3 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <p className="font-satoshi font-semibold text-gray-800 text-sm">
                  Nutritionist Guidance
                </p>
              </div>
            </div>

            {/* Extra spacing before footer */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
