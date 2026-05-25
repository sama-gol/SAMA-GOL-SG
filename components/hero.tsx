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
      <div className="absolute inset-0 opacity-[0.03]" />

      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020202] to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #3b1813 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #522019 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#020202] to-transparent" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 text-center"
      >
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
          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#f5f5f0]">
            CREATION
          </span>

          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-light text-[#b6b6b5] mt-1">
            WITHOUT
          </span>

          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#f5f5f0] mt-1">
            LIMITATION
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-10 md:mt-14 max-w-md text-sm md:text-base font-light leading-[1.8] text-[#6b6b65] tracking-wide"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Where cinematic aesthetics meet fearless fashion.
          Crafted for those who refuse to blend in.
        </motion.p>
      </motion.div>
    </section>
  );
}
