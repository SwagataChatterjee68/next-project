"use client";
import { FaStar, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { useWishlist } from "@/context/WishlistContext";
import "./flashSale.css";
import { useFilter } from "@/context/FilterContext";
const FlashSale = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const { searchTerm } = useFilter();
  const handleClick = (item) => {
    router.push(`/product/${item.slug}`);
  };

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
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 4,
      reviews: 88,
      img: "saleproduct1.png",
      slug: "havit-hv-g92-gamepad",   // ✅ Add slug
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
      slug: "ak-900-wired-keyboard",   // ✅ Add slug
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
      slug: "ips-lcd-gaming-monitor",   // ✅ Add slug
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
      slug: "s-series-comfort-chair",   // ✅ Add slug
    },
  ];
  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function TimeBox({ label, value, showColon }) {
  return (
    <div className="timebox">
      <span className="timebox-label">
        {label}{showColon && ":"}
      </span>
      <span className="timebox-value">{String(value).padStart(2, "0")}</span>
    </div>
  );
}

  return (
    <section className="flashsale-section">
      <div className="wrapper">
        {/* Header */}
        <div className="flashsale-header">
          <div className="flashsale-title">
            <div className="header">
              <div className="section-header-bar"></div>
              <p>Today’s</p>
            </div>
            <div className="title-with-timer-flashsale">
              <h2>Flash Sales</h2>
              <div className="flashsale-timer">
                <TimeBox label="Days " value={timeLeft.days} />
                <TimeBox label="Hours " value={timeLeft.hours} />
                <TimeBox label="Minutes " value={timeLeft.minutes} />
                <TimeBox label="Seconds " value={timeLeft.seconds} />
              </div>
            </div>

          </div>

        </div>

        {/* Products */}
        <div className="flashsale-grid">
          {filteredProducts.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);

            return (
              <div key={item.id} className="flashsale-card">
                {/* Discount Badge */}
                <span className="discount-badge-flashsale">{item.discount}</span>

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
                <img src={item.img} alt={item.title} className="product-img-flashsale" />
                <button onClick={() => addToCart(item)} className="addcart-btn-flashsale">
                  Add To Cart
                </button>

                {/* Info */}
                <h3 className="product-title-flashsale">{item.title}</h3>
                <div className="price-wrapper-flashsale">
                  <p className="price-current-flashsale">${item.price}</p>
                  <p className="price-old-flashsale">${item.oldPrice}</p>
                </div>
                <div className="rating-wrapper-flashsale">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="rating-count-flashsale">({item.reviews})</span>
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
