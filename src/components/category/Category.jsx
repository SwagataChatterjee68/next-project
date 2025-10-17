"use client";
import { useRef } from "react";
import { CiHeadphones } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";
import { LuGamepad } from "react-icons/lu";
import "./category.css";
import { GoArrowLeft,GoArrowRight } from "react-icons/go";

const Category = () => {
  const category = [
    { id: 1, name: "Phones", icon: <IoIosPhonePortrait /> },
    { id: 2, name: "Computers", icon: <HiOutlineComputerDesktop /> },
    { id: 3, name: "SmartWatch", icon: <TbDeviceWatchStats /> },
    { id: 4, name: "Camera", icon: <AiOutlineCamera /> },
    { id: 5, name: "HeadPhones", icon: <CiHeadphones /> },
    { id: 6, name: "Gaming", icon: <LuGamepad /> },
    { id: 7, name: "Gaming", icon: <LuGamepad /> },
    { id: 8, name: "Gaming", icon: <LuGamepad /> }
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="category-section">
      <div className="category-wrapper">
        <div className="category-header">
          <div className="header">
            <div className="section-header-bar"></div>
            <p>Categories</p>
          </div>
          <div className="category-header-title">
            <h2 className="category-title title">Browse By Category</h2>
            <div className="arrow-buttons">
              <button onClick={() => scroll("left")} className="arrow-btn">
                <GoArrowLeft />
              </button>
              <button onClick={() => scroll("right")} className="arrow-btn">
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="category-slider" ref={scrollRef}>
          {category.map((cat) => (
            <div key={cat.id} className="category-card category-card-hover">
              <span className="category-icon">{cat.icon}</span>
              <p className="category-name">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
