import { useState } from "react";

const useUserPosts = (userId) => {
  // new post types can be added updated on the fly even though I don't need that yet
  // TODO move this to a provider
  const [postTypeIds] = useState({
    exp: 1,
    skill: 2,
    project: 3,
  });

  const postsURL = "http://localhost:6501/posts";

  // create the proper URL for GETting a type of post
  const urlFor = (postType) =>
    `${postsURL}?postTypeId=${postTypeIds[postType]}&userId=${userId}`;

  function getPostsByType(postType) {
    switch (postType) {
      case "exp":
        return fetch(urlFor("exp")).then((res) => res.json());
      case "skill":
        return fetch(urlFor("skill")).then((res) => res.json());
      case "project":
        return fetch(urlFor("project")).then((res) => res.json());
      default:
        return;
    }
  }

  function addPost(post) {
    return fetch(postsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }

  function putPost(post) {
    return fetch(postsURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }

  function deletePost(postId) {
    return fetch(`${postsURL}/${postId}`, {
      method: "DELETE",
    });
  }

  return { getPostsByType, addPost, deletePost, putPost, postTypeIds };
};

export default useUserPosts;
