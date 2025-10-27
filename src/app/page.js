"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaFemale,
  FaTshirt,
  FaMobileAlt,
  FaHome,
  FaPills,
  FaFutbol,
  FaBabyCarriage,
  FaShoppingCart,
  FaSpa,
} from "react-icons/fa";

import FlashSale from "@/components/flashSale/FlashSale";
import Category from "@/components/category/Category";
import BestSeller from "@/components/bestSeller/BestSeller";
import MusicBanner from "@/components/musicBanner/MusicBanner";
import Products from "@/components/products/Products";
import NewArrival from "@/components/newArrival/newArrival";
import InfoSection from "@/components/infoSection/Info";

export default function Home() {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const categoryIcons = {
    "Woman’s Fashion": <FaFemale className="w-6 h-6 md:w-7 md:h-7" />,
    "Men’s Fashion": <FaTshirt className="w-6 h-6 md:w-7 md:h-7" />,
    "Electronics": <FaMobileAlt className="w-6 h-6 md:w-7 md:h-7" />,
    "Home & Lifestyle": <FaHome className="w-6 h-6 md:w-7 md:h-7" />,
    "Medicine": <FaPills className="w-6 h-6 md:w-7 md:h-7" />,
    "Sports & Outdoor": <FaFutbol className="w-6 h-6 md:w-7 md:h-7" />,
    "Baby's & Toys": <FaBabyCarriage className="w-6 h-6 md:w-7 md:h-7" />,
    "Groceries & Pets": <FaShoppingCart className="w-6 h-6 md:w-7 md:h-7" />,
    "Health & Beauty": <FaSpa className="w-6 h-6 md:w-7 md:h-7" />,
  };

  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      logo: "/iphone logo.png",
      subtitle: "iPhone 16 Series",
      heading: "Up to 10% off Voucher",
      image: "/iphone.png",
      bg: "bg-black",
    },
    {
      id: 2,
      logo: "/iphone logo.png",
      subtitle: "iPhone 16 Series",
      heading: "Up to 10% off Voucher",
      image: "/iphone.png",
      bg: "bg-blue-800",
    },
    {
      id: 3,
      logo: "/iphone logo.png",
      subtitle: "iPhone 16 Series",
      heading: "Up to 10% off Voucher",
      image: "/iphone.png",
      bg: "bg-gray-900",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="homepage">
      <div className="wrapper">
        {/* --- Hero Section --- */}
        <section className="hero">
          {/* --- Categories --- */}
          <div className="categories font-poppins">
            {categories.map((cat, i) => (
              <Link
                href={`/category/${cat
                  .toLowerCase()
                  .replace(/[’']/g, "")
                  .replace(/\s+&\s+/g, "-")
                  .replace(/\s+/g, "-")}`}
                key={i}
                className="lg:justify-start flex flex-col justify-center items-center lg:items-start lg:pt-0 pt-10 lg:text-left hover:text-[#FFA500] transition-colors duration-200"
              >
                {/* Icons only visible on mobile and tablet */}
                <div className="lg:hidden flex items-center justify-center text-[#FFA500] w-12  h-12 md:w-14 md:h-14 bg-gray-100 rounded-full mb-2">
                  {categoryIcons[cat]}
                </div>
                <span className="text-xs sm:text-sm md:text-base font-small">
                  {cat}
                </span>
              </Link>
            ))}
          </div>

          <div className="hero-divider" />

          {/* --- Slider --- */}
          <div className="relative w-full overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute lg:top-18 top-10 left-0 w-full transition-all duration-700 ease-in-out ${index === current
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                  }`}
              >
                <div
                  className={`hero-banner ${slide.bg} flex flex-col md:flex-row`}
                >
                  <div className="hero-text">
                    <div className="flex items-center gap-3">
                      <img
                        src={slide.logo}
                        alt={slide.subtitle}
                        className="hero-logo"
                      />
                      <p className="hero-subtitle">{slide.subtitle}</p>
                    </div>
                    <h2 className="hero-heading">{slide.heading}</h2>
                    <button className="hero-btn">Shop Now →</button>
                  </div>
                  <img
                    src={slide.image}
                    alt={slide.subtitle}
                    className="hero-image"
                  />
                </div>
              </div>
            ))}

            {/* --- Dots --- */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer ${current === i ? "bg-[#FF4000]" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- Sections --- */}
        <FlashSale />
        <Category />
        <BestSeller />
        <MusicBanner />
        <Products />
        <NewArrival />
        <InfoSection />
      </div>
    </div>
  );
}
