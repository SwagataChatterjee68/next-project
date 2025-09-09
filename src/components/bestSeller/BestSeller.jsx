import React from "react";
import { FiHeart,FiEye } from "react-icons/fi";
import { FaHeart, FaStar } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";
import "./bestSeller.css"; // adjust path if needed

const BestSeller = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const bestSelling = [
    {
      id: 5,
      title: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
      img: "/bestselling1.png",
    },
    {
      id: 6,
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 5,
      reviews: 65,
      img: "/bestselling2.png",
    },
    {
      id: 7,
      title: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 5,
      reviews: 65,
      img: "/bestselling3.png",
    },
    {
      id: 8,
      title: "Small BookShelf",
      price: 360,
      oldPrice: 400,
      rating: 5,
      reviews: 65,
      img: "/bestselling4.png",
    },
  ];

  return (
    <section className="bestseller-section">
      <div className="bestseller-wrapper">
        {/* Header */}
        <div className="bestseller-header">
          <h2 className="bestseller-title">Best Selling Products</h2>
          <button className="bestseller-btn">View All</button>
        </div>

        {/* Product Grid */}
        <div className="bestseller-grid">
          {bestSelling.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);

            return (
              <div key={item.id} className="bestseller-card">
                {/* Wishlist Button */}
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
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="bestseller-img"
                />

                {/* Info */}
                <h3 className="bestseller-title-text">{item.title}</h3>
                <div className="bestseller-price-row">
                  <p className="bestseller-price">${item.price}</p>
                  <p className="bestseller-oldprice">${item.oldPrice}</p>
                </div>
                <div className="bestseller-rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="bestseller-reviews">({item.reviews})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
