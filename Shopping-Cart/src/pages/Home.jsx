import { PureComponent, useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../product-tile";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
    console.log("Data:", data);
  };
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={120}
            color="rgb(127, 29, 29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} key={PureComponent} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};
export default Home;
