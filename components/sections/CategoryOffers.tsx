"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const offers = [
  {
    discount: "15",
    title: "Club Sandwich",
    days: "6 Days Remaining",
    image: "/assets/images/deals/Right.png", // Correct sandwich image
  },
  {
    discount: "10",
    title: "Vegan Bowl",
    days: "6 Days Remaining",
    image: "/assets/images/menu/Image.png", // Correct salad bowl
  },
  {
    discount: "25",
    title: "Hot Pizza",
    days: "6 Days Remaining",
    image: "/assets/images/deals/right-1.png", // Pizza
  },
  {
    discount: "20",
    title: "Asian Noodle",
    days: "6 Days Remaining",
    image: "/assets/images/deals/left.png", // Noodles
  },
];

export const CategoryOffers = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer flex flex-col gap-4"
          >
            {/* Card image */}
            <div className="relative aspect-4/3 rounded-4xl overflow-hidden shadow-xl group-hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 45vw, 22vw"
              />
              {/* Discount sticker — yellow half-rounded tab on bottom-left */}
              <div
                className="absolute bottom-0 left-0 flex items-center rounded-tr-4xl px-5 py-4 shadow-lg"
                style={{ background: "#FFB800" }}
              >
                <div className="flex items-start gap-1 pb-1">
                   <span className="text-white font-extrabold text-5xl leading-none">
                     {offer.discount}
                   </span>
                   <div className="flex flex-col text-white leading-none mt-1">
                     <span className="font-extrabold text-2xl">%</span>
                     <span className="font-bold text-[11px] uppercase tracking-wider">Off</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Below card info */}
            <div className="flex flex-col gap-1.5 px-1">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                {offer.title}
              </h3>
              <div
                className="inline-flex self-start px-4 py-1.5 rounded-xl font-bold text-xs lg:text-sm shadow-sm"
                style={{ background: "rgba(241, 114, 40, 0.08)", color: "#F17228" }}
              >
                {offer.days}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
