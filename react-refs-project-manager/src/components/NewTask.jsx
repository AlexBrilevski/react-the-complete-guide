import { useState } from 'react';

const NewTask = ({ handleAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onAddTaskClick = () => {
    if (newTaskTitle.trim().length) {
      handleAddTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <div className={'flex items-center gap-4'}>
      <input className={'w-64 px-2 py-1 rounded-sm bg-stone-200'}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.currentTarget.value)}
      />
      <button className={'text-stone-700 hover:text-stone-950'} onClick={onAddTaskClick}>
        Add task
      </button>
    </div>
  );
};

export default NewTask;
