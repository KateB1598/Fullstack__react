import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const Main = (props) => {
  const { handleAddToCart } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    getAllProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          onClick={handleAddToCart}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};
export default Main;
