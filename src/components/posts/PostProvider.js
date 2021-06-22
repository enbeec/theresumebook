import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [allExps, setExps] = useState([]);
  const [allSkills, setSkills] = useState([]);
  const [allProjects, setProjects] = useState([]);

  // just thought it'd be cool to sketch out what it would be like to
  //	make this adapt to new post types using a function
  // here's a hardcoded example of what we'd build in updatePostTypeIds
  const [postTypeIds, setPostTypeIds] = useState({
    exp: 1,
    skill: 2,
    project: 3,
  });
  // const updatePostTypeIds = () => fetch("http://localhost:6501/postTypes")
  //	.then(res => { }).then(setPostTypeIds)

  const url = (postType) =>
    `http://localhost:6501/posts/?postTypeId=${postTypeIds[postType]}`;

  const addPost = (postType, postObj) =>
    fetch(url(postType), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    }).then(getPosts);

  const getPosts = (postType) =>
    fetch(url(postType))
      .then((res) => res.json())
      .then((thePosts) => {
        switch (postType) {
          case "exp" || "exps":
            setExps(thePosts);
            break;
          case "skill" || "skills":
            setSkills(thePosts);
            break;
          case "project" || "projects":
            setProjects(thePosts);
            break;
        }
      });

  const getUserPosts = (postType, userId) =>
    fetch(url(postType) + `&userId=${userId}`).then((res) => res.json());

  return (
    <PostContext.Provider value={{ addPost, getUserPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
