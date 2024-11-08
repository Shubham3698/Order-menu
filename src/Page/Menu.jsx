import React, { useState } from 'react';
import Cardcomo from './../component/Cardcomo';
import Cart from './../Page/Cart';

const Menu = ({ addToCart }) => {
    const categoryData = {
        soups: [
            { title: "Tomato Soup", description: "Classic tomato soup with basil.", price: 150, image: "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970__340.jpg" },
            { title: "Chicken Soup", description: "Hearty chicken soup.", price: 200, image: "chicken_soup.jpg" },
            { title: "Mushroom Soup", description: "Creamy mushroom soup.", price: 180, image: "mushroom_soup.jpg" }
        ],
        burgers: [
            { title: "Veggie Burger", description: "A healthy veggie burger.", price: 120, image: "veggie_burger.jpg" },
            { title: "Chicken Burger", description: "Grilled chicken burger with toppings.", price: 160, image: "chicken_burger.jpg" },
            { title: "Cheese Burger", description: "Cheesy burger with double cheese.", price: 180, image: "cheese_burger.jpg" }
        ],
        momos: [
            { title: "Veg Momo", description: "Steamed vegetable momos.", price: 100, image: "veg_momo.jpg" },
            { title: "Chicken Momo", description: "Steamed chicken momos.", price: 130, image: "chicken_momo.jpg" },
            { title: "Paneer Momo", description: "Delicious paneer momos.", price: 150, image: "paneer_momo.jpg" }
        ]
    };

    const [cart, setCart] = useState([]);

    const [currentSoupIndex, setCurrentSoupIndex] = useState(0);
    const [currentBurgerIndex, setCurrentBurgerIndex] = useState(0);
    const [currentMomoIndex, setCurrentMomoIndex] = useState(0);

    const handleNext = (category) => {
        if (category === 'soups') {
            setCurrentSoupIndex((prevIndex) => (prevIndex + 1) % categoryData.soups.length);
        } else if (category === 'burgers') {
            setCurrentBurgerIndex((prevIndex) => (prevIndex + 1) % categoryData.burgers.length);
        } else if (category === 'momos') {
            setCurrentMomoIndex((prevIndex) => (prevIndex + 1) % categoryData.momos.length);
        }
    };

    const handlePrevious = (category) => {
        if (category === 'soups') {
            setCurrentSoupIndex((prevIndex) => (prevIndex - 1 + categoryData.soups.length) % categoryData.soups.length);
        } else if (category === 'burgers') {
            setCurrentBurgerIndex((prevIndex) => (prevIndex - 1 + categoryData.burgers.length) % categoryData.burgers.length);
        } else if (category === 'momos') {
            setCurrentMomoIndex((prevIndex) => (prevIndex - 1 + categoryData.momos.length) % categoryData.momos.length);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Special Menu</h1>

            <div className="mb-5">
                <h2 className="text-center">Soups</h2>
                <Cardcomo
                    title={categoryData.soups[currentSoupIndex].title}
                    description={categoryData.soups[currentSoupIndex].description}
                    price={categoryData.soups[currentSoupIndex].price}
                    image={categoryData.soups[currentSoupIndex].image}
                    addToCart={addToCart}
                    onPrevious={() => handlePrevious('soups')}
                    onNext={() => handleNext('soups')}
                />
            </div>

            <div className="mb-5">
                <h2 className="text-center">Burgers</h2>
                <Cardcomo
                    title={categoryData.burgers[currentBurgerIndex].title}
                    description={categoryData.burgers[currentBurgerIndex].description}
                    price={categoryData.burgers[currentBurgerIndex].price}
                    image={categoryData.burgers[currentBurgerIndex].image}
                    addToCart={addToCart}
                    onPrevious={() => handlePrevious('burgers')}
                    onNext={() => handleNext('burgers')}
                />
            </div>

            <div className="mb-5">
                <h2 className="text-center">Momos</h2>
                <Cardcomo
                    title={categoryData.momos[currentMomoIndex].title}
                    description={categoryData.momos[currentMomoIndex].description}
                    price={categoryData.momos[currentMomoIndex].price}
                    image={categoryData.momos[currentMomoIndex].image}
                    addToCart={addToCart}
                    onPrevious={() => handlePrevious('momos')}
                    onNext={() => handleNext('momos')}
                />
            </div>

            {/* Cart Component
            <Cart cartItems={cart} /> */}
        </div>
    );
};

export default Menu;
