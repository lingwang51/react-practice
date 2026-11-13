import { Link } from "react-router";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "首頁";
  }, []);
  return (
    <div>
      <h1 className="home">首頁</h1>
      {/* <Link to="/about">關於</Link>
      <Link to="/products">產品</Link> */}
    </div>
  );
};

export default Home;
