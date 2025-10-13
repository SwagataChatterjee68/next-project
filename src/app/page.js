"use client";
import Link from "next/link";
import { useState } from "react";
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

          <div className="hero-banner">
            <div className="hero-text">
              <div className="flex justify-items-center items-center gap-3">
                <img
                  src="/iphone logo.png"
                  alt="iPhone"
                  className="hero-logo"
                />
                <p className="hero-subtitle">iPhone 16 Series</p>
              </div>

              <h2 className="hero-heading">Up to 10% off Voucher</h2>
              <button className="hero-btn">Shop Now →</button>
            </div>
            <img
              src="/iphone.png"
              alt="iPhone"
              className="hero-image"
            />
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
