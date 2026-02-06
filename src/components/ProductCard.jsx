import React from "react";
const ProductCard = (props) => {
  const { product, onClick } = props;
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.descroption}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => onClick(product)}>Add to cart</button>
    </div>
  );
};
export default ProductCard;
