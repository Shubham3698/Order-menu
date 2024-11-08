import React from 'react';
import { Card } from 'react-bootstrap'; // Importing Card component from react-bootstrap (optional, based on your usage)
import Soup from './../assets/Soup.jpg'

const FoodItem = ({ foodImage, foodName }) => {
  return (
    <div className="d-flex align-items-center">
      <div
        className="rounded-circle overflow-hidden"
        style={{
          width: '80px',
          height: '80px',
          marginRight: '15px',
        }}
      >
        <img
          src={Soup}
          alt={foodName}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <h5>Soup</h5>
      </div>
    </div>
  );
};

export default FoodItem;
