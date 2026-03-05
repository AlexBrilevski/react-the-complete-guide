import { FC, useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void
};

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo text</label>
      <input id='text' type='text' ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
