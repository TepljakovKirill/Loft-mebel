import React from "react";
import arrow from "../../img/openfilter.png";
import MebelLink from "./MebelLink";

function ListMebel() {
  const [open, setOpen] = React.useState(false);
  const [itemMenu, setItemMenu] = React.useState(0);
  const listMebel = ["Мягкая мебель", "Шкафы", "Столы"];

  const onClickItemMenu = (i) => {
    setItemMenu(i);
    setOpen(false);
  };

  return (
    <div className="filter__popUp">
      <div className="popup__list flex">
        <div onClick={() => setOpen(!open)} className="popup__list--wrap">
          <p className="flex">{listMebel[itemMenu]}</p>
          <img
            src={arrow}
            className={open ? "transImg" : ""}
            alt="Открыть список"
          />
        </div>

        <ul className={open ? "open" : ""}>
          {listMebel.map((item, i) =>
            listMebel[itemMenu] === item ? (
              ""
            ) : (
              <li className="flex" key={i} onClick={() => onClickItemMenu(i)}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <MebelLink counter={itemMenu} />
    </div>
  );
}

export default ListMebel;
