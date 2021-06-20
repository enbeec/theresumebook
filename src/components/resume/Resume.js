import React from "react";
import { useParams } from "react-router-dom";
import { theme } from "../../theme/trbTheme";
import { Box, Flex } from "rebass";
import { ProjectsList } from "../posts/projects/ProjectsList";
import { SkillsList } from "../posts/skills/SkillsList";
import { ExpsList } from "../posts/exps/ExpsList";

export const Resume = () => {
  const { userId } = useParams();
  return (
    <Container>
      <ProjectsList userId={userId} />
      <VerticalSplit>
        <SkillsList userId={userId} />
        <ExpsList userId={userId} />
      </VerticalSplit>
    </Container>
  );
};

const Container = (props) => (
  <Flex
    {...props}
    theme={theme}
    sx={{
      // PARENT
      flexDirection: "column",
      alignItems: "center",
    }}
  />
);

const VerticalSplit = (props) => (
  <Flex
    {...props}
    theme={theme}
    width="90%"
    sx={{
      flexGrow: "1",
      flexShrink: "1",
      flexBasis: "60%",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  />
);
