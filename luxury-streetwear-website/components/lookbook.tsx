"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const lookbookImages = [
  { id: 1, src: "/lookbook/look-1.jpg", title: "Midnight Series" },
  { id: 2, src: "/lookbook/look-2.jpg", title: "Urban Shadows" },
  { id: 3, src: "/lookbook/look-3.jpg", title: "Void Collection" },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-[#020202] py-24 md:py-36">
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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
            className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-[#6a2b21]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Editorial
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#f5f5f0]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Lookbook
          </h2>
          <p 
            className="mx-auto mt-5 max-w-md text-sm font-light leading-[1.8] text-[#6b6b65]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Explore our latest visual narrative. Each piece tells a story of darkness meeting elegance.
          </p>
        </motion.div>

        {/* Lookbook Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {lookbookImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative cursor-pointer overflow-hidden rounded-[28px] ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 10px 20px -10px rgba(59, 24, 19, 0.1)",
              }}
            >
              <div className={`relative ${index === 0 ? "aspect-[4/5] md:aspect-square" : "aspect-[3/4]"}`}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-[#020202]/30 to-transparent" />
                <div className="absolute inset-0 bg-[#3b1813]/0 transition-all duration-500 group-hover:bg-[#3b1813]/15" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span 
                    className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#6b6b65]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    0{image.id}
                  </span>
                  <h3 
                    className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-[#f5f5f0] transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {image.title}
                  </h3>
                </div>

                {/* Hover explore button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span 
                    className="border border-[#f5f5f0]/30 bg-[#020202]/50 backdrop-blur-sm px-6 py-3 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f5f0]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
