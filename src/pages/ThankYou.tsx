import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
              <img src="/lovable-uploads/fcbe5fe7-d335-4cf1-9ff5-e55761276a82.png" alt="Early sparrow mascot" className="w-8 h-8 object-contain" />
              <h1 className="font-satoshi text-3xl md:text-4xl text-primary font-semibold">Thank you, {name}!</h1>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="rounded-2xl bg-neutral-cream p-4 md:p-6 shadow-md text-left">
              <h3 className="font-satoshi text-2xl text-primary mb-2">Our coaches are on it!</h3>
              <p className="font-satoshi text-primary-medium">
                Hello, {name}! I'm one of the senior nutritionists at Early. I will personally reach out to you on WhatsApp within the next 4 hours to schedule your at-home test and consultation.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-stretch">
              <article className="rounded-2xl bg-neutral-cream p-4 md:p-6 shadow-md overflow-hidden">
                <img
                  src={appScreenshot}
                  alt="Early app banner showcasing features and reports"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
              </article>
              <aside className="hidden md:flex flex-col justify-center gap-3 w-full max-w-xs">
                <Button asChild className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center">
                  <a
                    href="https://apps.apple.com/us/app/early-fit/id6748427718"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Download on the App Store"
                    className="flex items-center gap-2"
                  >
                    <Apple className="w-5 h-5" />
                    <span>Download on the App Store</span>
                  </a>
                </Button>
                <Button asChild className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Get it on Google Play"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Get it on Google Play</span>
                  </a>
                </Button>
              </aside>
            </div>
            <div className="md:hidden pt-4">
              <div className="grid grid-cols-2 gap-3">
                <Button asChild className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center">
                  <a
                    href="https://apps.apple.com/us/app/early-fit/id6748427718"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Download on the App Store"
                    className="flex items-center gap-2"
                  >
                    <Apple className="w-5 h-5" />
                    <span>App Store</span>
                  </a>
                </Button>
                <Button asChild className="w-full h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 justify-center">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Get it on Google Play"
                    className="flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Google Play</span>
                  </a>
                </Button>
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
