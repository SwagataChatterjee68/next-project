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

  const images = ["/header.png", "/header2.avif", "/images/img3.jpg"];


  return (
    <div className="homepage">

      <div className="wrapper">
        <section className="hero">
          <div className="categories">
            {categories.map((cat, i) => (
              <Link href="/" key={i}>
                {cat}
              </Link>
            ))}
          </div>
          <div className="hero-divider"></div>
          <div className="relative bg-black text-white rounded-md overflow-hidden flex items-center justify-between px-10 py-8  w-[892px] h-[344px] opacity-100 ">
            <div>
              <img
                src="/iphone logo.png"
                alt="iPhone"
                className="w-[40px] h-[49px] "
              />
              <p className="text-sm mb-2">iPhone 16 Series</p>
              <h2 className="font-semibold text-[48px] leading-[60px] tracking-[4%]">
                Up to 10% off Voucher
              </h2>
              <button className="mt-4 border-b border-white pb-1 text-sm hover:opacity-80">
                Shop Now →
              </button>
            </div>
            <img
              src="/iphone.png"
              alt="iPhone"
              className="w-[528px] h-[352px] top-[16px] left-[396px] rotate-0 opacity-100"
            />
          </div>
        </section>

        {/* Flash Sale */}
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
