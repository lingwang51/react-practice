import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "商品詳情";
    let ignore = false;
    const url = `https://dummyjson.com/products/${id}`;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        if (ignore) return;
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <div className="page">
      {loading && <p className="message">載入中…</p>}
      {error && <p className="message">載入失敗：{error.message}</p>}
      {!loading && !error && (
        <>
          <Link to="/products" className="back-link">
            ← 回商品列表
          </Link>
          <div className="detail">
            <img src={product.thumbnail} alt={product.title} />
            <div className="detail-info">
              <h2>{product.title}</h2>
              <p className="price">${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
