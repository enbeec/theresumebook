import React, { useContext, useEffect } from "react";
import { ReactComponent as Logo } from "../../trb-logo.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { UserSelect } from "../users/UserSelect";
import { Text, Button, Flex } from "rebass";
import styled from "styled-components";
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

const FlexBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  padding-top: 0.1rem;
  padding-bottom: 0.5rem;
  margin: 0;
`;

const BarSection = styled.div`
  /* PARENT */
  display: flex;
  flex-flow: column;
  align-items: center;
  /* CHILD */
  flex-basis: 20%;
  padding-bottom: 1rem;
`;

const LogoutButton = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  background-color: lightgrey;
  color: black;
  /* outline: coral solid 1px; */
  :hover {
    color: coral;
    outline: black solid 0px;
    box-shadow: -1px 2px darkgrey;
  }
  :active {
    background: coral;
    color: white;
  }
`;
