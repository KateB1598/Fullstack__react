import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
