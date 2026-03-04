const NewTodo = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Todo text</label>
      <input id='text' type='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
