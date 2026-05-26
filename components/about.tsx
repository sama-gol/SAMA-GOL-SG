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
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.16]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,45,0.28) 0%, transparent 70%)",
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
              className="mb-6 block text-[10px] font-medium uppercase tracking-[0.45em] text-[#ff4b4b]"
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
                className="text-[#ff4b4b]"
                style={{
                  textShadow: "0 0 30px rgba(255,75,75,0.22)",
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
                className="text-[15px] md:text-base font-light leading-[2] text-[#e2e2dc]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                SAMA/GOL emerges from the shadows where high fashion meets
                street culture. We craft garments that speak to the fearless
                — those who refuse to conform to conventional aesthetics.
              </p>

              <p
                className="text-[15px] md:text-base font-light leading-[2] text-[#b3b3ac]"
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
                    className="mt-2 block text-[10px] font-medium uppercase tracking-[0.3em] text-[#ff4b4b]"
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
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#1f1f1f]"
              style={{
                background:
                  "linear-gradient(180deg, #111111 0%, #080808 100%)",
                boxShadow:
                  "0 40px 120px -25px rgba(0,0,0,0.95)",
              }}
            >
              {/* Strong cinematic glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,60,60,0.16) 0%, transparent 72%)",
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

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* Extra glow behind logo */}
                <div
                  className="absolute w-[380px] h-[380px] rounded-full opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,40,40,0.30) 0%, transparent 70%)",
                    filter: "blur(90px)",
                  }}
                />

                <img
                  src="/sg-logo.png"
                  alt="SAMA/GOL Logo"
                  className="
                    relative z-10
                    w-[85%]
                    h-[85%]
                    object-contain
                    drop-shadow-[0_0_60px_rgba(255,50,50,0.30)]
                  "
                />
              </div>

              {/* Decorative accents */}
              <div className="absolute left-8 top-8 h-[2px] w-24 bg-gradient-to-r from-[#ff4b4b] to-transparent rounded-full" />

              <div className="absolute bottom-8 right-8 h-[2px] w-24 bg-gradient-to-l from-[#ff4b4b] to-transparent rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
