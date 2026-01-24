import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import { useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const memoUserList = useMemo(() => {
    return [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" },
      { id: 4, name: "User 4" },
    ];
  }, []);

  return (
    <div className="box">
      <h1>App Component</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increment {counter}
      </button>

      <Box list={memoUserList} />
    </div>
  );
}

export default App;
