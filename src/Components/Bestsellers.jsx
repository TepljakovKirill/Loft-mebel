import React from "react";
import stul from "../img/product-1.jpg";
import parameter from "../img/parameter.png";

function Bestsellers() {
  return (
    <div className="container">
      <div className="bestsellers">
        <p className="bestsellers__title">Хиты продаж</p>
        <div className="card-block flex">
          <div className="card">
            <img className="card__img" src={stul} alt="Продукт" />
            <div className="card__description">
              <p className="title">Валенсия Beige</p>
              <p className="descr">Барные стулья</p>
              <p className="price">2 300₽</p>
            </div>
            <div className="card__size">
              <p className="size-title">Размеры</p>
              <div className="size-block flex">
                <div className="size">
                  <p className="size__title">ширина</p>
                  <p className="size__width">43см</p>
                </div>
                <img src={parameter} alt="Размер" />
                <div className="size">
                  <p className="size__title">глубина</p>
                  <p className="size__width">43см</p>
                </div>
                <img src={parameter} alt="Размер" />
                <div className="size">
                  <p className="size__title">высота</p>
                  <p className="size__width">43см</p>
                </div>
              </div>
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
