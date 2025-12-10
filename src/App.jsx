import { useState } from "react";
import "./App.css";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random(),
      title: todoName,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleCompleteTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <input
          value={todoName}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter todo name..."
        />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <button onClick={() => handleCompleteTodo(todo.id)}>+</button>
              {todo.title} {todo.done && "Complete"}
              <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
