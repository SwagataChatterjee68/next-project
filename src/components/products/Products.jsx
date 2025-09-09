"use client";
import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import "./products.css";

const Products = () => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const productList = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: 100,
      oldPrice: null,
      rating: 3,
      reviews: 35,
      img: "/dogfood.jpg",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: 360,
      oldPrice: null,
      rating: 5,
      reviews: 95,
      img: "/camera.png",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      oldPrice: null,
      rating: 5,
      reviews: 325,
      img: "/laptop.png",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: 500,
      oldPrice: null,
      rating: 4,
      reviews: 145,
      img: "/curology.png",
    },
    {
      id: 5,
      name: "Kids Toy Car",
      price: 100,
      oldPrice: null,
      rating: 3,
      reviews: 35,
      img: "/car.png",
    },
    {
      id: 6,
      name: "Football Shoes",
      price: 360,
      oldPrice: null,
      rating: 5,
      reviews: 95,
      img: "/shoes.png",
    },
    {
      id: 7,
      name: "Gaming Laptop",
      price: 700,
      oldPrice: null,
      rating: 5,
      reviews: 325,
      img: "/gaminglaptop.png",
    },
    {
      id: 8,
      name: "Gaming Controller",
      price: 500,
      oldPrice: null,
      rating: 4,
      reviews: 145,
      img: "/gamepad.png",
    },
  ];

  return (
    <section className="products-section">
      <div className="products-wrapper">
        {/* Header */}
        <div className="mb-4">
          <p className="products-subtitle">Our Products</p>
          <h2 className="products-title">Explore Our Products</h2>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {productList.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);

            return (
              <div key={item.id} className="product-card">
                {/* Wishlist / View Icons */}
                <div className="action-btn">
                  <button
                    onClick={() =>
                      isWishlisted
                        ? removeFromWishlist(item.id)
                        : addToWishlist(item)
                    }
                    className="icon-btn"
                  >
                    {isWishlisted ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FiHeart />
                    )}
                  </button>
                  <button className="icon-btn">
                    <FiEye />
                  </button>
                </div>

                {/* Product Image */}
                <img src={item.img} alt={item.name} className="product-img" />

                {/* Add To Cart Button (same style as FlashSale) */}
                <button
                  onClick={() => addToCart(item)}
                  className="addcart-btn"
                >
                  Add To Cart
                </button>

                {/* Info */}
                <h3 className="product-name">{item.name}</h3>
                <div className="flex justify-center items-center gap-2">
                  <p className="product-price">${item.price}</p>
                  {item.oldPrice && (
                    <p className="product-oldprice">${item.oldPrice}</p>
                  )}
                </div>

                {/* Rating */}
                <div className="product-rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="product-reviews">({item.reviews})</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All */}
        <button className="view-all-btn">View All Products</button>
      </div>
    </section>
  );
};

export default Products;
