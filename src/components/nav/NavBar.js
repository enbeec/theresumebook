import React, { useContext, useEffect } from "react";
import { ReactComponent as Logo } from "../../trb-logo.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { UserSelect } from "../users/UserSelect";
import {
  Text,
  FlexBar,
  BarSection,
  LogoutButton,
} from "../../theme/themedComponents";

export const NavBar = () => {
  const { currentUser, getCurrentUser } = useContext(UserContext);
  useEffect(() => {
    getCurrentUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();
  const gotoHomepage = () => history.push("/");
  const gotoCurrentUser = () => history.push(`/resume/${currentUser.id}`);
  const gotoSelectedUserResume = (event) => {
    if (event.target.value) {
      history.push(`/resume/${event.target.value}`);
    }
  };
  const logout = () => {
    localStorage.removeItem("trb_user");
    history.push("/");
  };

  return (
    <FlexBar>
      <BarSection alignItems={"left"}>
        <UserSelect selectFunc={gotoSelectedUserResume} />
      </BarSection>
      <Logo width="18%" onClick={gotoHomepage} />
      <BarSection>
        <Text onClick={gotoCurrentUser}>{currentUser.name}</Text>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </BarSection>
    </FlexBar>
  );
};
