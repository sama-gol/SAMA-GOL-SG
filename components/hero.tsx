"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202]"
    >
      {/* Matte texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cinematic lighting effects */}
      <div className="absolute inset-0">
        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020202] to-transparent" />
        
        {/* Mahogany accent glow - right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, #3b1813 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        
        {/* Subtle left glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, #522019 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#020202] to-transparent" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 text-center">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-4">
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#3b1813]" />
            <span 
              className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-[#6b6b65]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Premium Streetwear
            </span>
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#3b1813]" />
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="leading-[0.95] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#5a0c0c]">
            CREATION
          </span>

          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-light text-[#b6b6b5]">
            WITHOUT
          </span>

          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#5a0c0c]">
            LIMITATION
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-10 md:mt-14 max-w-md text-sm md:text-base font-light leading-[1.8] text-[#6b6b65] tracking-wide"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Where cinematic aesthetics meet fearless fashion. Crafted for those who refuse to blend in.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="#collection"
            className="group relative w-full sm:w-auto overflow-hidden bg-[#f5f0e8] text-[#020202] rounded-[28px] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(245,240,232,0.2)]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <span className="relative z-10">Shop Collection</span>
            <div className="absolute inset-0 bg-[#e8e3db] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </a>

          <a
            href="#lookbook"
            className="group relative w-full sm:w-auto overflow-hidden border border-[#1f1f1f] text-[#f5f5f0] rounded-[28px] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] transition-all duration-500 hover:border-[#6a2b21]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <span className="relative z-10">View Lookbook</span>
            <div className="absolute inset-0 bg-[#3b1813]/10 translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span 
              className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#6b6b65]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Scroll
            </span>

            <div className="w-[1px] h-8 bg-gradient-to-b from-[#6a2b21] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
