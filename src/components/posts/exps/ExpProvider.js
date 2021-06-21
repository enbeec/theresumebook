import React, { useState, createContext } from "react";

export const ExpContext = createContext();

export const ExpProvider = (props) => {
  const apiURL = "http://localhost:6501";
  const expTypeId = 1;
  const expsURL = `${apiURL}/posts?postTypeId=${expTypeId}`;
  const [exps, setExps] = useState([]);

  const addExp = (expObj) => {
    return fetch(expsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expObj),
    }).then(getExps);
  };

  const getExps = () =>
    fetch(expsURL)
      .then((res) => res.json())
      .then(setExps);

  const getUserExps = (userId) => {
    const userIdParam = `&userId=${userId}`;
    return fetch(expsURL + userIdParam).then((res) => res.json());
  };

  return (
    <ExpContext.Provider value={{ addExp, exps, getExps, getUserExps }}>
      {props.children}
    </ExpContext.Provider>
  );
};
