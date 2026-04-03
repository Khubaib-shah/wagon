"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  { title: "Daily Discounts", sub: "New deals every day",   icon: "/assets/images/download/discountIcon.png" },
  { title: "Live Tracking",   sub: "Track your food order", icon: "/assets/images/download/locationIcon.png" },
  { title: "Quick Delivery",  sub: "Under 30 minutes",     icon: "/assets/images/download/clockIcon.png"    },
];

export const PromoFeatures = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-4xl px-8 py-14 lg:px-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 border border-yellow-100 shadow-[0_40px_80px_-20px_rgba(255,184,0,0.15)]"
        style={{ background: "linear-gradient(135deg, #FFFEF9 0%, #FFFBF2 100%)" }}
      >
        {features.map((f, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-8 group flex-1 justify-center md:justify-start">
              {/* Stylized premium icon box */}
              <div 
                className="w-24 h-24 rounded-4xl bg-white shadow-[0_15px_35px_rgba(255,184,0,0.15)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/50"
              >
                <div className="relative w-12 h-12">
                  <Image src={f.icon} alt={f.title} fill className="object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-black text-gray-800 group-hover:text-primary transition-colors leading-tight">
                  {f.title}
                </p>
                <p className="text-base text-gray-400 font-bold uppercase tracking-wider mt-1 opacity-80">
                  {f.sub}
                </p>
              </div>
            </div>

            {/* Vertical divider for desktop */}
            {i < features.length - 1 && (
              <div className="hidden md:block w-px h-20 bg-yellow-400/20 shadow-sm" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </section>
);
