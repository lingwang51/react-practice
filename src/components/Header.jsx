import { NavLink } from "react-router";
import { useContext } from "react";
// import { CartContext } from "../pages/CartContext";
import { LikeContext } from "../pages/LikeContext";
import { useCartStore } from "../store/cartStore";

const Header = () => {
  const navClassName = ({ isActive }) => {
    return isActive ? "nav-item on" : "nav-item";
  };

  // const { count } = useContext(CartContext);
  const count = useCartStore((state) => state.count);
  const { likeCount } = useContext(LikeContext);
  return (
    <header className="header">
      <h1>好物選品店</h1>
      <nav>
        <NavLink
          to="/"
          className={navClassName}
          // className={({ isActive }) => (isActive ? "nav-item on" : "nav-item")}
          //className="nav-item"
        >
          首頁
        </NavLink>
        <NavLink
          to="/products"
          className={navClassName}
          //className={({ isActive }) => (isActive ? "nav-item on" : "nav-item")}
        >
          商品
        </NavLink>
        <NavLink
          to="/about"
          className={navClassName}
          // className={({ isActive }) => (isActive ? "nav-item on" : "nav-item")}
        >
          關於
        </NavLink>
      </nav>
      <span className="cart">購物車:{count}</span>
      <span className="cart">收藏:{likeCount}</span>
    </header>
  );
};

export default Header;
