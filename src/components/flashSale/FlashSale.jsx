"use client";
import { FaStar, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useState, useEffect, useRef } from "react";
import { useWishlist } from "@/context/WishlistContext";
import "./flashSale.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const FlashSale = () => {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

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
      slug: "havit-hv-g92-gamepad",
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
      slug: "ak-900-wired-keyboard",
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
      slug: "ips-lcd-gaming-monitor",
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
      slug: "s-series-comfort-chair",
    },
    {
      id: 5,
      title: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 5,
      reviews: 99,
      img: "/saleproduct4.png",
      slug: "s-series-comfort-chair",
    },
  ];

  // Scroll Controls
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  function TimeBox({ label, value, showColon }) {
    return (
      <div className="timebox">
        <span className="timebox-label">
          {label}
          {showColon && ":"}
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
              <div className="md:flex gap-10 items-center">
                <h2>Flash Sales</h2>
                <div className="flashsale-timer">
                  <TimeBox label="Days " value={timeLeft.days} />
                  <TimeBox label="Hours " value={timeLeft.hours} />
                  <TimeBox label="Minutes " value={timeLeft.minutes} />
                  <TimeBox label="Seconds " value={timeLeft.seconds} />
                </div>
              </div>
              <div className="arrow-btns">
                <button onClick={scrollLeft} className="arrow-btn">
                  <GoArrowLeft />
                </button>
                <button onClick={scrollRight} className="arrow-btn">
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="flashsale-slider" ref={scrollRef}>
          {product.map((item) => {
            const isWishlisted = wishlist.some((w) => w.id === item.id);
            return (
              <div key={item.id} className=" group " >
                <div className="flashsale-card">
                  <span className="discount-badge-flashsale">{item.discount}</span>
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
                    <button onClick={() => handleClick(item)} className="icon-btn">
                      <FiEye />
                    </button>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="product-img-flashsale"
                  />
                  <button onClick={() => addToCart(item)} className="addcart-btn-flashsale">
                    Add to Cart
                  </button>
                </div>
                <h3 className="product-title-flashsale">{item.title}</h3>
                <div className="price-wrapper-flashsale">
                  <p className="price-current-flashsale">${item.price}</p>
                  <p className="price-old-flashsale">${item.oldPrice}</p>
                </div>
                <div className="rating-wrapper-flashsale">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="rating-count-flashsale">
                    ({item.reviews})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="view-all-btn">View All Products</button>
    </section>
  );
};

export default FlashSale;