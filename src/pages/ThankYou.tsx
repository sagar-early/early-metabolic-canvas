import React from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ThankYou: React.FC = () => {
  const query = useQuery();
  const name = query.get("name") || "Friend";

  const APP_STORE_LINK = "https://apps.apple.com/us/app/early-fit/id6748427718";
  const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.early.fit";

  const handleBannerClick = () => {
    const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera;
    const isAndroid = /android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/i.test(ua);
    if (isAndroid) {
      window.open(PLAY_STORE_LINK, "_blank");
    } else if (isIOS) {
      window.open(APP_STORE_LINK, "_blank");
    }
  };

  React.useEffect(() => {
    document.title = `Thank you, ${name}! | Early`;
    const meta = document.querySelector('meta[name="description"]');
    const content = `Thank you ${name}. Access your report and consult your doctor via the Early app.`;
    if (meta) {
      (meta as HTMLMetaElement).setAttribute("content", content);
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
      <main className="min-h-screen text-foreground bg-white">
        <section className="container py-8 md:py-12">
          <div className="max-w-4xl mx-auto rounded-2xl p-6 md:p-10 shadow-lg bg-white">
            {/* Heading */}
            <div className="flex flex-col items-center text-center gap-4 md:gap-6">
              <h1 className="font-satoshi text-3xl md:text-4xl font-semibold" style={{ color: '#434a35' }}>Thank you, {name}!</h1>
            </div>

            {/* Coach card with large sparrow: mobile above, desktop left */}
            <div className="mt-6 md:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 md:gap-6 items-center">
                <img
                  src="/lovable-uploads/0f0b20c3-4818-44d2-86b9-1b72891bc98f.png"
                  alt="Early sparrow mascot"
                  className="mx-auto md:mx-0 w-40 h-40 md:w-56 md:h-56 object-contain"
                  loading="lazy"
                />
                <div className="rounded-2xl p-4 md:p-6 shadow-md text-left w-full md:w-auto md:min-w-[400px]" style={{ backgroundColor: '#dbdfd2' }}>
                  <h3 className="font-satoshi text-2xl mb-2" style={{ color: '#434a35' }}>Our coaches are on it!</h3>
                  <p className="font-satoshi" style={{ color: '#000000' }}>
                    Hello, {name}! I'm one of the senior nutritionists at Early. I will personally reach out to you on WhatsApp within the next 4 hours to schedule your at-home test and consultation.
                  </p>
                </div>
              </div>
            </div>

            {/* App banner */}
            <div className="mt-8 md:mt-10">
              <article className="rounded-2xl bg-neutral-cream p-0 shadow-md overflow-hidden w-full">
                <button type="button" onClick={handleBannerClick} className="block w-full text-left" aria-label="Open app store based on your device">
                  <picture>
                    <source media="(min-width: 768px)" srcSet="/lovable-uploads/aaeac157-ef38-4890-bf5b-85c0d26db48f.png" />
                    <img
                      src="/lovable-uploads/4041b62a-1541-4c70-aae9-0ed9ed3ce365.png"
                      alt="All your reports and doctor consults on the Early app"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </picture>
                </button>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
