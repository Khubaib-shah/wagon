"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const items = [
  { name: "Vegetable Salad",  location: "Greys Star",   price: "3.88", image: "/assets/images/menu/Image.png"   },
  { name: "Pizzas",           location: "Pizza Hub",    price: "5.50", image: "/assets/images/deals/right-1.png" },
  { name: "Pesto Pasta",      location: "Sweet House",  price: "4.00", image: "/assets/images/menu/Image-2.png" },
  { name: "Club Sandwich",    location: "Burger King",  price: "3.50", image: "/assets/images/deals/Right.png"  },
  { name: "Asian Noodle",     location: "Italian Bit",  price: "6.20", image: "/assets/images/deals/left.png"   },
  { name: "Fresh Salad",      location: "Greys Star",   price: "4.15", image: "/assets/images/menu/Image-3.png" },
];

export const PopularItems = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-extrabold text-gray-800"
          >
            Popular items
          </motion.h2>
          <div className="flex gap-4">
            {[{ action: prev, Icon: ChevronLeft }, { action: next, Icon: ChevronRight }].map(
              ({ action, Icon }, i) => (
                <button
                  key={i}
                  onClick={action}
                  className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-xl hover:shadow-[0_10px_25px_rgba(255,184,0,0.4)] hover:scale-110 active:scale-95 transition-all outline-none"
                  style={{ background: "#FFB800" }}
                >
                  <Icon className="w-6 h-6" />
                </button>
              )
            )}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden no-scrollbar" ref={emblaRef}>
          <div className="flex gap-6 lg:gap-8 py-5">
            {items.map((item, i) => (
              <div key={i} className="shrink-0 w-[260px] lg:w-[300px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden group flex flex-col h-full border border-gray-50"
                >
                  <div className="relative h-56 lg:h-64 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="300px"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2 grow">
                    <h3 className="font-extrabold text-gray-800 text-lg lg:text-xl group-hover:text-primary transition-colors">
                       {item.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-orange-500 text-sm font-bold">
                      <MapPin className="w-4 h-4 shrink-0" />
                      {item.location}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-6">
                      <span className="text-2xl font-black text-gray-900">${item.price}</span>
                      <button
                        className="text-white text-sm font-extrabold px-6 py-3.5 rounded-2xl hover:brightness-110 shadow-lg hover:shadow-orange-200 transition-all active:scale-95"
                        style={{ background: "linear-gradient(135deg, #F17228, #d65f1f)" }}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
