"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Obsidian Hoodie",
    category: "Outerwear",
    price: "$285",
    image: "/products/hoodie.jpg",
  },
  {
    id: 2,
    name: "Phantom Cargo",
    category: "Bottoms",
    price: "$195",
    image: "/products/cargo.jpg",
  },
  {
    id: 3,
    name: "Shadow Tee",
    category: "Tops",
    price: "$125",
    image: "/products/tee.jpg",
  },
  {
    id: 4,
    name: "Void Jacket",
    category: "Outerwear",
    price: "$425",
    image: "/products/jacket.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section id="collection" className="relative bg-[#020202] py-24 md:py-36">
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span 
              className="mb-4 block text-[10px] font-medium uppercase tracking-[0.4em] text-[#6a2b21]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              New Arrivals
            </span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#f5f5f0]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Latest Collection
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6b6b65] transition-colors hover:text-[#f5f5f0]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            View All Products
            <span className="w-5 h-[1px] bg-[#6b6b65] transition-all duration-300 group-hover:w-8 group-hover:bg-[#6a2b21]" />
          </a>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-5 md:gap-6 grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              {/* Product Card */}
              <div 
                className="relative aspect-[3/4] overflow-hidden bg-[#0d0d0d] rounded-[28px] transition-all duration-700"
                style={{
                  boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 8px 16px -6px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Mahogany tint on hover */}
                <div className="absolute inset-0 bg-[#3b1813]/0 transition-all duration-500 group-hover:bg-[#3b1813]/10" />

                {/* Quick add button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <button 
                    className="w-full flex items-center justify-center gap-2 bg-[#f5f0e8] text-[#020202] rounded-[20px] py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#e8e3db]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                    Add to Bag
                  </button>
                </motion.div>

                {/* Category tag */}
                <div className="absolute top-5 left-5">
                  <span 
                    className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#a8a8a0]/80"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-5 px-1 space-y-1.5">
                <h3 
                  className="text-sm font-medium tracking-wide text-[#f5f5f0] transition-colors group-hover:text-[#f5f0e8]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-sm font-light text-[#6b6b65]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {product.price}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
