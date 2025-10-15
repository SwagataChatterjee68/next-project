"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import "./cart.css";

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleReturn = () => router.push("/");


  return (
    <div className="cart-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / <span className="active">Cart</span>
      </div>

      {/* Cart Table */}
      <div className="cart-table-wrapper">
        <div className="cart-table-scroll">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="product-cell-cart">
                    <div className="product-info-cart">
                      <div className="product-img-wrapper-cart">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="product-img-cart"
                        />
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn-cart"
                        >
                          <IoIosClose />
                        </button>
                      </div>
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="quantity-input-cart"
                    />
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Actions + Totals */}
      <div className="cart-actions mt-10 flex flex-col lg:flex-row gap-8">
        {/* Left area */}
        <div className="left-actions flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <button onClick={handleReturn} className="btn-return">
              Return To Shop
            </button>


          </div>

          <div className="coupon-area mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input type="text" placeholder="Coupon Code" className="coupon-input" />
            <button className="btn-apply">Apply Coupon</button>
          </div>
        </div>

        {/* Right totals */}
        <aside className="cart-summary w-full lg:w-[340px]">
          <div className="summary-card border border-gray-300 rounded-md p-6">
            <h3 className="text-lg font-semibold mb-5">Cart Total</h3>

            <div className="flex justify-between mb-3 text-sm">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <span>Shipping</span>
              <span className="text-gray-600">Free</span>
            </div>

            <div className="flex justify-between pt-3 border-t border-gray-200 font-semibold text-sm">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>

            <button className="btn-checkout mt-6 w-full">Proceed To Checkout</button>
          </div>
        </aside>
      </div>
    </div>

  );
}
