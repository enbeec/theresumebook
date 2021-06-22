import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
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
    });

  const getUserPosts = (postType, userId) =>
    fetch(url(postType) + `&userId=${userId}`).then((res) => res.json());

  return (
    <PostContext.Provider value={{ addPost, getUserPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
