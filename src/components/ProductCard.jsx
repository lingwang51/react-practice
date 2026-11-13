import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../pages/CartContext";
import { LikeContext } from "../pages/LikeContext";
import { useCartStore } from "../store/cartStore";

const ProductCard = ({ title, price, thumbnail, id }) => {
  //const { count, setCount } = useContext(CartContext);
  const { likeCount, setLikeCount } = useContext(LikeContext);
  const [liked, setLiked] = useState(false);
  let navigate = useNavigate();

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const add = useCartStore((state) => state + 1);

  return (
    <div className="card">
      <img
        src={thumbnail}
        alt={title}
        onClick={() => navigate(`/product/${id}`)}
      />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <div className="card-actions">
        <button onClick={() => add({ id, title, price, thumbnail })}>
          加入購物車
        </button>
        <button onClick={handleLike}>{liked ? "♥ 已收藏" : "♡ 收藏"}</button>
      </div>
    </div>
  );
};

export default ProductCard;
