"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#" },
    { name: "Bestsellers", href: "#" },
    { name: "Outerwear", href: "#" },
    { name: "Tops", href: "#" },
    { name: "Bottoms", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Size Guide", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Stockists", href: "#" },
  ],
};

const paymentMethods = [
  { name: "Visa", icon: "VISA" },
  { name: "Mastercard", icon: "MC" },
  { name: "Amex", icon: "AMEX" },
  { name: "Apple Pay", icon: "PAY" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0a0a0a] border-t border-[#1f1f1f]"
    >
      {/* Newsletter Section */}
      <div className="border-b border-[#1f1f1f]/60">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h3
                className="text-2xl md:text-3xl font-semibold tracking-tight text-[#c12b2b]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  textShadow: "0 0 22px rgba(193,43,43,0.12)",
                }}
              >
                Join the Inner Circle
              </h3>

              <p
                className="mt-2 text-sm font-light text-[#d6d6d0]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Be first to know about new releases and exclusive offers.
              </p>
            </div>

            <form className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-[#2a2a2a] bg-[#111111] rounded-full px-5 py-3.5 text-sm font-light text-[#f5f5f0] placeholder:text-[#8a8a84] focus:border-[#c12b2b] focus:outline-none transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              />

              <button
                type="submit"
                className="bg-[#c12b2b] text-[#f5f5f0] rounded-full px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#d63a3a]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span
                className="text-xl font-semibold tracking-[0.35em] text-[#c12b2b]"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  textShadow: "0 0 18px rgba(193,43,43,0.12)",
                }}
              >
                SAMA/GOL
              </span>
            </Link>

            <p
              className="mt-6 max-w-xs text-sm font-light leading-[1.8] text-[#d6d6d0]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Ultra premium dark luxury streetwear. Where cinematic aesthetics
              meet fearless fashion.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2a2a2a] text-[#d6d6d0] transition-all duration-300 hover:border-[#c12b2b] hover:text-[#c12b2b]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2a2a2a] text-[#d6d6d0] transition-all duration-300 hover:border-[#c12b2b] hover:text-[#c12b2b]"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c12b2b]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {section}
              </h4>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-[#d6d6d0] transition-colors hover:text-[#ffffff]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1f1f1f]/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p
                className="text-[11px] font-light text-[#8a8a84]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                &copy; {new Date().getFullYear()} SAMA/GOL. All rights reserved.
              </p>

              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-[11px] font-light text-[#8a8a84] transition-colors hover:text-[#ffffff]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="text-[11px] font-light text-[#8a8a84] transition-colors hover:text-[#ffffff]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex items-center justify-center h-8 px-3 rounded bg-[#151515] border border-[#2a2a2a]"
                >
                  <span
                    className="text-[9px] font-semibold tracking-wider text-[#d6d6d0]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {method.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
