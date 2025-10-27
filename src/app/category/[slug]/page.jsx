"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function CategoryPage() {
  const { slug } = useParams();
  const [sort, setSort] = useState("latest");

  // Map category slugs to display names and mock data
const categoryData = {
  "womans-fashion": {
    title: "Women’s Fashion",
    products: [
      { id: 1, name: "Floral Print Kurta Set", image: "/women-1.jpg" },
      { id: 2, name: "Checkered Top & Pants", image: "/women-2.jpg" },
      { id: 3, name: "Blue Tunic", image: "/women-3.jpg" },
      { id: 4, name: "Embroidered Saree", image: "/women-4.jpg" },
    ],
  },

  "mens-fashion": {
    title: "Men’s Fashion",
    products: [
      { id: 1, name: "Casual Cotton Shirt", image: "/men-1.jpg" },
      { id: 2, name: "Denim Jacket", image: "/men-2.jpg" },
      { id: 3, name: "Slim Fit Jeans", image: "/men-3.jpg" },
      { id: 4, name: "Formal Suit", image: "/men-4.jpg" },
    ],
  },

  electronics: {
    title: "Electronics",
    products: [
      { id: 1, name: "iPhone 16 Pro", image: "/images/iphone.png" },
      { id: 2, name: "MacBook Air M3", image: "/images/laptop.png" },
      { id: 3, name: "Smartwatch X2", image: "/images/smartwatch.png" },
      { id: 4, name: "Wireless Earbuds", image: "/images/earbuds.png" },
    ],
  },

  "home-lifestyle": {
    title: "Home & Lifestyle",
    products: [
      { id: 1, name: "Ceramic Vase Set", image: "/images/vase.png" },
      { id: 2, name: "Cushion Cover Pack", image: "/images/cushion.png" },
      { id: 3, name: "Wall Clock", image: "/images/clock.png" },
      { id: 4, name: "Table Lamp", image: "/images/lamp.png" },
    ],
  },

  medicine: {
    title: "Medicine",
    products: [
      { id: 1, name: "Paracetamol Tablets", image: "/images/medicine1.png" },
      { id: 2, name: "Vitamin C Capsules", image: "/images/medicine2.png" },
      { id: 3, name: "Cough Syrup", image: "/images/medicine3.png" },
      { id: 4, name: "Pain Relief Gel", image: "/images/medicine4.png" },
    ],
  },

  "sports-outdoor": {
    title: "Sports & Outdoor",
    products: [
      { id: 1, name: "Football", image: "/images/football.png" },
      { id: 2, name: "Yoga Mat", image: "/images/yoga-mat.png" },
      { id: 3, name: "Dumbbell Set", image: "/images/dumbbell.png" },
      { id: 4, name: "Cricket Bat", image: "/images/cricket-bat.png" },
    ],
  },

  "babys-toys": {
    title: "Baby’s & Toys",
    products: [
      { id: 1, name: "Soft Teddy Bear", image: "/images/teddy.png" },
      { id: 2, name: "Building Blocks Set", image: "/images/blocks.png" },
      { id: 3, name: "Baby Stroller", image: "/images/stroller.png" },
      { id: 4, name: "Toy Car", image: "/images/toy-car.png" },
    ],
  },

  "groceries-pets": {
    title: "Groceries & Pets",
    products: [
      { id: 1, name: "Organic Rice 1kg", image: "/images/rice.png" },
      { id: 2, name: "Cooking Oil 5L", image: "/images/oil.png" },
      { id: 3, name: "Dog Food Pack", image: "/images/dog-food.png" },
      { id: 4, name: "Cat Litter", image: "/images/cat-litter.png" },
    ],
  },

  "health-beauty": {
    title: "Health & Beauty",
    products: [
      { id: 1, name: "Face Moisturizer", image: "/images/moisturizer.png" },
      { id: 2, name: "Hair Serum", image: "/images/hair-serum.png" },
      { id: 3, name: "Body Lotion", image: "/images/body-lotion.png" },
      { id: 4, name: "Lip Balm", image: "/images/lip-balm.png" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
          {category.products.map((p) => (
            <div key={p.id} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[6/7] overflow-hidden rounded">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-gray-800 text-sm font-medium">{p.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
