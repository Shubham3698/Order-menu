import React, { useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

// Accept product data as props
const ProductCard = ({ name, image, rating, originalPrice, discountedPrice, phoneNumber }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Function to handle the "Order Now" button click
  const handleOrderNow = () => {
    const message = `Hello, I would like to order the following product:\n\nName: ${name}\nQuantity: ${quantity}\nPrice: ₹${discountedPrice} each`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');  // Opens WhatsApp with the pre-filled message
  };

  // Calculate the total price
  const totalPrice = discountedPrice * quantity;

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt="Product Image" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          {/* Price Display */}
          <div className="mb-3">
            <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
              ₹{originalPrice}
            </span>
            <span className="text-primary">₹{discountedPrice}</span>
          </div>

          {/* Rating Display */}
          <div className="d-flex align-items-center mb-2">
            <span className="me-2">Rating:</span>
            <span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < Math.round(rating) ? 'gold' : 'lightgray'} />
              ))}
            </span>
          </div>

          {/* Quantity Control */}
          <div className="d-flex align-items-center mb-3">
            <span className="me-3">Quantity:</span>
            <ButtonGroup>
              <Button variant="outline-secondary" onClick={decreaseQuantity}>-</Button>
              <Button variant="light" disabled>{quantity}</Button>
              <Button variant="outline-secondary" onClick={increaseQuantity}>+</Button>
            </ButtonGroup>
          </div>

          {/* Total Price Display */}
          <div className="mb-3">
            <strong>Total: ₹{totalPrice}</strong>
          </div>

          {/* Order Button */}
          <Button variant="primary" onClick={handleOrderNow}>Order Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
