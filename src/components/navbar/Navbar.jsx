"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  const isActive = (href) => pathname === href ? "nav-link-active" : "nav-link";

  return (
    <header className="w-full fixed top-0 z-50 border-b border-gray-200">
      {/* Top Black Bar */}
      <div className="topbar">
        <div className="2xl:max-w-7xl md:max-w-6xl mx-auto text-xs sm:text-sm flex justify-center items-center relative py-2 ">
          <p className="topbar-text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="topbar-highlight">ShopNow</span>
          </p>
          <div className="topbar-lang">
            <span>English</span> <span>▼</span>
          </div>
        </div>

      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <nav className="mainNav">
          <div className="logo">LOGO</div>

          <ul className="nav-links">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/contact" className={isActive("/contact")}>Contact</Link>
            <Link href="/register" className={isActive("/register")}>Sign Up</Link>

            {/* Desktop Icons */}
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="search-box">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button type="submit"><FiSearch className="text-gray-700" /></button>
              </form>

              <Link href="/wishlist" className="icon-btn-nav">
                <FaRegHeart />
                {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
              </Link>

              <Link href="/cart" className="icon-btn-nav">
                <IoCartOutline className="cart-icon" />
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>

              <Link href="/account" className="icon-btn-nav">
                <FaRegUser />
              </Link>
            </div>
          </ul>

          {/* Mobile Hamburger */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
          <Link href="/register" className={isActive("/register")}>Sign Up</Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mobile-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><FiSearch className="text-gray-700" /></button>
          </form>

          <div className="flex items-center gap-4 mt-2">
            <Link href="/wishlist" className="icon-btn-nav">
              <FaRegHeart />
              {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
            </Link>
            <Link href="/cart" className="icon-btn-nav">
              <IoCartOutline className="cart-icon" />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
            <Link href="/account" className="icon-btn-nav">
              <FaRegUser />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
