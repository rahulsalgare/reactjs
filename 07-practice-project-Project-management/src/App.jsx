import SideBar from "./components/SideBar";
import NoProjectsFound from "./components/NoProjectsFound";
import NewProject from "./components/NewProject";
import { useState } from "react";
import ProjectList from "./components/ProjectList";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);

  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <>
      <SideBar handleClick={() => setShowNewProjectForm(true)} />
      {showNewProjectForm && (
        <NewProject
          onSubmit={addProject}
          onClose={() => setShowNewProjectForm(false)}
        />
      )}

      {!showNewProjectForm && projects.length === 0 && (
        <NoProjectsFound handleClick={() => setShowNewProjectForm(true)} />
      )}

      {!showNewProjectForm && projects.length > 0 && (
        <ProjectList projects={projects} />
      )}
    </>
  );
}

export default App;
