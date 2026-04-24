import noProjectsImg from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({ handleAddProjectClick }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImg} alt="An empty task list" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={handleAddProjectClick}>
          Create new project
        </Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
