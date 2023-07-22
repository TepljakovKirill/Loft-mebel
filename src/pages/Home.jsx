import React from "react";

import Carousel from "../Components/Carousel";
import Bestsellers from "../Components/Bestsellers/Bestsellers";

const Home = () => {
  return (
    <div className="wrapper">
      <Carousel />
      <div className="container">
        <div className="bestsellers">
          <p className="bestsellers__title">Хиты продаж</p>
          <Bestsellers />
        </div>
      </div>
    </div>
  );
};

export default Home;
