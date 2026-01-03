import About from "./components/About";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Increment counter: {counter}
      </button>
      <About />
    </div>
  );
}

export default App;
