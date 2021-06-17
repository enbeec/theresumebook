import React, { useContext, useEffect } from "react";
import { ReactComponent as Logo } from "../../man-holding-resume-1-cropped.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import "./NavBar.css";

export const NavBar = (props) => {
  const { currentUser, getCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const history = useHistory();
  const gotoHomepage = () => history.push("/");
  const logout = () => {
    localStorage.removeItem("trb_user");
    history.push("/");
  };

  // prettier-ignore
  return (
    <ul className="navbar testBorder">
      <div className="navbar__item" 
		onClick={gotoHomepage}
	  ><Logo /></div>
	  <div className="navbar__item">
		<select
			className="navbar__item filterSelect"
			//	onClick={}
		>
		  <option>find more resumes...</option>
		</select>
		<button
			className="navbar__item filterButton"
			//	onClick={}
		>Go</button>
	  </div>
      <div
        className="navbar__item currentUser"
        //   onClick={gotoCurrentUser}
      >{currentUser.name}</div>
      <button className="navbar__item logoutButton" 
	  	onClick={logout}
	  >Logout</button>
    </ul>
  );
};
