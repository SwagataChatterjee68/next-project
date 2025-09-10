"use client";
import { useState } from "react";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState("/gamepad1.png");
  const [quantity, setQuantity] = useState(1);

  const images = ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"];

  const relatedItems = [
    { id: 1, name: "The north coat", price: 260, oldPrice: 360, discount: 25, rating: 5, img: "/coat.png" },
    { id: 2, name: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: 20, rating: 5, img: "/bag.png" },
    { id: 3, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, discount: 15, rating: 5, img: "/cooler.png" },
    { id: 4, name: "Small Bookshelf", price: 360, oldPrice: null, discount: null, rating: 5, img: "/bookshelf.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img) => (
              <img
                key={img}
                src={img}
                alt="thumbnail"
                className={`w-20 h-20 border rounded-md cursor-pointer ${
                  selectedImage === img ? "border-orange-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="product"
              className="w-full h-[400px] object-contain rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Havic HV G-92 Gamepad
          </h1>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐ (150 Reviews) <span className="text-green-600">In Stock</span></p>

          <p className="text-2xl font-bold">$192.00</p>

          <p className="text-sm text-gray-600">
            PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess free
            removal. Pressure sensitive.
          </p>

          {/* Colours */}
          <div>
            <h3 className="font-medium">Colours:</h3>
            <div className="flex gap-2 mt-1">
              <span className="w-6 h-6 rounded-full bg-black cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-medium">Size:</h3>
            <div className="flex gap-2 mt-1">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Buy Button */}
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border rounded-md p-4 space-y-3 mt-4">
            <div className="flex items-center gap-3">
              🚚 <span className="text-sm">Free Delivery - Enter your postal code for delivery availability</span>
            </div>
            <div className="flex items-center gap-3">
              ↩️ <span className="text-sm">Return Delivery - Free 10 Days Returns. Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-lg font-semibold mb-4">Related Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 relative">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{item.discount}%
                </span>
              )}
              <img src={item.img} alt={item.name} className="w-full h-40 object-contain" />
              <h3 className="mt-2 font-medium">{item.name}</h3>
              <p className="text-orange-500 font-bold">
                ${item.price}{" "}
                {item.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">${item.oldPrice}</span>
                )}
              </p>
              <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ ({item.rating})</p>
              <button className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
