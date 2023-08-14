import React from "react";
import arrow from "../../img/openfilter.png";

function MebelLink(props) {
  const [open, setOpen] = React.useState(false);
  const [itemMenu, setItemMenu] = React.useState(0);

  const allMebel = ["cushionedFurniture", "closet", "table"];

  const mebelObj = {
    cushionedFurniture: ["Диваны", "Детские диваны", "Двуспальные диваны"],
    closet: ["Комод", "Шкаф", "Буфет"],
    table: ["Письменный стол", "Журнальный стол", "Стол школьника "],
  };

  const viewMebel = allMebel[props.counter];
  const mainArray = mebelObj[viewMebel];

  const onClickItemMenu = (i) => {
    setItemMenu(i);
    setOpen(false);
  };

  return (
    <div className="filter__popUp">
      <div className="popup__list flex">
        <div onClick={() => setOpen(!open)} className="popup__list--wrap">
          <p className="flex">{mainArray[itemMenu]}</p>
          <img
            src={arrow}
            className={open ? "transImg" : ""}
            alt="Открыть список"
          />
        </div>

        <ul className={open ? "open" : ""}>
          {mainArray.map((item, i) =>
            mainArray[itemMenu] === item ? (
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
