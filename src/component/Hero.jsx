import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const HeroSection = () => {
  const settings = {
    dots: true,              // Neeche navigation dots dikhaye
    infinite: true,          // Continuous loop
    autoplay: true,          // Automatic sliding
    autoplaySpeed: 3000,     // Delay between slides
    speed: 1000,             // Slide transition speed
    slidesToShow: 1,         // Ek slide at a time
    slidesToScroll: 1,       // Ek scroll per slide
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",      // Position dots 20px from bottom
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          margin: "0 5px",
          cursor: "pointer"
        }}
      ></div>
    )
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", marginBottom: "20px" }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Exclusive Offer 1"
            style={{ width: "100%", height: "400px",objectFit: "cover",backgroundSize:'cover'}}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/29042354/pexels-photo-29042354/free-photo-of-delicious-crispy-chicken-burger-with-fries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Exclusive Offer 2"
            style={{ width: "100%", height: "400px",objectFit: "cover",backgroundSize:'cover' }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/28445589/pexels-photo-28445589/free-photo-of-delicious-homemade-paneer-momos-with-chutney.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Exclusive Offer 3"
            style={{ width: "100%", height: "400px",objectFit: "cover",backgroundSize:'cover' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
