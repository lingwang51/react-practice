import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);
  const lastQuery = useRef("");

  useEffect(() => {
    document.title = "商品頁面";
    let ignore = false;
    const url =
      category === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${category}`;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        if (ignore) return;
        setProducts(data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, [category]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const shown = products.filter((p) => p.title.includes(query));

  return (
    <div className="page">
      <div className="toolbar">
        <div className="categories">
          <button
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            全部
          </button>
          <button
            className={category === "smartphones" ? "active" : ""}
            onClick={() => setCategory("smartphones")}
          >
            手機
          </button>
          <button
            className={category === "laptops" ? "active" : ""}
            onClick={() => setCategory("laptops")}
          >
            筆電
          </button>
        </div>

        <div className="search">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜尋商品"
          />
          <button
            onClick={() => {
              lastQuery.current = query;
              setQuery("");
            }}
          >
            清除
          </button>
          <button onClick={() => setQuery(lastQuery.current)}>回到上次</button>
        </div>
      </div>

      {loading && <p className="message">載入中…</p>}
      {error && <p className="message">載入失敗：{error.message}</p>}
      {!loading && !error && shown.length === 0 && (
        <p className="message">找不到符合的商品</p>
      )}

      <main className="product-list">
        {shown.map((p) => (
          // <Link to={`/product/${p.id}`} key={p.id}>
          <ProductCard
            key={p.id}
            title={p.title}
            price={p.price}
            thumbnail={p.thumbnail}
            id={p.id}
          />
          // </Link>
        ))}
      </main>
    </div>
  );
}

export default Products;
