import React, { useState } from 'react';
import Menu from './Page/Menu';
import Navvbar from './component/Navvbar';
import Cart from './Page/Cart'; // Import Cart component
import Hero from './component/Hero'
import { Offcanvas, Button } from 'react-bootstrap';
import Footer from './component/Footer';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    // Toggle cart visibility
    const toggleCart = () => setShowCart(!showCart);

    // Add to cart function
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

    return (
       <div>
         <div style={{display:'flex', flexWrap:"wrap", justifyContent:'center'}} >
            {/* Navbar with cart items count and toggle function */}
            <Navvbar cartItems={cartItems} toggleCart={toggleCart} />
            <Hero/>
            
            <div style={{ width: '300px' }}>
                {/* Main Content */}
                <Menu addToCart={addToCart} />
            </div>

            {/* Offcanvas to show Cart */}
            <Offcanvas show={showCart} onHide={toggleCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Cart cartItems={cartItems} /> {/* Display Cart Component */}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
            <Footer/>

       </div>
    );
}

export default App;
