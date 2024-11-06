import React from 'react';
import ProductCard from './component/Cardcomo';  // Assuming Cardcomo is the file with ProductCard
import Hero from './component/Hero.jsx';  // Assuming Cardcomo is the file with ProductCard

function App() {
  // Define product data
  const products = [
    {
      name: 'Honey Jar 1',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 4.5,
      originalPrice: 500,
      discountedPrice: 450,
      phoneNumber: '7080981033',
    },
    {
      name: 'Honey Jar 2',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 4.0,
      originalPrice: 600,
      discountedPrice: 550,
      phoneNumber: '7080981033',
    },
    {
      name: 'Honey Jar 3',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 3.5,
      originalPrice: 450,
      discountedPrice: 400,
      phoneNumber: '7080981033',
    },
    {
      name: 'Honey Jar 4',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 4.8,
      originalPrice: 700,
      discountedPrice: 650,
      phoneNumber: '7080981033',
    },
    {
      name: 'Honey Jar 5',
      image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
      rating: 4.8,
      originalPrice: 700,
      discountedPrice: 650,
      phoneNumber: '7080981033',
    }
  ];

  return (
    <div>
      <Hero/>
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard
            name={product.name}
            image={product.image}
            rating={product.rating}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            phoneNumber={product.phoneNumber}
          />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
