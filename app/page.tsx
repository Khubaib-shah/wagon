import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CategoryOffers } from "@/components/sections/CategoryOffers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PopularItems } from "@/components/sections/PopularItems";
import { FeaturedRestaurants } from "@/components/sections/FeaturedRestaurants";
import { FoodCategories } from "@/components/sections/FoodCategories";
import { AppInstall } from "@/components/sections/AppInstall";
import { PromotionalBanners } from "@/components/sections/PromotionalBanners";
import { CTABanner } from "@/components/sections/CTABanner";
import { Preloader } from "@/components/shared/Preloader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mandatory Preloader */}
      <Preloader />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with gradients and search */}
        <Hero />

        {/* Categories / Offers Section */}
        <CategoryOffers />

        {/* How It Works (4-step instructions) */}
        <HowItWorks />

        {/* Popular Items Carousel */}
        <PopularItems />

        {/* Restaurant Grid with star ratings */}
        <FeaturedRestaurants />

        {/* Multi-item horizontal categories */}
        <FoodCategories />

    
        {/* App install section with phone mockups */}
        <AppInstall />

        {/* Banner Grid (Sandwich, Chicken and Pizza) */}
        <PromotionalBanners />

        {/* Final CTA Banner */}
        <CTABanner />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
