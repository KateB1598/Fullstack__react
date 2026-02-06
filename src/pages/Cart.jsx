import React from "react";
const Cart = (props) => {
  const { state, handleRemoveItem } = props;
  return (
    <div>
      {state.items.map((item) => (
        <CartItem item={item} onRemove={handleRemoveItem} />
      ))}
    </div>
  );
};
const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div>{item.title}</div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};
export default Cart;
