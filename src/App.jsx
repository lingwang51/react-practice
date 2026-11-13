import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetail from "./pages/ProductsDetail";
import NotFound from "./pages/NotFound";
import "./styles.css";
import { CartContext } from "./pages/CartContext";
import { LikeContext } from "./pages/LikeContext";
import { useState } from "react";
import { Cart } from "./pages/Cart";
const App = () => {
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  return (
    <CartContext value={{ count, setCount }}>
      <LikeContext value={{ likeCount, setLikeCount }}>
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </LikeContext>
    </CartContext>
  );
};

export default App;
