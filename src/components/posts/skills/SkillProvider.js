import React, { useState, createContext } from "react";

export const SkillContext = createContext();

export const SkillProvider = (props) => {
  const apiURL = "http://localhost:6501";
  // could be replaced with a fetch to /postTypes?type=skill
  const skillsTypeId = 2;
  const skillsURL = `${apiURL}/posts?postTypeId=${skillsTypeId}`;
  const [skills, setSkills] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  const getSkills = () => {
    return fetch(skillsURL)
      .then((res) => res.json())
      .then(setSkills);
  };

  const getUserSkills = (userId) => {
    const userIdParam = `?userId=${userId}`;
    return fetch(skillsURL + userIdParam)
      .then((res) => res.json())
      .then(setUserSkills);
  };

  return (
    <SkillContext.Provider
      value={{ skills, getSkills, userSkills, getUserSkills }}
    >
      {props.children}
    </SkillContext.Provider>
  );
};
