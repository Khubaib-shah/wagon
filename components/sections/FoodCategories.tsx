"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Pizza",       image: "/assets/images/deals/right-1.png" },
  { name: "Sandwich",    image: "/assets/images/deals/Right.png"   },
  { name: "Noodles",     image: "/assets/images/deals/left.png"    },
  { name: "Pasta",       image: "/assets/images/menu/Image-2.png"  },
  { name: "Salad",       image: "/assets/images/menu/Image-3.png"  },
  { name: "Meat Stew",   image: "/assets/images/menu/Image-1.png"  },
];

export const FoodCategories = () => (
  <section className="py-24 lg:py-32" style={{ background: "#FEFAF1" }}>
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      {/* Centered Header Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-16 lg:mb-24 gap-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-gray-800 drop-shadow-sm"
        >
          Search by Food
        </motion.h2>
        
        <div className="flex items-center gap-6">
          <button className="text-lg font-black text-yellow-start hover:text-yellow-end flex items-center gap-2 transition-all hover:translate-x-1">
            View All <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex gap-4">
            {[ChevronLeft, ChevronRight].map((Icon, i) => (
              <button
                key={i}
                className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-xl hover:shadow-yellow-200 hover:scale-110 active:scale-95 transition-all"
                style={{ background: "#FFB800" }}
              >
                <Icon className="w-7 h-7" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Categories row with hidden scrollbars */}
      <div className="flex items-start gap-12 lg:gap-16 overflow-x-auto pb-12 no-scrollbar justify-start lg:justify-between px-2">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 shrink-0 cursor-pointer group"
          >
            <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full border-8 border-white shadow-[0_20px_50px_rgba(255,184,0,0.15)] group-hover:border-yellow-start group-hover:shadow-[0_30px_60px_rgba(255,184,0,0.3)] transition-all duration-500 scale-100 group-hover:scale-110">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="rounded-full object-cover group-hover:rotate-6 transition-transform duration-700"
                sizes="(max-width:1024px) 160px, 192px"
              />
            </div>
            <span className="text-xl font-black text-gray-700 group-hover:text-primary transition-colors">
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
