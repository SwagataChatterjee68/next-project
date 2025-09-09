"use client";
import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { BsCartPlus } from "react-icons/bs";
import "./justforyou.css";

export default function JustForYou() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/laptop.png",
      discount: "-35%",
    },
    {
      id: 2,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct3.png",
    },
    {
      id: 3,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct1.png",
    },
    {
      id: 4,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct2.png",
    },
  ];

  return (
    <section className="section">
      {/* Header */}
      <div className="section-header">
        <div className="section-header-left">
          <div className="section-header-bar"></div>
          <h2 className="section-header-title">Just For You</h2>
        </div>
        <button className="section-header-btn">See All</button>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            {/* Image */}
            <div className="product-img-wrapper">
              {item.discount && (
                <span className="product-discount">{item.discount}</span>
              )}
              <button className="product-eye">
                <FiEye size={16} />
              </button>
              <img src={item.img} alt={item.title} className="product-img" />
              <button
                onClick={() => addToCart(item)}
                className="product-cart-btn"
              >
                <BsCartPlus className="text-2xl" /> Add To Cart
              </button>
            </div>

            {/* Info */}
            <div className="product-info">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">${item.price}</p>
              <div className="product-rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="product-reviews">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
