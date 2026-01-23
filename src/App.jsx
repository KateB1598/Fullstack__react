import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment } from "./store/slices/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.value);
  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </>
  );
}

export default App;
