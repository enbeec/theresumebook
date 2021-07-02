import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "../posts/projects/ProjectsList";
import { SkillsList } from "../posts/skills/SkillsList";
import { ExpsList } from "../posts/exps/ExpsList";
import { ResumeContainer, VerticalSplit } from "../../theme/themedComponents";

export const Resume = () => {
  const { userId } = useParams();
  const currentUserId = localStorage.getItem("trb_user");
  const isCurrentUser = currentUserId === userId;

  return (
    <ResumeContainer>
      <ProjectsList userId={userId} isCurrentUser={isCurrentUser} />
      <VerticalSplit>
        <SkillsList userId={userId} isCurrentUser={isCurrentUser} />
        <ExpsList userId={userId} isCurrentUser={isCurrentUser} />
      </VerticalSplit>
    </ResumeContainer>
  );
};
