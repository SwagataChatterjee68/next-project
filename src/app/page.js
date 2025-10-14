"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
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

  // Auto slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="homepage font-poppins">
      <div className="wrapper">
        {/* --- Hero Section --- */}
        <section className="hero">
          <div className="categories">
            {categories.map((cat, i) => (
              <Link href="/" key={i}>
                {cat}
              </Link>
            ))}
          </div>

          <div className="hero-divider" />
          {/* --- Slider --- */}
          <div className="relative w-full overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${index === current
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

            {/* --- Manual Controls --- */}
            <button
              onClick={() =>
                setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
              }
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full"
            >
              ❯
            </button>

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
