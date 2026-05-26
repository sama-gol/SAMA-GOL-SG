import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { FeaturedCollections } from "@/components/featured-collections";
import { Lookbook } from "@/components/lookbook";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#050505",
        backgroundImage: `
          linear-gradient(
            45deg,
            rgba(255,255,255,0.035) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.035) 50%,
            rgba(255,255,255,0.035) 75%,
            transparent 75%,
            transparent
          ),
          linear-gradient(
            -45deg,
            rgba(255,255,255,0.025) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.025) 50%,
            rgba(255,255,255,0.025) 75%,
            transparent 75%,
            transparent
          )
        `,
        backgroundSize: "52px 52px",
        backgroundPosition: "0 0, 26px 26px",
      }}
    >
      {/* Matte black overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(0,0,0,0.38))",
        }}
      />

      {/* Fine texture grain */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
        }}
      />

      <Navbar />
      <Hero />
      <FeaturedProducts />
      <FeaturedCollections />
      <Lookbook />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
