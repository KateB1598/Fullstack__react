import { useState } from "react";
import UserList from "./components/UserList";
function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <UserList />}
    </div>
  );
}

export default App;
