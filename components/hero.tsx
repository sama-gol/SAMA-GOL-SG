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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070707]"
    >
      {/* Matte texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cinematic lighting */}
      <div className="absolute inset-0">
        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent" />

        {/* Main glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-0 top-1/3 w-[550px] h-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(193,43,43,0.45) 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute left-0 bottom-1/4 w-[450px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,58,58,0.25) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#070707] to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 text-center"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-4">
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#c12b2b]" />

            <span
              className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-[#d6d6d0]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              PREMIUM STREETWEAR
            </span>

            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#c12b2b]" />
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="leading-[0.95] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <span
            className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#d63a3a]"
            style={{
              textShadow: "0 0 30px rgba(214,58,58,0.18)",
            }}
          >
            CREATION
          </span>

          <span
            className="block text-[clamp(2.5rem,10vw,7rem)] font-light text-[#f5f5f0] mt-1"
            style={{
              textShadow: "0 0 22px rgba(255,255,255,0.08)",
            }}
          >
            WITHOUT
          </span>

          <span
            className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#d63a3a] mt-1"
            style={{
              textShadow: "0 0 30px rgba(214,58,58,0.18)",
            }}
          >
            LIMITATION
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-10 md:mt-14 max-w-md text-sm md:text-base font-light leading-[1.8] text-[#d6d6d0] tracking-wide"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Where cinematic aesthetics meet fearless fashion.
          Crafted for those who refuse to blend in.
        </motion.p>
      </motion.div>
    </section>
  );
}
