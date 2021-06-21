import React, { useContext, useEffect, useState } from "react";
import { ExpContext } from "./ExpProvider";
import styled from "styled-components";

export const ExpsList = ({ userId }) => {
  const { getUserExps } = useContext(ExpContext);
  const [userExps, setUserExps] = useState([]);

  useEffect(() => {
    getUserExps(userId).then(setUserExps);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const ExpBoxes = (props) => (
    <>
      {userExps.map((expObj) => (
        <ExpBox {...props} key={expObj.id}>
          <SubHeading fontSize={2}>{expObj.title}</SubHeading>
          <Text>{expObj.desc}</Text>
        </ExpBox>
      ))}
    </>
  );

  const ExpsContainer = styled.div`
    width: 50%;
    margin: 0%;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `;

  const ExpBox = styled.div`
    margin: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    text-align: center;
    min-width: 70%;
    background: azure;
    flex-grow: 1;
    flex-shrink: 1;
  `;

  // TODO import theming
  const SubHeading = styled.h4`
    text-align: center;
    margin: 0;
  `;
  const Heading = styled.h2`
    text-align: center;
  `;

  const Text = styled.span`
    text-align: center;
  `;

  return (
    <ExpsContainer>
      <Heading>Experience</Heading>
      <ExpBoxes />
    </ExpsContainer>
  );
};
