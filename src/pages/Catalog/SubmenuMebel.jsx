import React from "react";
import arrow from "../../img/openfilter.png";

function MebelLink(counter) {
  const [open, setOpen] = React.useState(false);
  const [itemMenu, setItemMenu] = React.useState(0);

  // const linkMebel = [cushionedFurniture, closet, table];

  const cushionedFurniture = ["Диваны", "Детские диваны", "Двуспальные диваны"];
  // const closet = ["Комод", "Шкаф", "Буфет"];
  // const table = ["Письменный стол", "Журнальный стол", "Стол школьника "];

  const onClickItemMenu = (i) => {
    setItemMenu(i);
    setOpen(false);
  };

  return (
    <div className="filter__popUp">
      <div className="popup__list flex">
        <div onClick={() => setOpen(!open)} className="popup__list--wrap">
          <p className="flex">{cushionedFurniture[counter]}</p>
          <img
            src={arrow}
            className={open ? "transImg" : ""}
            alt="Открыть список"
          />
        </div>

        <ul className={open ? "open" : ""}>
          {cushionedFurniture.map((item, i) =>
            cushionedFurniture[itemMenu] === item ? (
              ""
            ) : (
              <li className="flex" key={i} onClick={() => onClickItemMenu(i)}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default MebelLink;
