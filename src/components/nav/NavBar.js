import React, { useContext, useEffect } from "react";
import { ReactComponent as Logo } from "../../trb-logo.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { UserSelect } from "../users/UserSelect";
import { Text, Button, Flex } from "rebass";
import { theme } from "../../theme/trbTheme";

export const NavBar = () => {
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
    <FlexBar>
      <Logo width="18%" onClick={gotoHomepage} />
      <BarSection>
        <UserSelect selectFunc={gotoSelectedUser} />
      </BarSection>
      <BarSection>
        <Text onClick={gotoCurrentUser}>{currentUser.name}</Text>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </BarSection>
    </FlexBar>
  );
};

const FlexBar = (props) => (
  <Flex
    sx={{
      flexWrap: "nowrap",
      justifyContent: "space-around",
      alignItems: "flex-end",
      padding: "2rem",
      paddingTop: "0.1rem",
      paddingBottom: "0.5rem",
      margin: 0,
    }}
    {...props}
    theme={theme}
  />
);

const BarSection = (props) => (
  <Flex
    sx={{
      // PARENT
      flexFlow: "column",
      alignItems: "center",
      // CHILD
      flexBasis: "20%",
      paddingBottom: "1rem",
    }}
    {...props}
    theme={theme}
  />
);

const LogoutButton = (props) => (
  <Button
    {...props}
    theme={theme}
    sx={{
      backgroundColor: "lightgrey",
      color: "black",
      outline: "coral solid 1px",
      ":hover": {
        color: "coral",
        outline: "black solid 0px",
        boxShadow: "-2px 4px darkgrey",
      },
      ":active": {
        bg: "coral",
        color: "white",
      },
    }}
  />
);
