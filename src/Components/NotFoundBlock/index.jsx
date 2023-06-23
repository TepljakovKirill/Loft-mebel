import React from "react";
import style from "./notFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div>
      <p className={style.descr}>
        К сожалению такая страница не найдена в этом интернет-магазине :(
      </p>
    </div>
  );
};

export default NotFoundBlock;
