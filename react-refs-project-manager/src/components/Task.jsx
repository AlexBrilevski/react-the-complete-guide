const Task = ({ task, handleDeleteTask }) => {
  return (
    <li className="flex justify-between my-4">
      <span>{task.title}</span>
      <button
        className={'text-stone-700 hover:text-red-500'}
        onClick={() => handleDeleteTask(task.id)}>
        Clear
      </button>
    </li>
  );
};

export default Task;
