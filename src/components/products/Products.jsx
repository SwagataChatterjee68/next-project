"use client";
import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";
import "./products.css";

const Products = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const productList = [
    {
      id: 9,
      title: "Breed Dry Dog Food",
      price: 100,
      rating: 3,
      reviews: 35,
      img: "/dogfood.jpg",
      slug: "breed-dry-dog-food",
    },
    {
      id: 10,
      title: "CANON EOS DSLR Camera",
      price: 360,
      rating: 5,
      reviews: 95,
      img: "/camera.png",
      slug: "canon-eos-dslr-camera",
    },
    {
      id: 11,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      img: "/laptop.png",
      slug: "asus-fhd-gaming-laptop",
    },
    {
      id: 12,
      title: "Curology Product Set",
      price: 500,
      rating: 4,
      reviews: 145,
      img: "/curology.png",
      slug: "curology-product-set",
    },
    {
      id: 13,
      title: "Kids Toy Car",
      price: 100,
      rating: 3,
      reviews: 35,
      img: "/car.png",
      slug: "kids-toy-car",
    },
    {
      id: 14,
      title: "Football Shoes",
      price: 360,
      rating: 5,
      reviews: 95,
      img: "/shoes.png",
      slug: "football-shoes",
    },
    {
      id: 15,
      title: "Gaming Laptop",
      price: 700,
      rating: 5,
      reviews: 325,
      img: "/gaminglaptop.png",
      slug: "gaming-laptop",
    },
    {
      id: 16,
      title: "Gaming Controller",
      price: 500,
      rating: 4,
      reviews: 145,
      img: "/gamepad.png",
      slug: "gaming-controller",
    },
  ];

  const handleClick = (item) => {
    router.push(`/product/${item.slug}`);
  };

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
                  {/* ✅ pass item here */}
                  <button onClick={() => handleClick(item)} className="icon-btn">
                    <FiEye />
                  </button>
                </div>

                {/* Product Image */}
                <img src={item.img} alt={item.title} className="product-img" />

                {/* Add To Cart Button */}
                <button
                  onClick={() => addToCart(item)}
                  className="addcart-btn"
                >
                  Add To Cart
                </button>

                {/* Info */}
                <h3 className="product-name">{item.title}</h3>
                <div className="flex justify-center items-center gap-2">
                  <p className="product-price">${item.price}</p>
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
