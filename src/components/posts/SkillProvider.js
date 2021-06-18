import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const apiURL = "http://localhost:6501";
  const skillsURL = `${apiURL}/posts?postTypeId=2`;
  const [skills, setSkills] = useState([]);

  const getUserSkills = (userId) => {
    const userIdParam = `?userId=${userId}`;
    return fetch(skillsURL + userIdParam)
      .then((res) => res.json())
      .then(setSkills);
  };

  return (
    <PostContext.Provider value={{ skills, getUserSkills }}>
      {props.children}
    </PostContext.Provider>
  );
};
