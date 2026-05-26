"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

const navLinks = [
  { name: "Shop", href: "#collection" },
  { name: "Collections", href: "#collections" },
  { name: "Lookbook", href: "#lookbook" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#020202]/90 backdrop-blur-xl border-b border-[#1f1f1f]/50"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 text-[#f5f5f0] md:hidden p-2 -ml-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>

            {/* Desktop Navigation - Left */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-[11px] font-medium uppercase tracking-[0.25em] text-[#a8a8a0] transition-colors duration-300 hover:text-[#7a1111]"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#7a1111] transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Logo */}
            <Link href="/" className="group relative z-50">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <span
                  className="text-lg md:text-xl font-semibold tracking-[0.35em] text-[#7a1111]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  SAMA/GOL
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-[11px] font-medium uppercase tracking-[0.25em] text-[#a8a8a0] transition-colors duration-300 hover:text-[#7a1111]"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#7a1111] transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button
                className="text-[#a8a8a0] transition-colors duration-300 hover:text-[#7a1111] hidden md:block"
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </button>

              <button
                className="relative text-[#a8a8a0] transition-colors duration-300 hover:text-[#7a1111]"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />

                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b1813] text-[9px] font-medium text-[#f5f5f0]">
                  0
                </span>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#020202]"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#7a1111]"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Contact */}
              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-light tracking-[0.3em] text-[#7a1111]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                CONTACT@SAMAGOL.COM
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
