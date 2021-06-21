import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "./ProjectProvider";
import styled from "styled-components";

export const ProjectsList = (props) => {
  const { getUserProjects } = useContext(ProjectContext);
  const [userProjects, setUserProjects] = useState([]);
  const userId = props.userId;

  useEffect(() => {
    getUserProjects(userId).then(setUserProjects);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const ProjectsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 30%;
    justify-content: space-around;
  `;

  const ProjectBox = styled.div`
    min-height: 10rem;
    margin: 0.5rem;
    padding-top: 1rem;
    text-align: center;
    background: azure;
    display: flex;
    flex-basis: 30%;
    flex-grow: 0.15;
    flex-shrink: 1;
  `;

  // TODO import theming and refactor

  const Image = styled.img`
    max-width: 80%;
  `;

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

  const Link = styled.a``;

  const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  `;

  const ProjectBoxes = (props) => (
    <>
      {userProjects.map((projectObj) => (
        <ProjectBox>
          <FlexColumn>
            <SubHeading> {projectObj.title}</SubHeading>
            <br />
            <Image src={projectObj.thumbnail} />
            <br />
            <Text>{projectObj.desc}</Text>
            <Link href={projectObj.link}>{projectObj.link}</Link>
          </FlexColumn>
        </ProjectBox>
      ))}
    </>
  );

  return (
    <ProjectsContainer>
      <ProjectBoxes />
    </ProjectsContainer>
  );
};
