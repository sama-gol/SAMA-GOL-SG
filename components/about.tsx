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
      className="relative overflow-hidden bg-[#050505] py-24 md:py-36"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#080808] hidden lg:block" />

      {/* Mahogany glow */}
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, #2a0808 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <span
              className="mb-6 block text-[10px] font-medium uppercase tracking-[0.4em] text-[#5a0c0c]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Philosophy
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#5a0c0c]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Redefining
              <br />
              Streetwear
              <br />
              <span className="text-[#7a1111]">
                Luxury
              </span>
            </h2>

            <div className="mt-8 md:mt-10 space-y-5 max-w-md">
              <p
                className="text-sm font-light leading-[1.9] text-[#7a1111]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                SAMA/GOL emerges from the shadows where high fashion meets
                street culture. We craft garments that speak to the fearless
                — those who refuse to conform to conventional aesthetics.
              </p>

              <p
                className="text-sm font-light leading-[1.9] text-[#7a1111]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Each piece is meticulously designed with premium materials,
                featuring our signature dark palette and architectural
                silhouettes that define the modern streetwear connoisseur.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 md:mt-16 flex flex-wrap gap-10 md:gap-14">
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
                    className="block text-3xl md:text-4xl font-semibold text-[#5a0c0c]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {stat.value}
                  </span>

                  <span
                    className="mt-1 block text-[9px] font-medium uppercase tracking-[0.25em] text-[#7a1111]"
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
              className="relative aspect-[4/5] bg-[#0a0a0a] rounded-[28px] flex items-center justify-center overflow-hidden border border-[#111111]"
              style={{
                boxShadow:
                  "0 25px 60px -20px rgba(0,0,0,0.85)",
              }}
            >
              {/* Inner texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
                  backgroundSize: "6px 6px",
                }}
              />

              {/* Brand mark */}
              <span
                className="relative z-10 text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#1a0707]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                S/G
              </span>

              {/* Decorative accents */}
              <div className="absolute -left-3 top-10 h-20 w-[2px] bg-gradient-to-b from-[#5a0c0c] to-transparent rounded-full" />

              <div className="absolute -bottom-3 right-10 h-[2px] w-20 bg-gradient-to-r from-[#5a0c0c] to-transparent rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
