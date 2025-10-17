'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import "./productDetails.css";
import { useWishlist } from "@/context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedItems, setRelatedItems] = useState([]);


  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const handleClick = (item) => {
    router.push(`/product/${item.slug}`);
  };

  useEffect(() => {
    if (!slug) return;
    const foundProduct = products.find((p) => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
      setRelatedItems(products.filter((p) => p.slug !== slug));
    } else {
      setProduct(null);
    }
  }, [slug]);

  if (!product) return <div className="not-found">Product not found</div>;
  const isWishlisted = wishlist.some((w) => w.id === item.id);
  return (
    <div className="product-page">
      <div className="container">
        {/* Left: Images */}
        <div className="images-section">
          <div className="thumbnails">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="thumbnail"
                className={`thumb-img ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="main-image-wrapper">
            <img src={selectedImage} alt={product.title} className="main-img" />
          </div>
        </div>

        {/* Right: Details */}
        <div className="details-section">
          <h1 className="product-title title">{product.title}</h1>
          <p className="rating">
            ⭐⭐⭐⭐⭐ ({product.reviews} Reviews){' '}
            <span className={product.stock ? 'in-stock' : 'out-stock'}>
              {product.stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </p>

          <p className="price">${product.price.toFixed(2)}</p>
          <p className="desc">{product.description}</p>



          <div className="colors">
            <h3>Colours:</h3>
            <div className="color-options">
              <span className="color-circle blue"></span>
              <span className="color-circle red"></span>
            </div>
          </div>

          <div className="sizes">
            <h3>Size:</h3>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="size-btn">{size}</button>
              ))}
            </div>
          </div>

          <div className="quantity-buy ">
            <div className="qty-box">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="qty-btn border-r ">-</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="qty-btn border-l ">+</button>
            </div>
            <button className="buy-btn">Buy Now</button>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info cursor-pointer ">
            <div className="delivery-card border-b border-b-[#D9D9D9] pb-8">
              <div className='flex items-center gap-5'>
                <img src="/delivery.png" alt="delivery" className='object-cover h-10 w-10 ' />
                <h4 className='text-sm'>Free Delivery</h4>
              </div>
              <p className='pl-15 hover:underline text-xs'>Enter your postal code for Delivery Availability</p>
            </div>
            <div className="delivery-card ">
              <div className='flex items-center gap-5'>
                <img src="/return.png" alt="return" className='object-cover h-10 w-10 ' />
                <h4 className='text-sm'>Return Delivery</h4>
              </div>

              <p className='pl-15 hover:underline text-xs'>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="related-section ">
        <div className="header">
          <div className="section-header-bar"></div>
          <p>Related Items</p>
        </div>
        <div className="related-grid">
          {products.map((item) => (
            <div key={item.id}>
              <div className="related-card group relative">
                {item.oldPrice && <span className="discount-badge">-{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%</span>}
                <div className="action-btn">
                  <button
                    onClick={() =>
                      isWishlisted
                        ? removeFromWishlist(item.id)
                        : addToWishlist(item)
                    }
                    className="icon-btn"
                  >
                    {isWishlisted ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FiHeart />
                    )}
                  </button>
                  <button onClick={() => handleClick(item)} className="icon-btn">
                    <FiEye />
                  </button>
                </div>
                <img src={item.img} alt={item.title} className="related-img" />
                <div>
                  <button onClick={() => addToCart(item)} className="addcart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div >
                <h3 className="related-title mb-2">{item.title}</h3>
                <p className="related-price mb-2">
                  ${item.price} {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                </p>
                <p className="related-rating">⭐⭐⭐⭐⭐ ({item.reviews})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
