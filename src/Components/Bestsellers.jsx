import React from "react";
import Card from "./Card";
import cards from "../../src/cards.json";

function Bestsellers() {
  console.log(cards);
  return (
    <div className="container">
      <div className="bestsellers">
        <p className="bestsellers__title">Хиты продаж</p>
        <div className="card-block flex">
          {cards.map((obj) => (
            <Card
              key={obj.id}
              imgUrl={obj.imgUrl}
              title={obj.title}
              descr={obj.descr}
              sizeWidth={obj.sizeWidth}
              sizeDepth={obj.sizeDepth}
              sizeHeight={obj.sizeHeight}
              price={obj.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bestsellers;
