import React, { useState } from 'react';
import Menu from './Page/Menu';
import Navvbar from './component/Navvbar';
import Cart from './Page/Cart';
import Hero from './component/Hero';
import { Offcanvas } from 'react-bootstrap';
import Footer from './component/Footer';
import CustomerReview from './component/CustomerReview';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom"; // useParams import karo


function App() {
    const { text } = useParams(); // URL se parameter capture karega
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [highlightedItem, setHighlightedItem] = useState(null); // New state for retry functionality

    const toggleCart = () => setShowCart(!showCart);

    const addToCart = (item) => {
        setCartItems(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.title === item.title);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.title === item.title
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: item.quantity }];
        });
    };

    const handleRetry = (item) => {
        setHighlightedItem(item); // Set the item to highlight in Menu
        setShowCart(false); // Close the cart to show Menu
    };

    return (
        <div>
            <div style={{display:'flex', flexWrap:"wrap", justifyContent:'center'}}>
                <Navvbar cartItems={cartItems} toggleCart={toggleCart} />
                <Hero/>

                <div style={{ width: '300px' }}>
                    {/* Pass highlightedItem to Menu for retry functionality */}
                    <Menu addToCart={addToCart} highlightedItem={highlightedItem} />
                </div>

                <CustomerReview/>

                <Offcanvas show={showCart} onHide={toggleCart} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Cart cartItems={cartItems} setCartItems={setCartItems} onRetry={handleRetry} />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <Footer/>
        </div>
    );

}

function Main() {
    return (
      <Router>
        <Routes>
          {/* Dynamic route that captures any text after the '/' */}
          <Route path="/:text" element={<App />} />
          <Route path="/" element={<App />} /> {/* Default route for '/' */}
        </Routes>
      </Router>
    );
  }

export default Main;