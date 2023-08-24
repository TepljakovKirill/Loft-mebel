import React from "react";
import Bestsellers from "../../Components/Bestsellers/Bestsellers";
import LivingRooms from "./livingRooms";

export const SearchContext = React.createContext();

function Catalog() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="container">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="container__wrap flex">
          <div className="filter">
            <p className="filter__title">Раздел</p>
            <LivingRooms />
            <p className="filter__title">Цена</p>
          </div>
          <div className="cards">
            <Bestsellers />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default Catalog;
