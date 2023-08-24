import React from "react";
import arrow from "../../img/openfilter.png";

function ListMebel() {
  const [open, setOpen] = React.useState(false);
  const [itemMenu, setItemMenu] = React.useState(0);

  const [openObj, setOpenObj] = React.useState(false);
  const [itemObjMenu, setItemObjMenu] = React.useState(0);

  const listMebel = ["Мягкая мебель", "Шкафы", "Столы"];

  const allMebel = ["cushionedFurniture", "closet", "table"];

  const mebelObj = {
    cushionedFurniture: ["Диваны", "Детские диваны", "Двуспальные диваны"],
    closet: ["Комод", "Шкаф", "Буфет"],
    table: ["Письменный стол", "Журнальный стол", "Стол школьника "],
  };

  const viewMebel = allMebel[itemMenu];
  const mainArray = mebelObj[viewMebel];

  const onClickItemMenu = (i) => {
    setItemMenu(i);
    setOpen(false);
  };

  const onClickLinkMenu = (i) => {
    setItemObjMenu(i);
    setOpenObj(false);
  };

  return (
    <div className="filter__popUp">
      {/* Меню разделов мебели */}

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

      {/* Подменю видов мебели */}

      <div className="popup__list flex">
        <div onClick={() => setOpenObj(!openObj)} className="popup__list--wrap">
          <p className="flex">{mainArray[itemObjMenu]}</p>
          <img
            src={arrow}
            className={openObj ? "transImg" : ""}
            alt="Открыть список"
          />
        </div>

        <ul className={openObj ? "open" : ""}>
          {mainArray.map((item, i) =>
            mainArray[itemObjMenu] === item ? (
              ""
            ) : (
              <li className="flex" key={i} onClick={() => onClickLinkMenu(i)}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListMebel;
