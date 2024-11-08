import React from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    { name: 'Honey Jar 1', image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg', rating: 4.5, originalPrice: 500, discountedPrice: 450, phoneNumber: '7080981033' },
    { name: 'Honey Jar 2', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.0, originalPrice: 600, discountedPrice: 550, phoneNumber: '7080981033' },
    { name: 'Honey Jar 3', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 3.5, originalPrice: 450, discountedPrice: 400, phoneNumber: '7080981033' },
    { name: 'Honey Jar 4', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.8, originalPrice: 700, discountedPrice: 650, phoneNumber: '7080981033' },
    { name: 'Honey Jar 5', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg', rating: 4.8, originalPrice: 700, discountedPrice: 650, phoneNumber: '7080981033' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => <ul style={appStyles.slickDots}>{dots}</ul>,
  };

  return (
    <div style={appStyles.container}>
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

const cardStyles = {
  card: {
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    margin: '20px',
    backgroundColor: 'white',
    overflow: 'hidden', // Prevent any overflow within card
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

const appStyles = {
  container: {
    overflow: 'hidden', // Ensure no scrolling outside the container
  },
  slickDots: {
    position: 'absolute',
    bottom: '20px', // Position dots at the bottom of the container
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  }
};

export default App;
