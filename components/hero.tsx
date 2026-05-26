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
            rgba(255,255,255,0.055) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255,255,255,0.055) 50%,
            rgba(255,255,255,0.055) 75%,
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

        backgroundSize: "42px 42px",
        backgroundPosition: "0 0, 21px 21px",
      }}
    >
      {/* Overlay cinematográfico suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.28))",
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
        {/* Pretítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-4">
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#5a0c0c]" />

            <span
              className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.4em] text-[#7a1111]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              PREMIUM STREETWEAR
            </span>

            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#5a0c0c]" />
          </span>
        </motion.div>

        {/* Título principal */}
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
          <
