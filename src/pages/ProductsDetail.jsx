import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <div>
      <p>商品內容</p>
    </div>
  );
};

export default ProductDetail;
