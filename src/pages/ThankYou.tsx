import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sparrow from "@/assets/sparrow.png";
import nutritionist from "@/assets/nutritionist.png";
import appScreenshot from "@/assets/app-screenshot.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ThankYou: React.FC = () => {
  const query = useQuery();
  const name = query.get("name") || "Friend";

  React.useEffect(() => {
    document.title = `Thank you, ${name}! | Early`;
    const meta = document.querySelector('meta[name="description"]');
    const content = `Thank you ${name}. Access your report and consult your doctor via the Early app.`;
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
    <>
      <Header />
      <main className="min-h-screen bg-neutral-light text-foreground">
        <section className="container py-8 md:py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <img src={sparrow} alt="Early sparrow mascot" className="w-8 h-8 object-contain" />
              <h1 className="font-satoshi text-3xl md:text-4xl text-primary font-semibold">Thank you, {name}!</h1>
            </div>
          </div>

          {/* What's Next - Compact and clear */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img src={nutritionist} alt="Early nutritionist wearing dark green t-shirt" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow" />
            </div>
            <div>
              <div className="rounded-2xl bg-neutral-cream p-4 md:p-6 shadow-md text-left">
                <h3 className="font-satoshi text-2xl text-primary mb-2">Our coaches are on it!</h3>
                <p className="font-satoshi text-primary-medium">
                  Hello, {name}! I'm one of the senior nutritionists at Early. I will personally reach out to you on WhatsApp within the next 4 hours to schedule your at-home test and consultation.
                </p>
              </div>
            </div>
          </div>

          {/* App Access Section */}
          <div className="mt-8 md:mt-10">
            <h3 className="font-satoshi text-2xl text-primary mb-2">Access your report and consult your doctor in the Early app</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1 space-y-3">
                <ul className="list-disc pl-5 font-satoshi text-primary-medium space-y-1">
                  <li>Track your progress</li>
                  <li>Book consultation with the doctor</li>
                  <li>Access your reports</li>
                </ul>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button asChild className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center">
                    <a href="https://apps.apple.com/us/app/early-fit/id6748427718" target="_blank" rel="noreferrer" aria-label="Download on the App Store" className="flex items-center gap-2">
                      <Apple className="w-5 h-5" />
                      <span>App Store</span>
                    </a>
                  </Button>
                  <Button asChild className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center">
                    <a href="https://apps.apple.com/us/app/early-fit/id6748427718" target="_blank" rel="noreferrer" aria-label="Get it on Google Play" className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      <span>Google Play</span>
                    </a>
                  </Button>
                </div>
                
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img src={appScreenshot} alt="Early app screenshot illustrating key features" className="w-48 h-auto md:w-72 rounded-xl shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
};

export default ThankYou;
