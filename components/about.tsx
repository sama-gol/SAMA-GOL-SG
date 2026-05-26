"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "100+", label: "Pieces" },
  { value: "50K+", label: "Customers" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] py-24 md:py-36"
    >
      {/* Background split */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#0b0b0b] hidden lg:block" />

      {/* Cinematic glow */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.14]"
        style={{
          background:
            "radial-gradient(circle, rgba(193,43,43,0.22) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 0.6px, transparent 0.6px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <span
              className="mb-6 block text-[10px] font-medium uppercase tracking-[0.45em] text-[#c12b2b]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              OUR PHILOSOPHY
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-[#f5f5f0]">
                Redefining
              </span>

              <br />

              <span
                className="text-[#d63a3a]"
                style={{
                  textShadow: "0 0 25px rgba(214,58,58,0.14)",
                }}
              >
                Streetwear
              </span>

              <br />

              <span className="text-[#f5f5f0]">
                Luxury
              </span>
            </h2>

            <div className="mt-10 md:mt-12 space-y-6 max-w-xl">
              <p
                className="text-[15px] md:text-base font-light leading-[2] text-[#cfcfc9]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                SAMA/GOL emerges from the shadows where high fashion meets
                street culture. We craft garments that speak to the fearless
                — those who refuse to conform to conventional aesthetics.
              </p>

              <p
                className="text-[15px] md:text-base font-light leading-[2] text-[#9f9f98]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Each piece is meticulously designed with premium materials,
                featuring our signature dark palette and architectural
                silhouettes that define the modern streetwear connoisseur.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 md:mt-16 flex flex-wrap gap-10 md:gap-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <span
                    className="block text-4xl md:text-5xl font-semibold text-[#f5f5f0]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {stat.value}
                  </span>

                  <span
                    className="mt-2 block text-[10px] font-medium uppercase tracking-[0.3em] text-[#c12b2b]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#1a1a1a]"
              style={{
                background:
                  "linear-gradient(180deg, #101010 0%, #080808 100%)",
                boxShadow:
                  "0 40px 100px -30px rgba(0,0,0,0.95)",
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(214,58,58,0.12) 0%, transparent 70%)",
                }}
              />

              {/* Texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.3) 0.6px, transparent 0.6px)",
                  backgroundSize: "8px 8px",
                }}
              />

              {/* Brand mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#d63a3a]"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    textShadow: "0 0 35px rgba(214,58,58,0.16)",
                  }}
                >
                  S/G
                </span>
              </div>

              {/* Decorative accents */}
              <div className="absolute left-8 top-8 h-[2px] w-20 bg-gradient-to-r from-[#d63a3a] to-transparent rounded-full" />

              <div className="absolute bottom-8 right-8 h-[2px] w-20 bg-gradient-to-l from-[#d63a3a] to-transparent rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
