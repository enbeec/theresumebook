import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SkillContext } from "./SkillProvider";

export const SkillsList = ({ userId }) => {
  const { getUserSkills } = useContext(SkillContext);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    getUserSkills(userId).then(setUserSkills);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const SkillBoxes = (props) => (
    <>
      {userSkills.map((skillObj) => (
        <SkillBox {...props} key={skillObj.id}>
          <SubHeading fontSize={2}>{skillObj.title}</SubHeading>
          <Text>{skillObj.desc}</Text>
        </SkillBox>
      ))}
    </>
  );

  const SkillBox = styled.div`
    margin: 0.5rem;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    text-align: center;
    min-width: 70%;
    background: azure;
    flex-grow: 1;
    flex-shrink: 1;
  `;

  const SkillsContainer = styled.div`
    width: 50%;
    margin: 0%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
    <SkillsContainer>
      <Heading>Skills</Heading>
      <SkillBoxes />
    </SkillsContainer>
  );
};
