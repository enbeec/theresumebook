import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const apiURL = "http://localhost:6501";
  const expsURL = `${apiURL}/posts?postTypeId=1`;
  const [exps, setExps] = useState([]);

  const getUserExps = (userId) => {
    const userIdParam = `?userId=${userId}`;
    return fetch(expsURL + userIdParam)
      .then((res) => res.json())
      .then(setExps);
  };

  return (
    <PostContext.Provider value={{ exps, getUserExps }}>
      {props.children}
    </PostContext.Provider>
  );
};
