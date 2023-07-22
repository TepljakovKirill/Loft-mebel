import React from "react";
import arrow from "../img/openfilter.png";
// import Bestsellers from "../Components/Bestsellers/Bestsellers";

function Catalog() {
  const [open, setOpen] = React.useState(false);
  const [itemMenu, setItemMenu] = React.useState(0);
  const menu = [
    "Кухни",
    "Спальни",
    "Гостинные",
    "Прихожие",
    "Офисная мебель",
    "Детская",
  ];

  const onClickItemMenu = (i) => {
    setItemMenu(i);
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="container__wrap flex">
        <div className="filter">
          <p className="filter__title">Раздел</p>
          <div className="filter__popUp">
            <div className="popup__list flex">
              <div onClick={() => setOpen(!open)} className="popup__list--wrap">
                <p className="flex">{menu[itemMenu]}</p>
                <img
                  src={arrow}
                  className={open ? "transImg" : ""}
                  alt="Открыть список"
                />
              </div>
              <ul className={open ? "open" : ""}>
                {menu.map((item, i) =>
                  menu[itemMenu] === item ? (
                    ""
                  ) : (
                    <li
                      className="flex"
                      key={i}
                      onClick={() => onClickItemMenu(i)}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="cards">{/* <Bestsellers /> */}</div>
      </div>
    </div>
  );
}

export default Catalog;
