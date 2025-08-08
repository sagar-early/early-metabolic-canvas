import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ThankYou: React.FC = () => {
  const query = useQuery();
  const name = query.get("name") || "Friend";

  React.useEffect(() => {
    document.title = `Thank you, ${name}! | Early`;
    const meta = document.querySelector('meta[name="description"]');
    const content = `Thank you ${name}. Your Metabolic Diagnosis Test is booked. Next steps and app download links inside.`;
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, [name]);

  return (
    <main className="min-h-screen bg-neutral-light text-foreground">
      <section className="container py-10 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            {/* Mascot */}
            <img src="/placeholder.svg" alt="Early sparrow mascot" className="w-32 h-32 md:w-40 md:h-40 object-contain" />

            <h1 className="font-unna text-3xl md:text-4xl text-primary">Thank you, {name}!</h1>
            <p className="font-satoshi text-primary-medium max-w-2xl">
              Your first step is complete. We're so excited to have you on board.
            </p>
          </div>

          {/* What's Next - Section 1 */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-accent/60 flex items-center justify-center text-primary font-unna text-xl">
                Expert
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-neutral-cream p-4 md:p-6 shadow-md">
                <h3 className="font-unna text-2xl text-primary mb-2">Our Expert is on it!</h3>
                <p className="font-satoshi text-primary-medium">
                  Hello, {name}! I'm one of the senior nutritionists at Early. I will personally reach out to you on WhatsApp within the next 4 hours to schedule your at-home test and consultation.
                </p>
              </div>
            </div>
          </div>

          {/* While you wait */}
          <div className="mt-10 md:mt-12">
            <h3 className="font-unna text-2xl text-primary mb-2">While you wait...</h3>
            <p className="font-satoshi text-primary-medium mb-4">
              Download the Early app. This will be your home for tracking your progress and booking future consultations with your dedicated care team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com/us/app/early-fit/id6748427718" target="_blank" rel="noreferrer">
                <Button className="w-full sm:w-auto bg-foreground text-white hover:bg-foreground/90">
                  Download on the App Store
                </Button>
              </a>
              <a href="https://apps.apple.com/us/app/early-fit/id6748427718" target="_blank" rel="noreferrer">
                <Button variant="secondary" className="w-full sm:w-auto bg-foreground text-white hover:bg-foreground/90">
                  Get it on Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
