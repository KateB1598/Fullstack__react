import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/input/Input";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Input type="text" placeholder="Placeholder" />
      <Button text="Click" />
      <Card name="Coffee" price={4.7} isSale={true} />
    </div>
  );
}

export default App;

<button onclick="function(){}">Submit</button>;
