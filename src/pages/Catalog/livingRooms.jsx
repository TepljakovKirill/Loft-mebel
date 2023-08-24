import React from "react";
import arrow from "../../img/openfilter.png";
import ListMebel from "./ListMebel";

function LivingRooms() {
  const [open, setOpen] = React.useState(false);
  const [itemMenu, setItemMenu] = React.useState(0);

  const menu = [
    "Гостинные",
    "Спальни",
    "Кухни",
    "Прихожие",
    "Офисная мебель",
    "Детская",
  ];

  const onClickItemMenu = (i) => {
    setItemMenu(i);
    setOpen(false);
    // console.log(i);
  };

  return (
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
              <li className="flex" key={i} onClick={() => onClickItemMenu(i)}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <ListMebel />
    </div>
  );
}

export default LivingRooms;
