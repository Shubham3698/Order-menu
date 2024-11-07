import React, { useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4, originalPrice: 500, discountedPrice: 300, phoneNumber: '919876543210' },
  { id: 2, name: 'Product 2', image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg', rating: 3.5, originalPrice: 600, discountedPrice: 350, phoneNumber: '919876543210' },
  { id: 3, name: 'Product 3', image: '/path/to/image3.jpg', rating: 5, originalPrice: 800, discountedPrice: 500, phoneNumber: '919876543210' },
  // Add more products as needed
];

const ProductCard = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products[currentProductIndex];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleOrderNow = () => {
    const message = `Hello, I would like to order the following product:\n\nName: ${product.name}\nQuantity: ${quantity}\nPrice: ₹${product.discountedPrice} each`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${product.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const totalPrice = product.discountedPrice * quantity;

  const goToNextProduct = () => {
    setCurrentProductIndex((currentProductIndex + 1) % products.length);
    setQuantity(1);
  };

  const goToPreviousProduct = () => {
    setCurrentProductIndex((currentProductIndex - 1 + products.length) % products.length);
    setQuantity(1);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} alt="Product Image" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>

          <div className="mb-3">
            <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
              ₹{product.originalPrice}
            </span>
            <span className="text-primary">₹{product.discountedPrice}</span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <span className="me-2">Rating:</span>
            <span>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < Math.round(product.rating) ? 'gold' : 'lightgray'} />
              ))}
            </span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <span className="me-3">Quantity:</span>
            <ButtonGroup>
              <Button variant="outline-secondary" onClick={decreaseQuantity}>-</Button>
              <Button variant="light" disabled>{quantity}</Button>
              <Button variant="outline-secondary" onClick={increaseQuantity}>+</Button>
            </ButtonGroup>
          </div>

          <div className="mb-3">
            <strong>Total: ₹{totalPrice}</strong>
          </div>

          <Button variant="primary" onClick={handleOrderNow}>Order Now</Button>

          {/* Next and Back Buttons */}
          <div className="d-flex justify-content-between mt-3">
            <Button variant="outline-secondary" onClick={goToPreviousProduct}>Back</Button>
            <Button variant="outline-secondary" onClick={goToNextProduct}>Next</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
