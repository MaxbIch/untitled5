import React from "react";
import Slider from "react-slick";


function Popular() {
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

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <h2 className="slide-title">Первый слайд</h2>
        </div>
        <div className="slide">
          <h2 className="slide-title">Второй слайд</h2>
        </div>
        <div className="slide">
          <h2 className="slide-title">Третий слайд</h2>
        </div>
      </Slider>
    </div>
  );
}

export default Popular;