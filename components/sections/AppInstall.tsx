"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  { title: "Daily Discounts", sub: "New deals every day",   icon: "/assets/images/download/discountIcon.png" },
  { title: "Live Tracking",   sub: "Track your food order", icon: "/assets/images/download/locationIcon.png" },
  { title: "Quick Delivery",  sub: "Under 30 minutes",     icon: "/assets/images/download/clockIcon.png"    },
];

export const AppInstall = () => (
  <section className="pt-20 relative overflow-hidden" style={{ backgroundColor: "#FEEFD0" }}>
      <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-4xl px-8 py-10 lg:px-12 lg:py-16 flex flex-col md:flex-row bg-white items-center justify-between gap-12 md:gap-8 border border-yellow-100 shadow-[0_40px_80px_-20px_rgba(255,184,0,0.15)]"
       
      >
        {features.map((f, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-8 group flex-1 justify-center md:justify-start">
              {/* Stylized premium icon box */}
              <div 
                className="size-28 flex items-center justify-center shrink-0 "
              >
                <div className="relative size-28">
                  <Image src={f.icon} alt={f.title} fill className="object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-black text-gray-800 group-hover:text-primary transition-colors leading-tight">
                  {f.title}
                </p>
               
              </div>
            </div>

            {/* Vertical divider for desktop */}
            {i < features.length - 1 && (
              <div className="hidden md:block w-px h-20  shadow-sm" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
    
    {/* Decorative background circles */}

    <div className="absolute top-[-20%] right-[-10%] w-160 h-160 rounded-full bg-yellow-200/20 blur-[8rem] pointer-events-none" />
    <div className="absolute bottom-[-20%] left-[-10%] w-120 h-120 rounded-full bg-orange-200/20 blur-[6rem] pointer-events-none" />

    <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8 relative z-10 mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-24">
        
        {/* Mockup on the Left with shadow */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="w-full lg:w-1/2 relative h-[487px]"
        >
           <Image
             src="/assets/images/download/mockup.png"
             alt="FoodWagon App Mockup"
             fill
             className="object-contain to-[110px] drop-shadow-[0_45px_45px_rgba(0,0,0,0.2)]"
             priority
             sizes="(max-width:1024px) 100vw, 1000vw"
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
              <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl" style={{ color: "#FFB800" }}>
                 Install the app
              </h2>
              <p className="text-lg lg:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-4">
                 It&apos;s never been easier to order food. Find the finest discounts and get lost in a world of delectable flavours.
              </p>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
           >
              {/* Google Play Badge */}
              <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:shadow-md hover:scale-105 transition-all duration-200 active:scale-95">
                 <div className="relative w-8 h-8 shrink-0">
                    <Image src="/assets/images/icons/Icon (1).png" alt="Google Play" fill className="object-contain" />
                 </div>
                 <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-0.5">GET IT ON</span>
                    <span className="text-base font-black text-gray-900">Google Play</span>
                 </div>
              </button>

              {/* App Store Badge */}
              <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:shadow-md hover:scale-105 transition-all duration-200 active:scale-95">
                 <div className="relative w-8 h-8 shrink-0">
                    <Image src="/assets/images/icons/Icon.png" alt="App Store" fill className="object-contain" />
                 </div>
                 <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Download on the</span>
                    <span className="text-base font-black text-gray-900">App Store</span>
                 </div>
              </button>
           </motion.div>
        </div>
      </div>
    </div>
  </section>
);
