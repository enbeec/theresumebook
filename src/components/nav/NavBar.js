import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../man-holding-resume-1-cropped.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { UserOptions } from "../users/UserOptions";
import "./NavBar.css";

export const NavBar = (props) => {
  const { currentUser, getCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getCurrentUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();
  const gotoHomepage = () => history.push("/");
  const gotoCurrentUser = () => history.push(`/resume/${currentUser.id}`);
  const logout = () => {
    localStorage.removeItem("trb_user");
    history.push("/");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (event) => setSearchTerm(event.target.value);

  const handleSelectUser = (event) => {
    if (event.target.value) {
      history.push(`/resume/${event.target.value}`);
    }
  };

  return (
    <ul className="navbar testBorder">
      <div className="navbar__item" onClick={gotoHomepage}>
        <Logo />
      </div>
      <div className="navbar__item">
        <form>
          <input
            type="text"
            name="filterText"
            placeholder="Filter by name..."
            value={searchTerm}
            onChange={changeSearchTerm}
          />
        </form>
        <select className="navbar__item userSelect" onClick={handleSelectUser}>
          <option value="">View another resume...</option>
          <UserOptions searchTerm={searchTerm} />
        </select>
      </div>
      <div className="navbar__item currentUser" onClick={gotoCurrentUser}>
        {currentUser.name}
      </div>
      <button className="navbar__item logoutButton" onClick={logout}>
        Logout
      </button>
    </ul>
  );
};
