import { FC, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-contex";
import classes from "./NewTodo.module.css";

const NewTodo: FC = () => {
  const { onAddTodo } = useContext(TodosContext);
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error...
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input id='text' type='text' ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
