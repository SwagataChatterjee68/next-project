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
      id: 17,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/laptop.png",
      discount: "-35%",
    },
    {
      id: 18,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct3.png",
    },
    {
      id: 19,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct1.png",
    },
    {
      id: 20,
      title: "RGB Liquid CPU Cooler",
      price: 750,
      rating: 5,
      reviews: 65,
      img: "/saleproduct2.png",
    },
  ];

  return (
    <section className="section-just-for-you">
      {/* Header */}
      <div className="section-header-just-for-you">
        <div className="section-header-left-just-for-you">
          <div className="header">
              <div className="section-header-bar"></div>
              <p>Just For You</p>
            </div>
        </div>
        <button className="section-header-btn-just-for-you">See All</button>
      </div>

      {/* Product Grid */}
      <div className="products-grid-just-for-you">
        {products.map((item) => (
          <div key={item.id} className="product-card-just-for-you">
            {/* Image */}
            <div className="product-img-wrapper-just-for-you">
              <div className="product-img-top-just-for-you">
                {item.discount && <span className="product-discount-just-for-you">{item.discount}</span>}
                <button className="product-eye-just-for-you">
                  <FiEye size={16} />
                </button>
              </div>

              <img src={item.img} alt={item.title} className="product-img-just-for-you" />

              <button onClick={() => addToCart(item)} className="product-cart-btn-just-for-you">
                <BsCartPlus className="text-2xl" /> Add To Cart
              </button>
            </div>


            {/* Info */}
            <div className="product-info-just-for-you">
              <h3 className="product-title-just-for-you">{item.title}</h3>
              <p className="product-price-just-for-you">${item.price}</p>
              <div className="product-rating-just-for-you">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="product-reviews-just-for-you">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
