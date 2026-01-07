import { Link, Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About";
import Main from "./pages/Main";
import User from "./pages/User";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/admin">Admin</Link>
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? "Log out" : "Log in"}
      </button>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users"></Route>
          <Route path="/users/:userId" element={<User />} />
          <Route path="/admin" element={<Admin isAuth={isAuth} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
