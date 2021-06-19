import React, { useState, createContext } from "react";

export const ExpContext = createContext();

export const ExpProvider = (props) => {
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
    <ExpContext.Provider value={{ exps, getUserExps }}>
      {props.children}
    </ExpContext.Provider>
  );
};
