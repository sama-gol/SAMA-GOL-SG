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
        backgroundImage: `
          linear-gradient(
            45deg,
            rgba(255,255,255,0.015) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.015) 50%,
            rgba(255,255,255,0.015) 75%,
            transparent 75%,
            transparent
          )
        `,
        backgroundSize: "24px 24px",
      }}
    >
      {/* Premium texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(122,17,17,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

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
