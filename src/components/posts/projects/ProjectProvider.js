import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
  const apiURL = "http://localhost:6501";
  const projectsURL = `${apiURL}/posts?postTypeId=3`;
  const [projects, setProjects] = useState([]);

  const getProjects = () =>
    fetch(projectsURL)
      .then((res) => res.json())
      .then(setProjects);

  const getUserProjects = (userId) => {
    const userIdParam = `&userId=${userId}`;
    return fetch(projectsURL + userIdParam).then((res) => res.json());
  };

  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, getProjects, getUserProjects }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};
