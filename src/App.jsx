import React, { useState } from "react";
import Menu from "./Page/Menu";
import Navvbar from "./component/Navvbar";
import Cart from "./Page/Cart";
import Hero from "./component/Hero";
import { Offcanvas } from "react-bootstrap";
import Footer from "./component/Footer";
import CustomerReview from "./component/CustomerReview";
import Sthero from "./component/Sthero";
import Faq from "./component/Faq";

import { useParams } from "react-router-dom";

function App() {
  const { text } = useParams(); // Capture the text from the URL
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(null);

  const toggleCart = () => setShowCart(!showCart);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: item.quantity }];
    });
  };

  const handleRetry = (item) => {
    setHighlightedItem(item);
    setShowCart(false);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
      <Navvbar cartItems={cartItems} toggleCart={toggleCart} />
      <Hero />
      <Sthero />
      <Menu addToCart={addToCart} highlightedItem={highlightedItem} />
      <CustomerReview />
    
    

        <Offcanvas show={showCart} onHide={toggleCart} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              onRetry={handleRetry}
            />
          </Offcanvas.Body>
        </Offcanvas>
     
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
