"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bike, ShoppingBag, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [tab, setTab] = useState<"delivery" | "pickup">("delivery");

  return (
    <section
      style={{ background: "linear-gradient(135deg, #FFB800 0%, #FF8A00 55%, #F17228 100%)" }}
      className="relative pt-16 pb-0 overflow-hidden"
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
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-0">

          {/* ── LEFT COLUMN ── */}
          <div className="w-full lg:w-[50%] flex flex-col gap-8 pb-16 pt-12 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-tight lg:leading-[1.1] drop-shadow-lg">
                Are you starving?
              </h1>
              <p className="mt-4 text-lg lg:text-xl text-white/90 max-w-sm font-medium">
                Within a few clicks, find meals that are near you order, sit back, and enjoy.
              </p>
            </motion.div>

            {/* Premium white search card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white rounded-4xl shadow-2xl p-8 w-full max-w-2xl border border-white/20 backdrop-blur-sm"
              style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15)" }}
            >
              {/* Delivery / Pickup tabs */}
              <div className="flex gap-4 mb-8">
                {[
                  { id: "delivery", label: "Delivery", Icon: Bike },
                  { id: "pickup",   label: "Pickup",   Icon: ShoppingBag },
                ].map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTab(id as "delivery" | "pickup")}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-base font-bold transition-all duration-300 ${
                      tab === id
                        ? "bg-orange-100 text-orange-600 shadow-sm"
                        : "text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Input + button row */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-500 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="w-full bg-gray-50 border border-transparent rounded-2xl py-5 pl-12 pr-4 text-gray-800 placeholder-gray-400 text-base font-bold outline-none focus:bg-white focus:ring-4 focus:ring-orange-100 transition-all"
                  />
                </div>
                <button
                  className="flex items-center justify-center gap-2.5 text-white text-base font-extrabold px-8 py-5 rounded-2xl whitespace-nowrap shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                  style={{ background: "linear-gradient(135deg, #F17228, #d65f1f)" }}
                >
                  <Search className="w-5 h-5" />
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
              className="relative w-full max-w-[600px] h-[350px] sm:h-[450px] lg:h-[650px]"
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
