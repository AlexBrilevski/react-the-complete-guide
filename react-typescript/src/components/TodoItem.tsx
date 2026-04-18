import { FC } from "react";
import classes from "./TodoItem.module.css";

type TodoProps = {
  text: string,
  onRemoveTodo: () => void
};

const Todo: FC<TodoProps> = ({ text, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={() => onRemoveTodo()}>
      {text}
    </li>
  );
};

export default Todo;
