import React from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import paymentSuccessTick from "@/assets/payment-success-tick.png";


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
      <main className="min-h-screen bg-neutral-light text-foreground">
        <section className="container py-8 md:py-12">
          <div className="max-w-4xl mx-auto rounded-2xl p-6 md:p-10 shadow-lg" style={{ backgroundColor: '#abb597' }}>
            {/* Payment Confirmation Row */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={paymentSuccessTick}
                alt="Payment Successful"
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <h1 className="font-satoshi text-2xl md:text-3xl font-semibold text-white mb-1">
                  Payment successful for Metabolic Diagnosis Test
                </h1>
                <p className="font-satoshi text-lg text-white/90">
                  Amount : 1799/-
                </p>
              </div>
            </div>

            {/* WhatsApp Message */}
            <div className="mb-6">
              <p className="font-satoshi text-white text-left leading-relaxed">
                Our team will reach out to you on WhatsApp shortly to schedule your at-home test and doctor consultation.
              </p>
            </div>

            {/* App Download Section */}
            <div className="mb-6">
              <p className="font-satoshi text-white text-left font-medium">
                Download the Earlyfit App to get started
              </p>
            </div>

            {/* Banner Image */}
            <div className="mb-6">
              <article className="rounded-2xl bg-neutral-cream p-0 shadow-md overflow-hidden">
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

            {/* App Store Buttons */}
            <div className="flex gap-3">
              <a
                href={APP_STORE_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
                className="flex-1"
              >
                <img
                  src="/lovable-uploads/43ec8795-ee06-4bac-a0a9-7720cfe1a690.png"
                  alt="Download on the App Store - Early"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </a>
              <a
                href={PLAY_STORE_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
                className="flex-1"
              >
                <img
                  src="/lovable-uploads/fa7b5a60-2294-4290-a825-fbd8a98cf83e.png"
                  alt="Get it on Google Play - Early"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
