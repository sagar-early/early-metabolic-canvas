
import React from 'react';

const Banner = () => {
  const tickerText = "Complete Metabolic Diagnosis Package • 70% Off Limited Time • Expert Medical Analysis • At-Home Lab Testing • Doctor Consultation • Personalized Nutrition Plan • Root Cause Discovery • Metabolic Clarity";

  return (
    <section className="bg-[#c6f15b] py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="animate-slide-left whitespace-nowrap">
          <span className="text-primary font-satoshi font-semibold text-sm sm:text-base inline-flex items-center">
            {tickerText.split(' • ').map((text, index) => (
              <React.Fragment key={index}>
                <span className="mx-4">{text}</span>
                {index < tickerText.split(' • ').length - 1 && (
                  <span className="w-2 h-2 bg-[#434935] rounded-full mx-4"></span>
                )}
              </React.Fragment>
            ))}
          </span>
        </div>
        <div className="animate-slide-left whitespace-nowrap">
          <span className="text-primary font-satoshi font-semibold text-sm sm:text-base inline-flex items-center">
            {tickerText.split(' • ').map((text, index) => (
              <React.Fragment key={index}>
                <span className="mx-4">{text}</span>
                {index < tickerText.split(' • ').length - 1 && (
                  <span className="w-2 h-2 bg-[#434935] rounded-full mx-4"></span>
                )}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
