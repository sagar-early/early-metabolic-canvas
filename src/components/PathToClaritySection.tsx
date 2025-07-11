
import React from 'react';

const PathToClaritySection = () => {
  const pathItems = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      heading: "An Uncompromising Look at Your Health",
      text: "Your comprehensive metabolic profile reveals the hidden factors affecting your weight. We analyze insulin resistance, thyroid function, cortisol levels, and 32+ other critical markers that most doctors miss. This isn't just another blood test—it's a complete biological blueprint of your metabolism.",
      imageLeft: true
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      heading: "Lab-Accurate Insights, Living Room Convenience",
      text: "Skip the clinic visits and long waits. Our at-home testing kit delivers lab-quality results from the comfort of your home. Simply collect your sample, send it back in our prepaid package, and receive comprehensive results within 3-5 business days. No appointments, no hassle.",
      imageLeft: false
    },
    {
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      heading: "Go Beyond Google. Get an Expert Medical Diagnosis.",
      text: "Your results are reviewed by our board-certified physicians who specialize in metabolic health. During your one-on-one consultation, they'll explain exactly what your numbers mean, identify your specific metabolic type, and recommend the most effective treatment path for your unique biology.",
      imageLeft: true
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      heading: "Your Data, Translated into a Daily Plan",
      text: "Our registered nutritionists take your metabolic insights and create a personalized action plan. You'll receive specific meal recommendations, supplement guidance, and lifestyle modifications tailored to your metabolic profile. No generic advice—everything is customized to optimize your unique metabolism.",
      imageLeft: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary font-unna mb-6">
            Your Path to Metabolic Clarity
          </h2>
        </div>

        <div className="space-y-20">
          {pathItems.map((item, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {item.imageLeft ? (
                <>
                  <div className="animate-fade-in">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-3xl font-bold text-primary font-unna">
                      {item.heading}
                    </h3>
                    <p className="text-lg text-gray-700 font-satoshi leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-6 animate-fade-in">
                    <h3 className="text-3xl font-bold text-primary font-unna">
                      {item.heading}
                    </h3>
                    <p className="text-lg text-gray-700 font-satoshi leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  <div className="animate-fade-in">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathToClaritySection;
