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
    <main className="relative min-h-screen bg-[#020202]">
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
