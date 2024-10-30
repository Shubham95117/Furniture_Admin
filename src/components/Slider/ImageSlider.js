import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";

// Import images from assets
import slide1 from "../Assets/HeroSlider1.png";
import slide2 from "../Assets/HeroSlider2.webp";
import slide3 from "../Assets/HeroSlider3.webp";

function ImageSlider() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  // Define images as an array of imported assets
  const images = [slide1, slide2, slide3];

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
