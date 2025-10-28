"use client";
import React, { useState, useEffect } from "react";
import "./musicBanner.css"

const MusicBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  // Simple countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds -= 1;
        else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="music-banner">
      <div className="wrapper md:grid md:grid-cols-2 md:items-center sm:flex sm:flex-wrap md:flex-nowrap ">
        <div className="music-text-wrapper">
          <p className="music-category">Categories</p>
          <h2 className="music-heading title">Enhance Your Music Experience</h2>

          {/* Countdown */}
          <div className="music-countdown">
            <div className="music-count">
              <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
              Hours
            </div>
            <div className="music-count">
              <span>{timeLeft.days.toString().padStart(2, "0")}</span>
              Days
            </div>
            <div className="music-count">
              <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
              Minutes
            </div>
            <div className="music-count">
              <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
              Seconds
            </div>
          </div>

          {/* Button */}
          <button className="music-btn">Buy Now!</button>
        </div>

        {/* Right Image */}
        
          <div className="music-img">
            <img src="/speaker.png" alt="Music Speaker" />
          </div>
       

      </div>
    </section>
  );
};

export default MusicBanner;
