"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AppInstall = () => (
  <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFEF9 0%, #FFF5CC 100%)" }}>
    {/* Decorative background circles */}
    <div className="absolute top-[-20%] right-[-10%] w-160 h-160 rounded-full bg-yellow-200/20 blur-[8rem] pointer-events-none" />
    <div className="absolute bottom-[-20%] left-[-10%] w-120 h-120 rounded-full bg-orange-200/20 blur-[6rem] pointer-events-none" />

    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Mockup on the Left with shadow */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] lg:h-[750px]"
        >
           <Image
             src="/assets/images/download/mockup.png"
             alt="FoodWagon App Mockup"
             fill
             className="object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.2)]"
             priority
             sizes="(max-width:1024px) 100vw, 50vw"
           />
        </motion.div>

        {/* Text Content + Store Buttons on the Right */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-10">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
           >
              <h2 className="text-6xl lg:text-8xl font-black leading-tight drop-shadow-xl" style={{ color: "#FFB800" }}>
                 Install the app
              </h2>
              <p className="text-xl lg:text-2xl font-bold text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-4">
                 It&apos;s never been easier to order food. Find the finest discounts and get lost in a world of delectable flavours.
              </p>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
           >
              {/* Premium Black App Store Badge */}
              <button 
                className="group flex items-center gap-4 bg-[#231F20] text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 min-w-[220px] active:scale-95 border border-white/5"
              >
                 <div className="relative w-10 h-10">
                    <Image src="/assets/images/icons/Icon.png" alt="App Store" fill className="object-contain" />
                 </div>
                 <div className="flex flex-col text-left leading-none">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1">Available on the</span>
                    <span className="text-2xl font-black">App Store</span>
                 </div>
              </button>

              {/* Premium Black Google Play Badge */}
              <button 
                className="group flex items-center gap-4 bg-[#231F20] text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 min-w-[220px] active:scale-95 border border-white/5"
              >
                 <div className="relative w-10 h-10">
                    <Image src="/assets/images/icons/Icon (1).png" alt="Google Play" fill className="object-contain" />
                 </div>
                 <div className="flex flex-col text-left leading-none">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1">Get it on</span>
                    <span className="text-2xl font-black">Google Play</span>
                 </div>
              </button>
           </motion.div>
        </div>
      </div>
    </div>
  </section>
);
