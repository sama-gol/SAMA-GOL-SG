"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Midnight",
    subtitle: "Collection",
    description: "Where shadows become garments. Crafted in obsidian tones.",
    image: "/lookbook/look-1.jpg",
    items: "12 Pieces",
  },
  {
    id: 2,
    name: "Void",
    subtitle: "Series",
    description: "Embrace the darkness within. Premium matte finishes.",
    image: "/lookbook/look-2.jpg",
    items: "8 Pieces",
  },
];

export function FeaturedCollections() {
  return (
    <section id="collections" className="relative bg-[#0a0a0a] py-24 md:py-36 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3b1813 0%, transparent 60%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20 text-center"
        >
          <span 
            className="mb-4 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.4em] text-[#522019]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#3b1813]" />
            Featured
            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#3b1813]" />
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#f5f5f0]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Collections
          </h2>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative cursor-pointer"
            >
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-[28px] transition-all duration-700"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 12px 24px -8px rgba(59, 24, 19, 0.15)",
                }}
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Layered overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/30 via-transparent to-[#020202]/30" />
                
                {/* Mahogany tint on hover */}
                <div className="absolute inset-0 bg-[#3b1813]/0 transition-all duration-700 group-hover:bg-[#3b1813]/15" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-10">
                  {/* Top - Items count */}
                  <div className="flex justify-end">
                    <span 
                      className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#a8a8a0]/70"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {collection.items}
                    </span>
                  </div>

                  {/* Bottom - Collection info */}
                  <div className="space-y-5">
                    <div>
                      <h3 
                        className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#f5f5f0] transition-transform duration-500 group-hover:-translate-y-1"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {collection.name}
                      </h3>
                      <span 
                        className="block text-xl md:text-2xl font-light text-[#6b6b65] mt-1"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {collection.subtitle}
                      </span>
                    </div>
                    
                    <p 
                      className="max-w-xs text-sm font-light leading-[1.7] text-[#6b6b65]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {collection.description}
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      <span 
                        className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5f5f0] transition-colors group-hover:text-[#6a2b21]"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        Explore
                      </span>
                      <ArrowRight 
                        className="w-4 h-4 text-[#f5f5f0] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#6a2b21]" 
                        strokeWidth={1.5} 
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#3b1813] to-[#6a2b21] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
