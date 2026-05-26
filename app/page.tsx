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
            rgba(255,255,255,0.045) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.045) 50%,
            rgba(255,255,255,0.045) 75%,
            transparent 75%,
            transparent
          ),

          linear-gradient(
            -45deg,
            rgba(255,255,255,0.035) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.035) 50%,
            rgba(255,255,255,0.035) 75%,
            transparent 75%,
            transparent
          )
        `,

        backgroundSize: "80px 80px",
        backgroundPosition: "0 0, 40px 40px",
      }}
    >
      {/* Oscurece y unifica */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.45))",
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
