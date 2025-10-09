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
          <img src={images[current]} alt="hero" className="hero-img" />
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
