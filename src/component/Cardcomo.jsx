import React, { useState } from 'react';
import cls from './../assets/cls.wav'; // Replace with the actual path to your audio file

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
        <div className="card mb-4 shadow-sm" style={{ width: 'auto', height: '28rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '180px', width: '100%' }}>
                <img className="card-img-top" src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="card-body d-flex flex-column" style={{ paddingBottom: '10px' }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between">
                    <p>₹{price}</p>
                    <div className="d-flex">
                        <button onClick={decreaseQuantity} className="btn btn-outline-danger mx-1">-</button>
                        <p className="my-2">{quantity}</p>
                        <button onClick={increaseQuantity} className="btn btn-outline-success mx-1">+</button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={handleAddToCart} className="btn btn-success">Add to Cart</button>
                    <div className="d-flex">
                        <button onClick={onPrevious} className="btn btn-outline-primary mx-1">Previous</button>
                        <button onClick={onNext} className="btn btn-outline-primary mx-1">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardcomo;