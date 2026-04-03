"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Select location",
    desc: "Choose the location where your food will be delivered to you.",
    image: "/assets/images/howdoeswork/howdoeswork.png",
  },
  {
    step: "02",
    title: "Choose order",
    desc: "Check over hundreds of menus to pick your favorite food.",
    image: "/assets/images/howdoeswork/menu 2.png",
  },
  {
    step: "03",
    title: "Pay advanced",
    desc: "It's quick, safe and simple. Select from several methods of payment.",
    image: "/assets/images/howdoeswork/Invoice.png",
  },
  {
    step: "04",
    title: "Enjoy meals",
    desc: "Food is made and delivered directly to your home.",
    image: "/assets/images/howdoeswork/Icons.png",
  },
];

export const HowItWorks = () => (
  <section className="py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFBEF 100%)" }}>
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      {/* Title with yellow drop shadow effect */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-extrabold text-center mb-20 lg:mb-28 drop-shadow-sm"
        style={{ color: "#FFB800" }}
      >
        How does it work
      </motion.h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            {/* Soft yellow circle with shadow */}
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[0_20px_50px_rgba(255,184,0,0.3)] transition-all duration-500 scale-100 group-hover:scale-105 mb-8"
              style={{ background: "rgba(255, 184, 0, 0.1)" }}
            >
              <div className="relative w-20 h-20">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-contain group-hover:rotate-6 transition-transform duration-500"
                  sizes="80px"
                />
              </div>
            </div>

            {/* Step Label */}
            <div className="flex flex-col gap-2">
              <span className="text-secondary-text font-extrabold text-lg lg:text-xl group-hover:text-primary transition-colors">
                {s.title}
              </span>
              <p className="text-gray-400 text-base leading-relaxed max-w-[200px]">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
