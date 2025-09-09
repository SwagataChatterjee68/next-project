"use client";
import React from "react";
import "./newArrival.css";

const NewArrival = () => {
    return (
        <section className="newarrival-section">
            {/* Header */}
            <div className="newarrival-wrapper">
                <p className="newarrival-subtitle">Featured</p>
                <h2 className="newarrival-title">New Arrival</h2>

                {/* Grid */}
                <div className="newarrival-grid">
                    {/* Large PlayStation Card */}
                    <div className="newarrival-large h-[400px]">
                        <img
                            src="/play.png"
                            alt="PlayStation 5"
                            className="newarrival-img"
                        />
                        <div className="newarrival-overlay">
                            <h3 className="newarrival-card-title">PlayStation 5</h3>
                            <p className="newarrival-card-subtitle">
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <button className="newarrival-btn">Shop Now</button>
                        </div>
                    </div>

                    {/* Right Side Small Grid */}
                    <div className="newarrival-small-grid">
                        {/* Women's Collections */}
                        <div className="newarrival-card h-[190px] sm:col-span-2">
                            <img
                                src="/women.png"
                                alt="Women's Collections"
                                className="newarrival-img"
                            />
                            <div className="newarrival-overlay">
                                <h3 className="newarrival-card-title">Women’s Collections</h3>
                                <p className="newarrival-card-subtitle">
                                    Featured woman collections that give you another vibe.
                                </p>
                                <button className="newarrival-btn">Shop Now</button>
                            </div>
                        </div>

                        {/* Speakers */}
                        <div className="newarrival-card h-[190px]">
                            <img
                                src="/speakers.png"
                                alt="Speakers"
                                className="newarrival-img"
                            />
                            <div className="newarrival-overlay">
                                <h3 className="newarrival-card-title">Speakers</h3>
                                <p className="newarrival-card-subtitle">
                                    Amazon wireless speakers
                                </p>
                                <button className="newarrival-btn">Shop Now</button>
                            </div>
                        </div>

                        {/* Perfume */}
                        <div className="newarrival-card h-[190px]">
                            <img
                                src="/perfume.png"
                                alt="Perfume"
                                className="newarrival-img"
                            />
                            <div className="newarrival-overlay">
                                <h3 className="newarrival-card-title">Perfume</h3>
                                <p className="newarrival-card-subtitle">GUCCI INTENSE-OUD EDP</p>
                                <button className="newarrival-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrival;
