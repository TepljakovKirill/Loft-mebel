import React from "react";
import Card from "../Card";
import Skeleton from "./Skeleton";

function Bestsellers() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63c7b376075b3f3a91d11226.mockapi.io/Loft")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
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
  );
}

export default Bestsellers;
