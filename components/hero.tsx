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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#050505",

        backgroundImage: `
          linear-gradient(
            45deg,
            rgba(255,255,255,0.04) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.04) 50%,
            rgba(255,255,255,0.04) 75%,
            transparent 75%,
            transparent
          ),

          linear-gradient(
            -45deg,
            rgba(255,255,255,0.03) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.03) 50%,
            rgba(255,255,255,0.03) 75%,
            transparent 75%,
            transparent
          )
        `,

        backgroundSize: "80px 80px",
        backgroundPosition: "0 0, 40px 40px",
      }}
    >
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
        }}
      />

      {/* Gradientes superior/inferior */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020202] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#020202] to-transparent" />
      </div>

      {/* Contenido */}
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
              className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-[#7a1111]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ROPA URBANA DE PRIMERA CALIDAD
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
          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#7a1111]">
            CREACIÓN
          </span>

          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-light text-[#8a1a1a] mt-1">
            SIN
          </span>

          <span className="block text-[clamp(2.5rem,10vw,7rem)] font-semibold text-[#7a1111] mt-1">
            LIMITACIÓN
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-10 md:mt-14 max-w-md text-sm md:text-base font-light leading-[1.8] text-[#8a1a1a] tracking-wide"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Donde la estética cinematográfica se encuentra con la moda más audaz.
          Diseñada para quienes se niegan a pasar desapercibidos.
        </motion.p>
      </motion.div>
    </section>
  );
}
