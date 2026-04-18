import { FC, useContext } from "react";
import { TodosContext } from "../store/todos-contex";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC = () => {
  const {items, onRemoveTodo} = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
