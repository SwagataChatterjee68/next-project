"use client";
import "./wishlist.css"
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { FaTrash } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import JustForYou from "@/components/justforyou/JustForYou";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveAllToBag = () => {
    wishlist.forEach((item) => addToCart(item));
    clearWishlist();
  };

  return (
    <div>
      <section className="wishlist-section">
        {/* Header */}
        <div className="wishlist-header">
          <h2 className="wishlist-title">Wishlist ({wishlist.length})</h2>
          {wishlist.length > 0 && (
            <button onClick={handleMoveAllToBag} className="move-all-btn-wishlist">
              Move All To Bag
            </button>
          )}
        </div>

        {/* Wishlist Grid */}
        {wishlist.length > 0 ? (
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-card">
                {/* Discount Badge */}
                {item.discount && (
                  <span className="discount-badge-wishlist">{item.discount}</span>
                )}

                {/* Remove button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="remove-btn-wishlist"
                >
                  <FaTrash className="text-gray-600 text-sm" />
                </button>

                {/* Product Image */}
                <img src={item.img} alt={item.title} className="product-img-wishlist" />

                {/* Add To Cart */}
                <button
                  onClick={() => addToCart(item)}
                  className="add-to-cart-btn-wishlist"
                >
                  <BsCartPlus className="text-2xl" /> Add To Cart
                </button>

                {/* Info */}
                <div className="card-info-wishlist">
                  <h3 className="card-title-wishlist">{item.title}</h3>
                  <p className="card-price-wishlist">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-text-wishlist">Your wishlist is empty.</p>
        )}
      </section>
       <JustForYou />
    </div>
  );
}
