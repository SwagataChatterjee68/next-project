'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import "./productDetails.css";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedItems, setRelatedItems] = useState([]);

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
          <h1 className="product-title">{product.title}</h1>
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

          <div className="quantity-buy">
            <div className="qty-box">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="qty-btn">-</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="qty-btn">+</button>
            </div>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="related-section">
        <div className="header">
          <div className="section-header-bar"></div>
          <p>Related Items</p>
        </div>
        <div className="related-grid">
          {products.map((item) => (
            <div key={item.id} className="related-card">
              {item.oldPrice && <span className="discount-badge">-{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%</span>}
              <img src={item.img} alt={item.title} className="related-img" />
              <h3 className="related-title">{item.title}</h3>
              <p className="related-price">
                ${item.price} {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
              </p>
              <p className="related-rating">⭐⭐⭐⭐⭐ ({item.reviews})</p>
              <button className="cart-btn">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
