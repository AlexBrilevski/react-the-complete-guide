import NewTask from './NewTask';
import Task from './Task';

const Tasks = ({ tasks, handleAddTask, handleDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask handleAddTask={handleAddTask} />
      {tasks.length > 0 ?
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map(task =>
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
            />
          )}
        </ul>
        :
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      }
    </section>
  );
};

export default Tasks;
