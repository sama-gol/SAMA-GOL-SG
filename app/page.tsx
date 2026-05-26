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
      className="relative min-h-screen overflow-hidden bg-[#020202]"
      style={{
        backgroundColor: "#020202",
        backgroundImage: `
          linear-gradient(45deg,
            rgba(255,255,255,0.03) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.03) 50%,
            rgba(255,255,255,0.03) 75%,
            transparent 75%,
            transparent
          ),
          linear-gradient(-45deg,
            rgba(255,255,255,0.02) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.02) 50%,
            rgba(255,255,255,0.02) 75%,
            transparent 75%,
            transparent
          )
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="h-full w-full"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(122,17,17,0.12) 0%,
                rgba(0,0,0,0.0) 70%
              )
            `,
          }}
        />
      </div>

      {/* Matte grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
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
