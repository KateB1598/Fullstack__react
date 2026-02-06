import { useReducer } from "react";
import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

function App() {
  const initialState = {
    items: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-to-cart":
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case "remove-item": {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          items: updatedItems,
        };
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddToCart = (product) => {
    dispatch({
      type: "add-to-cart",
      payload: product,
    });
  };
  const handleRemoveItem = (id) => {
    dispatch({
      type: "remove-item",
      payload: id,
    });
  };
  return (
    <>
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Main handleAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={<Cart state={state} handleRemoveItem={handleRemoveItem} />}
        />
      </Routes>
    </>
  );
}

export default App;
