import React, { useState } from "react";
import cls from "./../assets/cls.wav"; // Path to your audio file
import "./Cardcomo.css"; // Import the CSS file for styling

const Cardcomo = ({ title, description, price, image, onPrevious, onNext, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    // Play sound effect
    const audio = new Audio(cls);
    audio.play();
    
    // Add item to cart
    addToCart({ title, price, quantity });
  };

  return (
    <div className="card-container">
      <div className="image-container">
        <img className="product-image" src={image} alt={title} />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <p className="price">₹{price}</p>
          <div className="quantity-controls">
            <button onClick={decreaseQuantity} className="quantity-btn decrement">
              <i className="fas fa-minus"></i>
            </button>
            <p className="quantity-display">{quantity}</p>
            <button onClick={increaseQuantity} className="quantity-btn increment">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="action-buttons">
          {/* Previous Icon */}
          <button onClick={onPrevious} className="nav-btn previous">
            <i className="fas fa-chevron-left"></i>
          </button>
          {/* Add to Cart (Changed icon to a restaurant-related one) */}
          <button onClick={handleAddToCart} className="cart-btn">
            <i className="fas fa-utensils"></i> Add to Order
          </button>
          {/* Next Icon */}
          <button onClick={onNext} className="nav-btn next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardcomo;
