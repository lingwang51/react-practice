import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>首頁</h1>
      <Link to="/about">關於</Link>
      <Link to="/products">產品</Link>
    </div>
  );
};

export default Home;
