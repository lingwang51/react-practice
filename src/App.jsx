import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RefDemo from "./components/RefDemo";
import phone from "./assets/phone.jpg";
import headphone from "./assets/headphone.webp";
import pad from "./assets/pad.webp";

// function App() {
//   const name = "React";

//   return (
//     <>
//       <Header />
//       <ProductCard name="手機 " price={43900} image={phone} />
//       <ProductCard name="耳機 " price={6500} image={headphone} />
//       <ProductCard name="平板 " price={12500} image={pad} />
//       <Footer />
//     </>
//   );
// }

function App() {
  // const product = [
  //   { id: 1, name: "手機", price: 43900, image: phone },
  //   { id: 2, name: "耳機", price: 6900, image: headphone },
  //   { id: 3, name: "平板", price: 12500, image: pad },
  // ];

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((p) => setProducts(p.products));
  // }, []);

  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     setProducts(data.products);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err);
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const [category, setCategory] = useState("all");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = "https://dummyjson.com/products";
      if (category !== "all") {
        url += `/category/${category}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const shown = products.filter((p) => p.title.includes(searchText));

  const ingputRef = useRef(null);
  useEffect(() => {
    ingputRef.current.focus();
  }, []);
  return (
    <>
      <Header />
      {/* <RefDemo /> */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <input
          placeholder="搜尋商品名稱..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          style={{ padding: "6px 12px", fontSize: "16px" }}
        />
        <button
          onClick={() => setSearchText("")}
          style={{ padding: "6px 12px", cursor: "pointer" }}
        >
          清除
        </button>
      </div>
      {loading && <p>讀取中</p>}
      {error && <p>讀取失敗</p>}
      <button onClick={() => setCategory("smartphones")}>手機分類</button>
      <button onClick={() => setCategory("laptops")}>平板分類</button>
      <button onClick={() => setCategory("all")}>全部商品</button>

      {/* {shown.map((p) => (
        <ProductCard
          name={p.name}
          price={p.price}
          image={p.image[0]}
          key={p.id} // 🌟 確保 key 是唯一的
        />
      ))} */}

      {shown.map((p) => (
        <ProductCard
          name={p.title}
          price={p.price}
          image={p.images[0]}
          key={p.id}
        />
      ))}

      {shown.length === 0 && <p>找不到該商品</p>}
      <Footer />
    </>
  );
}

export default App;
