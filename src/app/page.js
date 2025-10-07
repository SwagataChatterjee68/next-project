"use client";
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import FlashSale from "@/components/flashSale/FlashSale";
import Category from "@/components/category/Category";
import BestSeller from "@/components/bestSeller/BestSeller";
import Image from "next/image";
import { RiCustomerServiceLine } from "react-icons/ri";
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
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const images = ["/header.png", "/header2.avif", "/images/img3.jpg"];
  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 4,
      reviews: 88,
      img: "saleproduct1.png",
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      img: "saleproduct2.png",
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      img: "/saleproduct3.png",
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 5,
      reviews: 99,
      img: "/saleproduct4.png",
    },
  ];

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
