import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const apiURL = "http://localhost:6501";
  const usersURL = `${apiURL}/users`;
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const getUsers = () => {
    return fetch(usersURL)
      .then((res) => res.json())
      .then(setUsers);
  };

  const getCurrentUser = () => {
    return fetch(`${usersURL}?id=${localStorage.getItem("trb_user")}`)
      .then((res) => res.json())
      .then((array) => array[0])
      .then(setCurrentUser);
  };

  return (
    <UserContext.Provider
      value={{ users, getUsers, currentUser, getCurrentUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
