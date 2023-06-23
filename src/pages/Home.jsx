import React from "react";

import Carousel from "../Components/Carousel";
import Bestsellers from "../Components/Bestsellers/Bestsellers";

const Home = () => {
  return (
    <div className="wrapper">
      <Carousel />
      <Bestsellers />
    </div>
  );
};

export default Home;
