"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "1234567890";
  const message = "Hello! I'm interested in SAMA/GOL products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover label */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0d0d0d] text-[#f5f5f0] px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] border border-[#1f1f1f]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>
      
      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-shadow duration-300"
        style={{
          boxShadow: isHovered 
            ? "0 8px 30px rgba(37, 211, 102, 0.4)" 
            : "0 4px 20px rgba(37, 211, 102, 0.25)",
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </motion.a>
    </motion.div>
  );
}
