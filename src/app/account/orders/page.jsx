"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();

  // Example static data (you can fetch real data later)
  const orders = [
    {
      id: 1,
      title: "Classic Leather Watch",
      img: "/watch.jpg",
      price: 199,
      quantity: 1,
      status: "Delivered",
      orderDate: "Oct 12, 2025",
    },
    {
      id: 2,
      title: "Wireless Headphones",
      img: "/headphones.jpg",
      price: 120,
      quantity: 2,
      status: "In Transit",
      orderDate: "Oct 18, 2025",
    },
  ];

  return (
    <div className="2xl:max-w-7xl md:max-w-6xl mx-auto px-4 ">
      {/* Page Header */}
      <h1 className="text-2xl font-semibold mb-8 ">My Orders</h1>

      {/* Orders List */}
      <div className="grid grid-cols-1 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white"
          >
            {/* Left: Image + Details */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-20 h-20 flex-shrink-0">
                <Image
                  src={order.img}
                  alt={order.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div>
                <h2 className="font-medium text-lg">{order.title}</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Quantity: {order.quantity}
                </p>
                <p className="text-gray-900 font-semibold mt-1">
                  ${order.price * order.quantity}
                </p>
              </div>
            </div>

            {/* Right: Status + Date + Button */}
            <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-end">
              <span
                className={`text-sm font-medium mb-1 px-3 py-1 rounded-full ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
              <p className="text-gray-500 text-sm mb-3">
                Ordered on {order.orderDate}
              </p>
              <button
                onClick={() => router.push(`/orders/${order.id}`)}
                className="text-sm border border-gray-800 px-4 py-2 rounded hover:bg-gray-50"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {orders.length === 0 && (
        <div className="text-center text-gray-600 mt-20">
          <p>No orders found.</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 border border-gray-800 rounded hover:bg-gray-50"
          >
            Return to Shop
          </button>
        </div>
      )}
    </div>
  );
}
