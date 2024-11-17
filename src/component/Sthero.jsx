import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <div className="section flex" id="hero-section">
      <div className="text">
        <h1 className="primary">
          It's Not Just Food, <br />
          It's an <span>Experience</span>
        </h1>
        <p className="tertiary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
          provident dolorum. Voluptatum ducimus minima quasi unde, voluptatibus
          soluta eligendi. Enim, architecto autem.
        </p>
        <a href="#menu" className="btn">
          Explore Menu
        </a>
      </div>
      <div className="visual">
        <img
          src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/home-banner.png"
          alt="Home Banner"
        />
      </div>
    </div>
  );
};

export default HeroSection;
