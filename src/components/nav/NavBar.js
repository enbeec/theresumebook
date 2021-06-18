import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../trb-logo.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import "./NavBar.css";
import { UserSelect } from "../users/UserSelect";

export const NavBar = (props) => {
  const { currentUser, getCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getCurrentUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();
  const gotoHomepage = () => history.push("/");
  const gotoCurrentUser = () => history.push(`/resume/${currentUser.id}`);
  const gotoSelectedUser = (event) => {
    if (event.target.value) {
      history.push(`/resume/${event.target.value}`);
    }
  };
  const logout = () => {
    localStorage.removeItem("trb_user");
    history.push("/");
  };

  return (
    <div className="navbar ">
      <Logo
        width="20%"
        viewBox="65 -30 500 400"
        className="logo"
        onClick={gotoHomepage}
      />
      <div className="navbar__item">
        <UserSelect selectFunc={gotoSelectedUser} />
      </div>
      <div className="navbar__item currentUser" onClick={gotoCurrentUser}>
        {currentUser.name}
      </div>
      <button className="navbar__item logoutButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
