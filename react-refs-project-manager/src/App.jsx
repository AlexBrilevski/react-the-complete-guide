import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';
import Project from './components/Project';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const enableNewProjectView = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  const handleSaveProject = (projectData) => {
    const newProject = { id: Date.now(), ...projectData };

    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
      tasks: prevState.tasks.filter(task => task.projectId !== prevState.selectedProjectId),
    }));
  };

  const handleAddTask = (title) => {
    const newTask = { id: Date.now(), projectId: projectsState.selectedProjectId, title };

    setProjectsState(prevState => ({
      ...prevState,
      tasks: [newTask, ...prevState.tasks],
    }));
  };

  const handleDeleteTask = (taskId) => {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        selectedProjectId={projectsState.selectedProjectId}
        projects={projectsState.projects}
        handleProjectClick={handleSelectProject}
        handleAddProjectClick={enableNewProjectView}
      />
      {projectsState.selectedProjectId === undefined &&
        <NoProjectSelected handleAddProjectClick={enableNewProjectView} />
      }
      {projectsState.selectedProjectId === null &&
        <NewProject
          handleCancel={handleCancelProject}
          handleSave={handleSaveProject}
        />
      }
      {projectsState.selectedProjectId &&
        <Project
          project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)}
          tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
          handleDelete={handleDeleteProject}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      }
    </main>
  );
}

export default App;
