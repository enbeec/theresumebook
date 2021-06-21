import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "../posts/projects/ProjectsList";
import { SkillsList } from "../posts/skills/SkillsList";
import { ExpsList } from "../posts/exps/ExpsList";
import styled from "styled-components";

export const Resume = () => {
  const { userId } = useParams();

  const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const VerticalSplit = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 60%;
    /* parent */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <ResumeContainer>
      <ProjectsList userId={userId} />
      <VerticalSplit>
        <SkillsList userId={userId} />
        <ExpsList userId={userId} />
      </VerticalSplit>
    </ResumeContainer>
  );
};
