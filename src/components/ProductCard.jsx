// const ProductCard = (props) => {
//   return (
//     <div>
//       <p>這是{props.name}</p>
//       <p>價格為${props.price}</p>
//       <img src={props.image} alt={props.name}></img>
//     </div>
//   );
// };

import { useState } from "react";

const ProductCard = ({ name, price, image }) => {
  const [count, setCount] = useState(0);
  //收藏狀態
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setLiked(!liked);
        }}
      >
        {liked ? "已收藏" : "收藏"}
      </button>

      <p>購物車:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        加入購物車
      </button>
      <p>商品名稱:{name}</p>
      <p>價格:${price}</p>
      <img src={image} alt={name}></img>
    </div>
  );
};

export default ProductCard;
