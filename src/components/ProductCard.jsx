import { useState } from "react";

const ProductCard = ({ title, price, thumbnail }) => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <div className="card-actions">
        <button onClick={() => setCount(count + 1)}>
          加入購物車（{count}）
        </button>
        <button onClick={() => setLiked(!liked)}>
          {liked ? "♥ 已收藏" : "♡ 收藏"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
