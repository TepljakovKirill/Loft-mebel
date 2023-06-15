import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bunner1 from "../img/BunnerSlider/bunner-1.jpg";
import bunner2 from "../img/BunnerSlider/bunner-2.jpg";
import bunner3 from "../img/BunnerSlider/bunner-3.jpg";
import "../scss/components/_carouselStyle.scss";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel__card">
            <img src={bunner1} alt="баннер" />
            <div className="card-content">
              <h1>
                Loft
                <br /> мебель
              </h1>
              <p>Современная и удобная мебель в Анапе</p>
              <button>смотреть каталог</button>
            </div>
          </div>
          <div className="carousel__card">
            <img src={bunner2} alt="баннер" />
          </div>
          <div className="carousel__card">
            <img src={bunner3} alt="баннер" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
