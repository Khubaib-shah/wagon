"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const banners = [
  {
    tagline: "Best deals",
    heading: "Crispy Sandwiches",
    body: "Enjoy the large size of sandwiches. Complete your meal with the perfect crunch.",
    image: "/assets/images/deals/Right.png", // Corrected image (actual sandwich)
    flip: false,
  },
  {
    tagline: "Celebrate parties with",
    heading: "Fried Chicken",
    body: "Get the best fried chicken in town — crispy outside, juicy inside, always fresh.",
    image: "/assets/images/deals/left.png", // Changed to something meatier/different than soup
    flip: true,
  },
  {
    tagline: "Wanna eat hot & spicy",
    heading: "Pizza?",
    body: "Pair up with a friend and enjoy the piping-hot, crispy crust of our famous pizza.",
    image: "/assets/images/deals/right-1.png", // Corrected image (actual pizza)
    flip: false,
  },
];

export const PromotionalBanners = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8 flex flex-col gap-12 lg:gap-20">
      {banners.map((b, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: i * 0.15 }}
           className={`flex flex-col ${b.flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center overflow-hidden rounded-[4rem] bg-white shadow-[0_30px_70px_-15px_rgba(241,114,40,0.15)] group border border-gray-50`}
        >
           {/* Text Side */}
           <div className="w-full lg:w-3/5 p-10 lg:p-20 flex flex-col gap-8 order-2 lg:order-0 self-center">
              <div className="flex flex-col gap-2">
                 <p className="text-secondary-text font-black text-base lg:text-lg uppercase tracking-[0.2em]">{b.tagline}</p>
                 <h2 className="text-5xl lg:text-7xl font-black leading-tight drop-shadow-sm">
                    <span className="italic" style={{ color: "#F17228" }}>{b.heading}</span>
                 </h2>
              </div>
              <p className="text-xl font-bold text-gray-500 max-w-sm leading-relaxed">
                 {b.body}
              </p>
              <button
                className="group self-start flex items-center gap-4 text-white font-black px-12 py-5 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(241,114,40,0.4)] hover:scale-105 transition-all duration-300 active:scale-95 text-xl"
                style={{ background: "linear-gradient(135deg, #F17228, #d65f1f)" }}
              >
                Proceed to order 
                <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>

           {/* Image Side */}
           <div className="relative w-full lg:w-2/5 h-[350px] lg:h-[550px] order-1 lg:order-0 overflow-hidden">
              <Image
                src={b.image}
                alt={b.heading}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
           </div>
        </motion.div>
      ))}
    </div>
  </section>
);
