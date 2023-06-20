import React from "react";

import discount from "../img/discount.png";
import parameter from "../img/parameter.png";

function Card({
  id,
  imgUrl,
  title,
  descr,
  sizeWidth,
  sizeDepth,
  sizeHeight,
  price,
  oldPrice,
  discountPrice,
}) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickFavorites = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div key={id} className="card">
      <img className="card__img" src={imgUrl} alt="Продукт" />
      <div className="card__description">
        <p className="title">{title}</p>
        <p className="descr">{descr}</p>
        <div className="price-block flex">
          <p className="price">
            {price
              .toString()
              .split(/(?=(?:\d{3})+(?:\.|$))/g)
              .join(" ")}
            ₽
          </p>
          {oldPrice ? (
            <p className="old-price">
              {oldPrice
                .toString()
                .split(/(?=(?:\d{3})+(?:\.|$))/g)
                .join(" ")}
              ₽
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="card__size">
        <p className="size-title">Размеры</p>
        <div className="size-block flex">
          <div className="size">
            <p className="size__title">ширина</p>
            <p className="size__width">{sizeWidth}см</p>
          </div>
          <img src={parameter} alt="Размер" />
          <div className="size">
            <p className="size__title">глубина</p>
            <p className="size__width">{sizeDepth}см</p>
          </div>
          <img src={parameter} alt="Размер" />
          <div className="size">
            <p className="size__title">высота</p>
            <p className="size__width">{sizeHeight}см</p>
          </div>
        </div>
        <button>Добавить в корзину</button>
      </div>
      <svg
        onClick={onClickFavorites}
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill={isFavorite ? "#E92D2D" : "none"}
      >
        <path
          d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z"
          stroke={isFavorite ? "none" : "black"}
        />
      </svg>
      {discountPrice ? (
        <div className="discount-block flex">
          <img src={discount} alt="Скидка" />
          <p className="discount">{discountPrice}%</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
