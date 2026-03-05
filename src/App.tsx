import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

const todos = [
  new Todo('Learn React'),
  new Todo('Learn TypeScript'),
];

function App() {
  function addTodo(todoText: string) { }

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
