"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* --- Top Black Bar --- */}
      <div className="topbar">
        <p className="topbar-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="topbar-highlight">ShopNow</span>
        </p>
        <div className="topbar-lang">
          <span>English</span>
          <span>▼</span>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="mainNav">
        <div className="logo">LOGO</div>

        <ul className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/register" className="nav-link-active">Sign Up</Link>

          <div className="flex items-center gap-4 cursor-pointer">
            <form onSubmit={handleSearch} className="search-box flex items-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit">
                <FiSearch className="text-gray-700" />
              </button>
            </form>

            <Link href="/wishlist" className="icon-btn">
              <FaRegHeart />
              {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
            </Link>

            <Link href="/cart" className="icon-btn">
              <IoCartOutline className="cart-icon" />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>

            <Link href="/account" className="icon-btn">
              <FaRegUser />
            </Link>
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="mobile-menu">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Sign Up</p>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex items-center gap-4">
            <div className="mobile-search flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit">
                <FiSearch className="text-gray-700" />
              </button>
            </div>
            <FaRegHeart className="text-xl" />
            <Link href="/cart" className="icon-btn">
              <IoCartOutline className="cart-icon" />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
            <FaRegUser className="text-xl" />
          </form>
        </div>
      )}
    </header>
  );
}
