/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./LoadMoreData.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDiasabledButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }
        `
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);

        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDiasabledButton(true);
  }, [products]);

  loading ? <div>Loading data....Please wait.</div> : null;

  return (
    <div className="load-more-container">
      {loading ? <div>Loading data....Please wait.</div> : null}
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disabledButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};
export default LoadMoreData;
