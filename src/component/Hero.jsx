import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';

const Hero = () => {
};

const ProductCard = ({ name, image, rating, originalPrice, discountedPrice, phoneNumber }) => {
  return (
    <div style={cardStyles.card}>
      <img src={image} alt={name} style={cardStyles.image} />
      <h4>{name}</h4>
      <p>Rating: {rating}⭐</p>
      <p><s>₹{originalPrice}</s> ₹{discountedPrice}</p>
      <Button variant="success">Buy Now</Button>
    </div>
  );
};

const App = () => {
  const products = [
    { name: 'Honey Jar 1', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.5, originalPrice: 500, discountedPrice: 450, phoneNumber: '7080981033' },
    { name: 'Honey Jar 2', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.0, originalPrice: 600, discountedPrice: 550, phoneNumber: '7080981033' },
    { name: 'Honey Jar 3', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 3.5, originalPrice: 450, discountedPrice: 400, phoneNumber: '7080981033' },
    { name: 'Honey Jar 4', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.8, originalPrice: 700, discountedPrice: 650, phoneNumber: '7080981033' },
    { name: 'Honey Jar 5', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.8, originalPrice: 700, discountedPrice: 650, phoneNumber: '7080981033' },
  ];

  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Speed of the transition
    slidesToShow: 1, // Number of slides shown at once
    slidesToScroll: 1, // Number of slides moved per scroll
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Speed of the autoplay
  };

  return (
    <div>
      <Hero />
      <Slider {...settings}>
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Hero Styles
const heroStyles = {
  heroSection: {
    width: '100%',
    height: '60vh',
    backgroundImage: 'url(https://via.placeholder.com/1500x600)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
  },
  heroContent: {
    maxWidth: '800px',
    textAlign: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1.25rem',
    marginBottom: '20px',
    fontWeight: '300',
  },
  button: {
    fontSize: '1.1rem',
    padding: '10px 25px',
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
    fontWeight: 'bold',
  },
};

// Product Card Styles
const cardStyles = {
  card: {
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    margin: '20px',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default App;

