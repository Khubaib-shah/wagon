"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo pulse */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="relative h-16 w-64"
            >
              <Image
                src="/assets/images/logo/Logo.png"
                alt="FoodWagon"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Bouncing dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: i % 2 === 0 ? "#F17228" : "#FFB800" }}
                />
              ))}
            </div>

            <p className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Preparing your meal...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
