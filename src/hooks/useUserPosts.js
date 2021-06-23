import { useState, useEffect } from "react";

function useUserPosts(userId) {
  // hardcoded until I need a PostType provider
  const postTypeIds = {
    exp: 1,
    skill: 2,
    project: 3,
  };

  const [lastChanged, setLastChanged] = useState({
    exp: null,
    skill: null,
    project: null,
  });

  const postsURL = "http://localhost:6501/posts";
  const url = (postType) =>
    `${postsURL}?postTypeId=${postTypeIds[postType]}&userId=${userId}`;

  const [exps, setExps] = useState([]);
  useEffect(() => {
    fetch(url("exp"))
      .then((res) => res.json())
      .then(setExps);
  }, [lastChanged.exp]);

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch(url("skill"))
      .then((res) => res.json())
      .then(setSkills);
  }, [lastChanged.skill]);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url("project"))
      .then((res) => res.json())
      .then(setProjects);
  }, [lastChanged.project]);

  function postsOfType(postType) {
    switch (postType) {
      case "exp":
        return exps;
      case "skill":
        return skills;
      case "project":
        return projects;
    }
  }

  function updatedPosts(postType) {
    const newLastChanged = { ...lastChanged };
    lastChanged[postType] = Date.now();
    setLastChanged(newLastChanged);
  }

  return { postsOfType, updatedPosts };
}

export default useUserPosts;
