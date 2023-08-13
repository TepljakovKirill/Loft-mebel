import React from "react";
import Bestsellers from "../../Components/Bestsellers/Bestsellers";
import LivingRooms from "./livingRooms";

function Catalog() {

  return (
    <div className="container">
      <div className="container__wrap flex">
        <div className="filter">
          <p className="filter__title">Раздел</p>
          <LivingRooms />
        </div>
        <div className="cards"><Bestsellers /></div>
      </div>
    </div>
  );
}

export default Catalog;
