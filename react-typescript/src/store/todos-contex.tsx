import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[],
  onAddTodo: (text: string) => void,
  onRemoveTodo: (id: string) => void,
}

export const TodosContext = createContext<TodosContextType>({
  items: [],
  onAddTodo: (text: string) => {},
  onRemoveTodo: (id: string) => {},
});

const TodosContextProvider: FC = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todoText: string) {
    setTodos(prevTodos => prevTodos.concat(new Todo(todoText)));
  }

  function removeTodo(id: string) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  const contexValue: TodosContextType = {
    items: todos,
    onAddTodo: addTodo,
    onRemoveTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contexValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
