"use client";

import React from "react";
import Image from "next/image";
import { Star, ChevronRight, Tag, Clock } from "lucide-react";
import { motion } from "framer-motion";

const restaurants = [
  { name: "Foodworld",        isOpen: false, stars: 3, image: "/assets/images/menu/Image-4.png",   logo: "/assets/images/brands/Image.png",   discount: "20% Off" },
  { name: "Pizzahub",         isOpen: false, stars: 4, image: "/assets/images/deals/right-1.png",  logo: "/assets/images/brands/Image-2.png",  discount: "20% Off" },
  { name: "Donuts Hut",       isOpen: true,  stars: 3, image: "/assets/images/menu/Image.png",     logo: "/assets/images/brands/Image-3.png",  discount: "20% Off" },
  { name: "Spice Garden",     isOpen: true,  stars: 4, image: "/assets/images/deals/left.png",     logo: "/assets/images/brands/Image-4.png",  discount: "20% Off" },
  { name: "Ruby Tuesday",     isOpen: true,  stars: 4, image: "/assets/images/menu/Image-1.png",   logo: "/assets/images/brands/Image.png",    discount: "20% Off" },
  { name: "Khat Fried Chkn",  isOpen: true,  stars: 5, image: "/assets/images/deals/Right.png",   logo: "/assets/images/brands/Image-2.png",  discount: "20% Off" },
  { name: "Red Cook",         isOpen: true,  stars: 4, image: "/assets/images/menu/Image-3.png",   logo: "/assets/images/brands/Image-3.png",  discount: "20% Off" },
  { name: "Taco Bell",        isOpen: true,  stars: 3, image: "/assets/images/menu/Image-2.png",   logo: "/assets/images/brands/Image-4.png",  discount: "20% Off" },
];

export const FeaturedRestaurants = () => (
  <section className="py-10 bg-white">
    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      {/* Centered Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
          Featured Restaurants
        </h2>
      </motion.div>

      {/* 2×4 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group cursor-pointer flex flex-col gap-3"
          >
            {/* Image with overlaid badges */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-sm group-hover:shadow-md transition-shadow duration-400">
              <Image
                src={r.image}
                alt={r.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 45vw, 22vw"
              />

              {/* Discount pill — top left */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#FFB800] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow">
                <Tag className="w-3 h-3" />
                {r.discount}
              </div>

              {/* Open/Close pill — top right */}
              <div
                className="absolute top-3 right-3 flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-md shadow"
                style={{
                  background: r.isOpen ? "#E8F5E9" : "#FFF3E0",
                  color: r.isOpen ? "#2e7d32" : "#e65100",
                }}
              >
                <Clock className="w-3 h-3" />
                {r.isOpen ? "IT'S OPEN" : "IT'S CLOSE"}
              </div>
            </div>

            {/* Branding row below image */}
            <div className="flex items-center gap-3 px-1">
              {/* Logo box */}
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white shrink-0">
                <Image src={r.logo} alt={r.name} fill className="object-contain" sizes="48px" />
              </div>

              {/* Name + Stars */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="font-extrabold text-gray-800 text-base truncate leading-tight">
                  {r.name}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-gray-700 font-bold text-sm">{r.stars}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-14">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 text-white font-extrabold px-10 py-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(241,114,40,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(241,114,40,0.5)] transition-all duration-300 text-lg"
          style={{ background: "linear-gradient(135deg, #F17228, #d65f1f)" }}
        >
          View All Restaurants <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  </section>
);
