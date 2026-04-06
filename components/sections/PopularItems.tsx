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

  const NavBtn = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg hover:shadow-[0_10px_25px_rgba(255,184,0,0.45)] hover:scale-110 active:scale-95 transition-all outline-none"
      style={{ background: "#FFB800" }}
    >
      {children}
    </button>
  );

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered heading */}
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-10"
        >
          Popular items
        </motion.h2>

        {/* Row: left arrow | carousel | right arrow */}
        <div className="flex items-center gap-4">
          <NavBtn onClick={prev}>
            <ChevronLeft className="w-6 h-6" />
          </NavBtn>

          {/* Carousel */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex gap-5 pb-5">
              {items.map((item, i) => (
                <div key={i} className="shrink-0 w-[190px] sm:w-[210px] lg:w-[190px] xl:w-[210px]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden group flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="210px"
                      />
                    </div>

                    {/* Card body */}
                    <div className="px-4 pt-3 pb-4 flex flex-col gap-1">
                      <h3 className="font-bold text-gray-800 text-[15px] leading-snug">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-1 text-orange-500 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {item.location}
                      </div>
                      <p className="text-gray-900 font-bold text-base mt-1">${item.price}</p>
                      <button
                        className="mt-2 w-full text-white text-sm font-bold py-2.5 rounded-xl hover:brightness-110 transition-all active:scale-95"
                        style={{ background: "linear-gradient(135deg, #F17228, #d65f1f)" }}
                      >
                        Order Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <NavBtn onClick={next}>
            <ChevronRight className="w-6 h-6" />
          </NavBtn>
        </div>
      </div>
    </section>
  );
};
