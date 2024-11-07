// App.jsx
import React, { useState } from 'react';
import ProductCard from './component/Cardcomo';
import Hero from './component/Hero';

function App() {
  const products = [
    {
      name: 'Honey Jar 1',
      image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg',
      rating: 4.5,
      originalPrice: 500,
      discountedPrice: 450,
      phoneNumber: '919876543210',
    },
    {
      name: 'Honey Jar 2',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 4.0,
      originalPrice: 600,
      discountedPrice: 550,
      phoneNumber: '919876543210',
    },
    {
      name: 'Honey Jar 3',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 3.5,
      originalPrice: 450,
      discountedPrice: 400,
      phoneNumber: '919876543210',
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const goToNextProduct = () => {
    setCurrentProductIndex((currentProductIndex + 1) % products.length);
  };

  const goToPreviousProduct = () => {
    setCurrentProductIndex((currentProductIndex - 1 + products.length) % products.length);
  };

  return (
    <div>
      <Hero />
      <br />
      <ProductCard
        {...products[currentProductIndex]}
        goToNextProduct={goToNextProduct}
        goToPreviousProduct={goToPreviousProduct}
      />
      br
      <ProductCard
        {...products[currentProductIndex]}
        goToNextProduct={goToNextProduct}
        goToPreviousProduct={goToPreviousProduct}
      />
      <ProductCard
        {...products[currentProductIndex]}
        goToNextProduct={goToNextProduct}
        goToPreviousProduct={goToPreviousProduct}
      />
    </div>
  );
}

export default App;
