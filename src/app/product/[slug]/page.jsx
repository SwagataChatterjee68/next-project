"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import "./productDetails.css";

const products = [
  {
    id: 21,
    name: "Havic HV G-92 Gamepad",
    price: 192,
    images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"],
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive...",
    reviews: 150,
    stock: "In Stock",
    slug: "havic-hv-g92-gamepad",
  },
  {
    id: 22,
    name: "Gucci Duffle Bag",
    price: 960,
    images: ["/bag1.png", "/bag2.png"],
    description: "Luxury Gucci bag, perfect for travel or style lovers.",
    reviews: 95,
    stock: "Limited Stock",
    slug: "gucci-duffle-bag",
  },
];

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(
    product?.images[0] || ""
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <p className="text-center text-red-500 py-10">
        Product not found
      </p>
    );
  }

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Left: Images */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="thumbnail"
                className={`thumbnail ${
                  selectedImage === img
                    ? "thumbnail-active"
                    : "thumbnail-inactive"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img src={selectedImage} alt="product" className="main-img" />
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-4">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-reviews">
            ⭐⭐⭐⭐⭐ ({product.reviews}){" "}
            <span className="product-stock">{product.stock}</span>
          </p>

          <p className="product-price">${product.price}</p>
          <p className="product-desc">{product.description}</p>

          {/* Quantity & Buy Button */}
          <div className="flex items-center gap-4 mt-3">
            <div className="qty-wrapper">
              <button
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : 1)
                }
                className="qty-btn"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
            </div>

            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
