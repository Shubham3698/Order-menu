import React from 'react';

const Cart = ({ cartItems, setCartItems, onRetry }) => {
    const phoneNumber = "7080981033";

    const orderAllItems = () => {
        const message = cartItems.map(item => `${item.quantity} x ${item.title} for ₹${item.price * item.quantity}`).join("\n");
        const fullMessage = `Hello,\nI would like to order:\n${message}\nTotal: ₹${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`, "_blank");
    };

    const removeItem = (title) => {
        setCartItems(prevCart => prevCart.filter(item => item.title !== title));
    };

    return (
        <div>
            <h3>Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.quantity} x {item.title} - ₹{item.price * item.quantity}
                                <button onClick={() => removeItem(item.title)} className="btn btn-danger mx-2">Remove</button>
                                <button onClick={() => onRetry(item)} className="btn btn-secondary">Retry</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    <button onClick={orderAllItems} className="btn btn-success">Order Now</button>
                </>
            )}
        </div>
    );
};

export default Cart;
