import React, { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const reviews = [
  {
    name: "Amit Sharma",
    text: "Excellent product quality! Highly recommended.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    text: "Good service but delivery was a bit delayed.",
    rating: 4
  },
  {
    name: "Ravi Kumar",
    text: "Affordable prices and quick response from support.",
    rating: 5
  },
  {
    name: "Priya Singh",
    text: "Loved the variety of products available!",
    rating: 5
  },
  {
    name: "Mohit Verma",
    text: "Had some issues but customer support resolved them quickly.",
    rating: 4
  },
  {
    name: "Neha Jain",
    text: "Fast delivery and great packaging.",
    rating: 5
  },
];

function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <h2 className="text-center">Customer Reviews</h2>
      <Carousel activeIndex={index} onSelect={setIndex} interval={null}>
        {reviews.map((review, idx) => (
          <Carousel.Item key={idx}>
            <div className="text-center">
              <h5>{review.name}</h5>
              <p>{review.text}</p>
              <p>Rating: {'⭐'.repeat(review.rating)}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Reviews;
