import { useCartStore } from "../store/cartStore";
const Cart = () => {
  const items = useCartStore((state) => items);
  return (
    <div>
      <h2>購物車</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.title}*{i.qty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
