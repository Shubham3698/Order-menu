import React, { useState, useEffect } from 'react';
import Cardcomo from './../component/Cardcomo';
import bug from './../assets/bug.gif';
import './Menu.css'

const Menu = ({ addToCart, highlightedItem }) => {
    const categoryData = {
        soups: [
            { title: "Tomato Soup", description: "Classic tomato soup with basil.", price: 150, image: "https://images.pexels.com/photos/12437581/pexels-photo-12437581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { title: "Chicken Soup", description: "Hearty chicken soup.", price: 200, image: "" },
            { title: "Mushroom Soup", description: "Creamy mushroom soup.", price: 180, image: "mushroom_soup.jpg" }
        ],
        burgers: [
            { title: "Veggie Burger", description: "A healthy veggie burger.", price: 120, image: bug },
            { title: "Chicken Burger", description: "Grilled chickenburger toppings.", price: 160, image: "chicken_burger.jpg" },
            { title: "Cheese Burger", description: "Cheesy burger double cheese.", price: 180, image: "cheese_burger.jpg" }
        ],
        momos: [
            { title: "Veg Momo", description: "Steamed vegetable momos.", price: 100, image: "https://images.pexels.com/photos/28445589/pexels-photo-28445589/free-photo-of-delicious-homemade-paneer-momos-with-chutney.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { title: "Chicken Momo", description: "Steamed chicken momos.", price: 130, image: "chicken_momo.jpg" },
            { title: "Paneer Momo", description: "Delicious paneer momos.", price: 150, image: "paneer_momo.jpg" }
        ],
        pizzas: [
            { title: "Margherita Pizza", description: "Classic pizza with mozzarella and basil.", price: 250, image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { title: "Pepperoni Pizza", description: "Spicy pepperoni on a cheese base.", price: 300, image: "pepperoni_pizza.jpg" },
            { title: "Veggie Pizza", description: "Loaded with fresh vegetables.", price: 280, image: "veggie_pizza.jpg" }
        ]
    };

    const [currentSoupIndex, setCurrentSoupIndex] = useState(0);
    const [currentBurgerIndex, setCurrentBurgerIndex] = useState(0);
    const [currentMomoIndex, setCurrentMomoIndex] = useState(0);
    const [currentPizzaIndex, setCurrentPizzaIndex] = useState(0);

    useEffect(() => {
        if (highlightedItem) {
            const category = Object.keys(categoryData).find(cat =>
                categoryData[cat].some(item => item.title === highlightedItem.title)
            );

            if (category === 'soups') {
                setCurrentSoupIndex(categoryData.soups.findIndex(item => item.title === highlightedItem.title));
            } else if (category === 'burgers') {
                setCurrentBurgerIndex(categoryData.burgers.findIndex(item => item.title === highlightedItem.title));
            } else if (category === 'momos') {
                setCurrentMomoIndex(categoryData.momos.findIndex(item => item.title === highlightedItem.title));
            } else if (category === 'pizzas') {
                setCurrentPizzaIndex(categoryData.pizzas.findIndex(item => item.title === highlightedItem.title));
            }
        }
    }, [highlightedItem]);

    const handleNext = (category) => {
        if (category === 'soups') {
            setCurrentSoupIndex((prevIndex) => (prevIndex + 1) % categoryData.soups.length);
        } else if (category === 'burgers') {
            setCurrentBurgerIndex((prevIndex) => (prevIndex + 1) % categoryData.burgers.length);
        } else if (category === 'momos') {
            setCurrentMomoIndex((prevIndex) =>(prevIndex + 1) % categoryData.momos.length);
        } else if (category === 'pizzas') {
            setCurrentPizzaIndex((prevIndex) => (prevIndex + 1) % categoryData.pizzas.length);
        }
    };

    const handlePrevious = (category) => {
        if (category === 'soups') {
            setCurrentSoupIndex((prevIndex) => (prevIndex - 1 + categoryData.soups.length) % categoryData.soups.length);
        } else if (category === 'burgers') {
            setCurrentBurgerIndex((prevIndex) => (prevIndex - 1 + categoryData.burgers.length) % categoryData.burgers.length);
        } else if (category === 'momos') {
            setCurrentMomoIndex((prevIndex) => (prevIndex - 1 + categoryData.momos.length) % categoryData.momos.length);
        } else if (category === 'pizzas') {
            setCurrentPizzaIndex((prevIndex) => (prevIndex - 1 + categoryData.pizzas.length) % categoryData.pizzas.length);
        }
    };

    return (
        <div className="container my-5">
           

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

            <div style={{width:'400px'}} className="mb-5">
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

            <div style={{width:'400px'}} className="mb-5">
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

            <div className="mb-5">
                <h2 className="text-center">Pizzas</h2>
                <Cardcomo
                    title={categoryData.pizzas[currentPizzaIndex].title}
                    description={categoryData.pizzas[currentPizzaIndex].description}
                    price={categoryData.pizzas[currentPizzaIndex].price}
                    image={categoryData.pizzas[currentPizzaIndex].image}
                    addToCart={addToCart}
                    onPrevious={() => handlePrevious('pizzas')}
                    onNext={() => handleNext('pizzas')}
                />
            </div>
        </div>
    );
};

export default Menu;