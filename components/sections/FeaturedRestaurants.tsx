"use client";

import React from "react";
import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const restaurants = [
  { name: "Foodworld",        isOpen: false, stars: 3, image: "/assets/images/menu/Image-4.png",   logo: "/assets/images/brands/Image.png"   },
  { name: "Pizzahub",         isOpen: false, stars: 4, image: "/assets/images/deals/right-1.png",  logo: "/assets/images/brands/Image-2.png" },
  { name: "Donuts Hut",       isOpen: true,  stars: 3, image: "/assets/images/menu/Image.png",     logo: "/assets/images/brands/Image-3.png" },
  { name: "Spice Garden",     isOpen: true,  stars: 4, image: "/assets/images/deals/left.png",    logo: "/assets/images/brands/Image-4.png" },
  { name: "Ruby Tuesday",     isOpen: true,  stars: 4, image: "/assets/images/menu/Image-1.png",   logo: "/assets/images/brands/Image.png"   },
  { name: "Khat Fried Chkn",  isOpen: true,  stars: 5, image: "/assets/images/deals/Right.png",    logo: "/assets/images/brands/Image-2.png" },
  { name: "Red Cook",         isOpen: true,  stars: 4, image: "/assets/images/menu/Image-3.png",   logo: "/assets/images/brands/Image-3.png" },
  { name: "Taco Bell",        isOpen: true,  stars: 3, image: "/assets/images/menu/Image-2.png",   logo: "/assets/images/brands/Image-4.png" },
];

export const FeaturedRestaurants = () => (
  <section className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      {/* Centered Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 lg:mb-24"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 drop-shadow-sm">
          Featured Restaurants
        </h2>
      </motion.div>

      {/* 2x4 Grid on Desktop, 1x8 on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {restaurants.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group cursor-pointer flex flex-col gap-4"
          >
            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[1.1] shadow-xl group-hover:shadow-2xl transition-all duration-500 scale-100 group-hover:scale-[1.03]">
              <Image
                src={r.image}
                alt={r.name}
                fill
                className="object-cover group-hover:rotate-1 transition-transform duration-700"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 45vw, 22vw"
              />
              {/* Floating Discount Tag */}
              <div
                 className="absolute top-0 left-0 text-white text-sm font-black px-5 py-2.5 rounded-br-3xl shadow-lg"
                 style={{ background: "#FFB800" }}
              >
                20% Off
              </div>
              {/* Floating Status Badge */}
              <div className="absolute top-4 right-4">
                 <span
                   className="px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-md"
                   style={{
                     background: r.isOpen ? "#E8F5E9" : "#FFF3E0",
                     color: r.isOpen ? "#4CAF50" : "#F17228",
                   }}
                 >
                   {r.isOpen ? "it's open" : "it's close"}
                 </span>
              </div>
            </div>

            {/* Restaurant Branding Row */}
            <div className="flex items-center gap-4 px-2">
              {/* Brand Logo Circle */}
              <div className="relative w-16 h-16 rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Image src={r.logo} alt={r.name} fill className="object-contain p-2" sizes="64px" />
              </div>
              
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-xl font-extrabold text-gray-800 truncate group-hover:text-primary transition-colors leading-none">
                  {r.name}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-start font-black text-lg">{r.stars}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered Large Action Button */}
      <div className="flex justify-center mt-20 lg:mt-28">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 text-white font-extrabold px-12 py-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(241,114,40,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(241,114,40,0.5)] transition-all duration-300 text-xl"
          style={{ background: "linear-gradient(135deg, #F17228, #d65f1f)" }}
        >
          View All Restaurants <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  </section>
);
