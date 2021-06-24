import { useState } from "react";

function useUserPosts(userId) {
  const [postTypeIds] = useState({
    exp: 1,
    skill: 2,
    project: 3,
  });

  const postsURL = "http://localhost:6501/posts";
  // TODO rename this function
  const url = (postType) =>
    `${postsURL}?postTypeId=${postTypeIds[postType]}&userId=${userId}`;

  function getPostsByType(postType) {
    switch (postType) {
      case "exp":
        return fetch(url("exp")).then((res) => res.json());
      case "skill":
        return fetch(url("skill")).then((res) => res.json());
      case "project":
        return fetch(url("project")).then((res) => res.json());
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
}

export default useUserPosts;
