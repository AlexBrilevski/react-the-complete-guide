import { useState } from "react";

import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todoText: string) {
    setTodos(prevTodos => prevTodos.concat(new Todo(todoText)));
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
