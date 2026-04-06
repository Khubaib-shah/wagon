"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, User, Menu, X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
      className={`fixed top-0 left-0 right-0 z-100 transition-all bg-white/95 backdrop-blur-md ${
        isScrolled ? "shadow-2xl" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl !mx-auto px-6 sm:px-10 lg:px-12 xl:px-8 flex items-center justify-between gap-8">
        
        {/* Logo with high-fidelity scaling */}
        <Link href="/" className="relative h-12 w-64 shrink-0 group transition-transform active:scale-95">
          <Image
            src="/assets/images/logo/Logo.png"
            alt="FoodWagon Logo"
            width={200}
            height={200}
            className="object-contain w-full h-full group-hover:brightness-110 transition-all"
            priority
          />
        </Link>

        {/* Deliver To - Centered/Middle hidden on small screens */}
        <div className="hidden lg:flex items-center gap-2 group cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-xl transition-all duration-300">
          <span className="text-gray-500 font-medium text-sm">Deliver to:</span>
          <div className="flex items-center gap-1.5">
             <MapPin className="w-4 h-4 text-yellow-500" />
             <span className="text-sm text-gray-500 font-normal">Current Location</span>
             <span className="font-bold text-gray-800">Mohammadpur Bus Stand, Dhaka</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-all px-3 py-2 hover:bg-gray-50 rounded-xl group">
            <Search className="w-4 h-4 text-gray-500" />
            <span>Search Food</span>
          </button>
          
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary transition-all px-4 py-2 rounded-xl border border-gray-200 hover:border-primary hover:bg-orange-50 active:scale-95"
          >
            <User className="w-4 h-4" />
            Login
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="sm:hidden p-3 text-gray-700 hover:bg-gray-100 rounded-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* High-fidelity Mobile Drawer */}
      {menuOpen && (
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="sm:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 px-6 py-8 flex flex-col gap-6 shadow-2xl"
        >
           <button className="flex items-center justify-between text-xl font-black text-gray-700 group">
             <span className="flex items-center gap-3"><Search className="w-6 h-6 text-yellow-500" /> Search food</span>
             <ChevronRight className="w-6 h-6 text-gray-300" />
           </button>
           <div className="flex items-center gap-3 border-t border-gray-100 pt-6">
              <MapPin className="w-6 h-6 text-yellow-500" />
              <span className="text-gray-800 font-extrabold">Delivery Location</span>
           </div>
           <Link
             href="#"
             className="w-full text-center text-xl font-black text-yellow-start py-5 mt-4 rounded-3xl border-4 border-yellow-start hover:bg-yellow-50 active:scale-95 transition-all"
           >
             Login
           </Link>
        </motion.div>
      )}
    </nav>
  );
};
