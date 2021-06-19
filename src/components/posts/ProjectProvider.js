import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const apiURL = "http://localhost:6501";
  const projectsURL = `${apiURL}/posts?postTypeId=3`;
  const [projects, setProjects] = useState([]);

  const getUserProjects = (userId) => {
    const userIdParam = `?userId=${userId}`;
    return fetch(projectsURL + userIdParam)
      .then((res) => res.json())
      .then(setProjects);
  };

  return (
    <ProjectContext.Provider value={{ projects, getUserProjects }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
