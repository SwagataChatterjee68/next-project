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

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="cart-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        Home / <span className="active">Cart</span>
      </div>

      {/* Cart Table */}
      <div className="cart-table-wrapper">
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
                      <img src={item.img} alt={item.title} className="product-img-cart" />
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

      {/* Actions + Totals */}
      <div className="cart-actions">
        {/* Left Actions */}
        <div className="left-actions-cart">
          <button onClick={handleClick} className="return-btn-cart">
            Return To Shop
          </button>
          <div className="coupon-box-cart">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-btn-cart">Apply Coupon</button>
          </div>
         
        </div>

        {/* Right Cart Totals */}
        <div className="cart-total">
          <h3>Cart Total</h3>
          <div className="total-row-cart">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="total-row-cart">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="total-row-cart total">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button className="checkout-btn-cart">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
