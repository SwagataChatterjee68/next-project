"use client";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const products = [
    { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, img: "/saleproduct1.png" },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, img: "/saleproduct2.png" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, img: "/saleproduct3.png" },
    { id: 4, title: "S-Series Comfort Chair", price: 375, img: "/saleproduct4.png" },
  ];

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-28 p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Search Results for <span className="text-red-500">"{query}"</span>
      </h1>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="border p-4 rounded-md">
              <img src={item.img} alt={item.title} className="h-40 object-contain mb-3" />
              <h2 className="text-sm font-medium">{item.title}</h2>
              <p className="text-red-600 font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
}
