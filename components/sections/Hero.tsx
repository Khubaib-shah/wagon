"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bike, ShoppingBag, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [tab, setTab] = useState<"delivery" | "pickup">("delivery");

  return (
    <section
      style={{ background: "linear-gradient(110deg, #FFD100 0%, #FFB300 40%, #FFA000 100%)" }}
      className="relative pt-14 pb-0 overflow-hidden"
    >
      {/* Decorative circles - subtler and further out */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none"
        style={{ transform: "translate(20%, -20%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none"
        style={{ transform: "translate(-10%, 10%)" }}
      />

      <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* ── LEFT COLUMN ── */}
          <div className="w-full flex flex-col gap-5 pb-8 pt-6 lg:pt-10">
            <motion.div
            className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight lg:leading-[1.15]">
                Are you starving?
              </h1>
              <p className="mt-3 text-base text-white/85 max-w-md font-normal">
                Within a few clicks, find meals that are accessible near you
              </p>
            </motion.div>

            {/* Compact white search card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-2xl"
            >
              {/* Delivery / Pickup tabs */}
              <div className="flex gap-2 mb-3">
                {[
                  { id: "delivery", label: "Delivery", Icon: Bike },
                  { id: "pickup",   label: "Pickup",   Icon: ShoppingBag },
                ].map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTab(id as "delivery" | "pickup")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      tab === id
                        ? "bg-orange-50 text-orange-500 border border-orange-200"
                        : "text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Input + button row */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-9 pr-3 text-gray-700 placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
                <button
                  className="flex items-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-xl whitespace-nowrap hover:opacity-90 active:scale-95 transition-all duration-200"
                  style={{ background: "#F17228" }}
                >
                  <Search className="w-4 h-4" />
                  Find Food
                </button>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: bowl image sits on baseline ── */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[500px] h-[280px] sm:h-[340px] lg:h-[420px]"
            >
              <Image
                src="/assets/images/banner/banner.png"
                alt="Delicious food bowl"
                fill
                className="object-contain object-bottom drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
