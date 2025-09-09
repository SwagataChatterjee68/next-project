"use client";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { useWishlist } from "@/context/WishlistContext";
import "./flashSale.css"; // import your css file

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const product = [
    { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%", rating: 4, reviews: 88, img: "saleproduct1.png" },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: "-35%", rating: 4, reviews: 75, img: "saleproduct2.png" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%", rating: 5, reviews: 99, img: "/saleproduct3.png" },
    { id: 4, title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%", rating: 5, reviews: 99, img: "/saleproduct4.png" },
  ];

  function TimeBox({ label, value }) {
    return (
      <div className="timebox">
        <span className="timebox-value">{String(value).padStart(2, "0")}</span>
        <span className="timebox-label">{label}</span>
      </div>
    );
  }

  return (
    <section className="flashsale-section">
      <div className="flashsale-container">
        {/* Header */}
        <div className="flashsale-header">
          <div className="flashsale-title">
            <p>Today’s</p>
            <div className="title-with-timer">
              <h2>Flash Sales</h2>
              <div className="flashsale-timer">
                <TimeBox label="Days" value={timeLeft.days} />
                <TimeBox label="Hours" value={timeLeft.hours} />
                <TimeBox label="Minutes" value={timeLeft.minutes} />
                <TimeBox label="Seconds" value={timeLeft.seconds} />
              </div>
            </div>

          </div>

        </div>

        {/* Products */}
        <div className="flashsale-grid">
          {product.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);

            return (
              <div key={item.id} className="flashsale-card">
                {/* Discount Badge */}
                <span className="discount-badge">{item.discount}</span>

                {/* Wishlist Button */}
                <button
                  onClick={() =>
                    isWishlisted ? removeFromWishlist(item.id) : addToWishlist(item)
                  }
                  className="wishlist-btn"
                >
                  {isWishlisted ? (
                    <FaHeart size={18} className="text-red-500" />
                  ) : (
                    <FiHeart size={18} />
                  )}
                </button>

                {/* Image */}
                <img src={item.img} alt={item.title} className="product-img" />
                <button onClick={() => addToCart(item)} className="addcart-btn">
                  Add To Cart
                </button>

                {/* Info */}
                <h3 className="product-title">{item.title}</h3>
                <div className="price-wrapper">
                  <p className="price-current">${item.price}</p>
                  <p className="price-old">${item.oldPrice}</p>
                </div>
                <div className="rating-wrapper">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="rating-count">({item.reviews})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
