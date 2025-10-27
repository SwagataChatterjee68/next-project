"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function CategoryPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [sort, setSort] = useState("latest");

    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const handleClick = (item) => {
        router.push(`/product/${item.slug}`);
    };

    // Category Data
    const categoryData = {
        "womans-fashion": {
            title: "Women’s Fashion",
            products: [
                { id: 21, name: "Floral Print Kurta Set", image: "/women-1.jpg", price: 120, oldPrice: 160, rating: 4, discount: "-25%", slug: "floral-print-kurta-set" },
                { id: 22, name: "Checkered Top & Pants", image: "/women-2.jpg", price: 90, oldPrice: 110, rating: 4, discount: "-20%", slug: "checkered-top-pants" },
                { id: 23, name: "Blue Tunic", image: "/women-3.jpg", price: 80, oldPrice: 100, rating: 5, discount: "-15%", slug: "blue-tunic" },
                { id: 24, name: "Embroidered Saree", image: "/women-4.jpg", price: 150, oldPrice: 180, rating: 5, discount: "-30%", slug: "embroidered-saree" },
            ],
        },
        "mens-fashion": {
            title: "Men’s Fashion",
            products: [
                { id: 25, name: "Casual Cotton Shirt", image: "/men-1.jpg", price: 60, oldPrice: 80, rating: 4, discount: "-25%", slug: "casual-cotton-shirt" },
                { id: 26, name: "Denim Jacket", image: "/men-2.jpg", price: 100, oldPrice: 120, rating: 5, discount: "-15%", slug: "denim-jacket" },
                { id: 27, name: "Slim Fit Jeans", image: "/men-3.jpg", price: 70, oldPrice: 90, rating: 4, discount: "-22%", slug: "slim-fit-jeans" },
                { id: 28, name: "Formal Suit", image: "/men-4.jpg", price: 180, oldPrice: 220, rating: 5, discount: "-18%", slug: "formal-suit" },
            ],
        },
        electronics: {
            title: "Electronics",
            products: [
                { id: 29, name: "Smartphone Pro X", image: "/electronics-1.jpg", price: 799, oldPrice: 999, rating: 5, discount: "-20%", slug: "smartphone-pro-x" },
                { id: 30, name: "Wireless Headphones", image: "/electronics-2.jpg", price: 120, oldPrice: 150, rating: 4, discount: "-15%", slug: "wireless-headphones" },
                { id: 31, name: "4K LED TV", image: "/electronics-3.jpg", price: 450, oldPrice: 600, rating: 5, discount: "-25%", slug: "4k-led-tv" },
                { id: 32, name: "Bluetooth Speaker", image: "/electronics-4.jpg", price: 80, oldPrice: 100, rating: 4, discount: "-20%", slug: "bluetooth-speaker" },
            ],
        },
        "home-lifestyle": {
            title: "Home & Lifestyle",
            products: [
                { id: 33, name: "Wooden Table Lamp", image: "/home-1.jpg", price: 45, oldPrice: 60, rating: 4, discount: "-25%", slug: "wooden-table-lamp" },
                { id: 34, name: "Cotton Bed Sheet", image: "/home-2.jpg", price: 70, oldPrice: 85, rating: 5, discount: "-18%", slug: "cotton-bed-sheet" },
                { id: 35, name: "Wall Clock", image: "/home-3.jpg", price: 30, oldPrice: 45, rating: 4, discount: "-33%", slug: "wall-clock" },
                { id: 36, name: "Indoor Plant Set", image: "/home-4.jpg", price: 55, oldPrice: 70, rating: 5, discount: "-21%", slug: "indoor-plant-set" },
            ],
        },
        medicine: {
            title: "Medicine",
            products: [
                { id: 37, name: "Vitamin C Tablets", image: "/medicine-1.jpg", price: 20, oldPrice: 30, rating: 4, discount: "-33%", slug: "vitamin-c-tablets" },
                { id: 38, name: "Pain Relief Spray", image: "/medicine-2.jpg", price: 10, oldPrice: 15, rating: 5, discount: "-30%", slug: "pain-relief-spray" },
                { id: 39, name: "Digital Thermometer", image: "/medicine-3.jpg", price: 25, oldPrice: 35, rating: 4, discount: "-28%", slug: "digital-thermometer" },
                { id: 40, name: "First Aid Kit", image: "/medicine-4.jpg", price: 35, oldPrice: 45, rating: 4, discount: "-22%", slug: "first-aid-kit" },
            ],
        },
        "sports-outdoor": {
            title: "Sports & Outdoor",
            products: [
                { id: 41, name: "Football", image: "/sports-1.jpg", price: 40, oldPrice: 55, rating: 5, discount: "-27%", slug: "football" },
                { id: 42, name: "Yoga Mat", image: "/sports-2.jpg", price: 25, oldPrice: 35, rating: 4, discount: "-29%", slug: "yoga-mat" },
                { id: 43, name: "Camping Tent", image: "/sports-3.jpg", price: 120, oldPrice: 150, rating: 5, discount: "-20%", slug: "camping-tent" },
                { id: 44, name: "Tennis Racket", image: "/sports-4.jpg", price: 85, oldPrice: 100, rating: 4, discount: "-15%", slug: "tennis-racket" },
            ],
        },
        "babys-toys": {
            title: "Baby's & Toys",
            products: [
                { id: 45, name: "Soft Teddy Bear", image: "/toys-1.jpg", price: 25, oldPrice: 35, rating: 5, discount: "-28%", slug: "soft-teddy-bear" },
                { id: 46, name: "Baby Stroller", image: "/toys-2.jpg", price: 150, oldPrice: 200, rating: 5, discount: "-25%", slug: "baby-stroller" },
                { id: 47, name: "Lego Building Set", image: "/toys-3.jpg", price: 60, oldPrice: 80, rating: 4, discount: "-25%", slug: "lego-building-set" },
                { id: 48, name: "Toy Car", image: "/toys-4.jpg", price: 30, oldPrice: 40, rating: 4, discount: "-25%", slug: "toy-car" },
            ],
        },
        "groceries-pets": {
            title: "Groceries & Pets",
            products: [
                { id: 49, name: "Organic Rice 1kg", image: "/groceries-1.jpg", price: 15, oldPrice: 20, rating: 5, discount: "-25%", slug: "organic-rice" },
                { id: 50, name: "Pet Dog Food 2kg", image: "/groceries-2.jpg", price: 35, oldPrice: 45, rating: 4, discount: "-22%", slug: "pet-dog-food" },
                { id: 51, name: "Cooking Oil 1L", image: "/groceries-3.jpg", price: 10, oldPrice: 15, rating: 4, discount: "-33%", slug: "cooking-oil" },
                { id: 52, name: "Fresh Apples 1kg", image: "/groceries-4.jpg", price: 8, oldPrice: 12, rating: 5, discount: "-33%", slug: "fresh-apples" },
            ],
        },
        "health-beauty": {
            title: "Health & Beauty",
            products: [
                { id: 53, name: "Face Moisturizer", image: "/beauty-1.jpg", price: 25, oldPrice: 35, rating: 4, discount: "-29%", slug: "face-moisturizer" },
                { id: 54, name: "Hair Serum", image: "/beauty-2.jpg", price: 18, oldPrice: 25, rating: 5, discount: "-28%", slug: "hair-serum" },
                { id: 55, name: "Makeup Kit", image: "/beauty-3.jpg", price: 50, oldPrice: 65, rating: 5, discount: "-23%", slug: "makeup-kit" },
                { id: 56, name: "Body Lotion", image: "/beauty-4.jpg", price: 20, oldPrice: 28, rating: 4, discount: "-29%", slug: "body-lotion" },
            ],
        },
    };

    const category = categoryData[slug] || { title: "Category", products: [] };

    return (
        <main className="min-h-screen bg-white py-32">
            <section className="2xl:max-w-7xl md:max-w-6xl mx-auto px-3.5 pt-10">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-2">
                    Home <span className="mx-1">›</span>
                    <span className="text-gray-800 capitalize">{category.title}</span>
                </div>

                {/* Title + Sort */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h1 className="text-3xl font-semibold text-gray-900">{category.title}</h1>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none"
                    >
                        <option value="latest">Sort by latest</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="price-low">Sort by price: low to high</option>
                        <option value="price-high">Sort by price: high to low</option>
                    </select>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                    {category.products.map((p) => {
                        const isWishlisted = wishlist.some((w) => w.id === p.id);
                        return (

                            <div key={p.id}>
                                <div className="group relative bg-[#FDFBD44A] rounded-lg overflow-hidden shadow hover:shadow-lg transition-all ease-in-out">
                                    <span className="absolute top-3 left-3 bg-[#FFA500] text-white text-xs px-3 py-1 rounded">{p.discount}</span>
                                    <div className=" absolute top-3 right-3 flex flex-col gap-2 cursor-pointer">
                                        <button
                                            onClick={() =>
                                                isWishlisted
                                                    ? removeFromWishlist(p.id)
                                                    : addToWishlist(p)
                                            }
                                            className="bg-white w-8 h-8 flex items-center justify-center cursor-pointer rounded-full shadow  transition"
                                        >
                                            {isWishlisted ? (
                                                <FaHeart className="text-red-500" />
                                            ) : (
                                                <FiHeart />
                                            )}
                                        </button>
                                        <button onClick={() => handleClick(p)} className="bg-white w-8 h-8 flex items-center justify-center cursor-pointer rounded-full shadow  transition">
                                            <FiEye />
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center h-[220px] ">
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            width={150}
                                            height={150}
                                            className="object-cover transition-transform duration-300"
                                        />
                                    </div>

                                    <button onClick={() => addToCart(p)} className="hidden group-hover:flex absolute bottom-0 left-0 w-full bg-black text-white justify-center py-2 text-sm hover:bg-gray-800 transition">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="py-4">
                                    <h3 className="font-medium text-gray-800 text-sm sm:text-base mb-1">{p.name}</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <p className="text-[#FFA500] font-semibold text-sm">${p.price}</p>
                                        <p className="text-gray-400 line-through text-xs">${p.oldPrice}</p>
                                    </div>
                                    <div className="flex items-center  text-[#FFA500] text-xs">
                                        {Array.from({ length: p.rating }).map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>
            </section>
        </main>
    );
}
