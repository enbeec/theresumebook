import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
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
    <PostContext.Provider value={{ projects, getUserProjects }}>
      {props.children}
    </PostContext.Provider>
  );
};
