"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTABanner = () => (
  <section
    className="py-24 lg:py-40 relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #FFB800 0%, #FF8A00 50%, #F17228 100%)" }}
  >
    {/* High-fidelity background image from reference */}
    <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
       <Image 
         src="/assets/images/processOrder.png" 
         alt="" 
         fill 
         className="object-cover" 
       />
    </div>

    {/* Content */}
    <div className="max-w-5xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8 relative z-10 flex flex-col items-center text-center gap-12">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-8xl font-black text-white leading-tight drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] mb-4"
      >
        Are you ready to order with the best deals?
      </motion.h2>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="group flex items-center gap-4 font-black text-orange-600 px-14 py-6 rounded-4xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] bg-white hover:bg-white/95 hover:scale-105 transition-all duration-500 active:scale-95 text-2xl lg:text-3xl"
      >
        Proceed to order 
        <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
      </motion.button>
    </div>

    {/* Decorative blur elements for premium feel */}
    <div className="absolute top-[-30%] right-[-10%] w-200 h-200 rounded-full bg-white/10 blur-[10rem] pointer-events-none" />
    <div className="absolute bottom-[-30%] left-[-10%] w-160 h-160 rounded-full bg-yellow-400/20 blur-[8rem] pointer-events-none" />
  </section>
);
