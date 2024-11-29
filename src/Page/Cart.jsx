import React, { useState } from 'react';
import { useParams } from "react-router-dom";

const Cart = ({ cartItems, setCartItems, onRetry }) => {
    const { text } = useParams(); // Get the text parameter from the URL
    const phoneNumbers = [ "9565591014","7080981033"]; // Multiple phone numbers
    const [name, setName] = useState(''); // Store user's name

    const orderAllItems = () => {
        if (!name) {
            alert("Please enter your name.");
            return;
        }

        const message = cartItems.map(item => `${item.quantity} x ${item.title} for ₹${item.price * item.quantity}`).join("\n");
        const fullMessage = `Hello, my name is ${name}.\nTable No: ${text}\nI would like to order:\n${message}\nTotal: ₹${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}`;

        // Send message to all phone numbers one by one
        const sendMessagesSequentially = async () => {
            for (let phone of phoneNumbers) {
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`, "_blank");
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before the next message
            }
        };

        sendMessagesSequentially(); // Call the function to send messages
    };

    const removeItem = (title) => {
        setCartItems(prevCart => prevCart.filter(item => item.title !== title));
    };

    const handleRetryAndRemove = (item) => {
        onRetry(item); // Call the retry function
        removeItem(item.title); // Remove the item after retrying
    };

    return (
        <div>
            <h3>Cart</h3>
            {cartItems.length === 0 ? (
               <div>
                 <p>Your cart is empty.</p>
                 <p>Your table : {text}</p> {/* Display the URL parameter */}
               </div>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.quantity} x {item.title} - ₹{item.price * item.quantity}
                                <button onClick={() => removeItem(item.title)} className="btn btn-danger mx-2">Remove</button>
                                <button onClick={() => handleRetryAndRemove(item)} className="btn btn-secondary">Retry</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>

                    {/* Input section for name */}
                    <div style={{ margin: '10px 0' }}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control mb-2"
                        />
                    </div>

                    <p>Table No: {text}</p> {/* Display the table number from URL parameter */}

                    <button onClick={orderAllItems} className="btn btn-success">Order Now</button>
                </>
            )}
        </div>
    );
};

export default Cart;
