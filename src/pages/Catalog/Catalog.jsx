import React from "react";
import Card from "../../Components/Card";
import Skeleton from "../../Components/Bestsellers/Skeleton";
import LivingRooms from "./livingRooms";

function Catalog() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://63c7b376075b3f3a91d11226.mockapi.io/Loft?category=" + category
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [category]);

  const categoriesNumber = (number) => {
    setCategory(number);
  };

  return (
    <div className="container">
      <div className="container__wrap flex">
        <div className="filter">
          <p className="filter__title">Раздел</p>
          <LivingRooms categories={categoriesNumber} />
          <p className="filter__title">Цена</p>
        </div>
        <div className="cards">
          <div className="card-block flex">
            {isLoading
              ? [...new Array(24)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => (
                  <Card
                    key={obj.id}
                    imgUrl={obj.imgUrl}
                    title={obj.title}
                    descr={obj.descr}
                    sizeWidth={obj.sizeWidth}
                    sizeDepth={obj.sizeDepth}
                    sizeHeight={obj.sizeHeight}
                    price={obj.price}
                    oldPrice={obj.oldPrice}
                    discountPrice={obj.discountPrice}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
