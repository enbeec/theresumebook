import React from "react";
import { useParams } from "react-router-dom";
import { theme } from "../../theme/trbTheme";
import { Box, Flex } from "rebass";
import { SkillsList } from "../posts/skills/SkillsList";
import { ExpsList } from "../posts/exps/ExpsList";

export const Resume = () => {
  const { userId } = useParams();
  return (
    <Container>
      <ProjectsContainer>
        <ProjectBox>project 1</ProjectBox>
        <ProjectBox>project 2</ProjectBox>
        <ProjectBox>project 3</ProjectBox>
      </ProjectsContainer>
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

const ProjectsContainer = (props) => (
  <Flex
    {...props}
    theme={theme}
    width="90%"
    sx={{
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1",
      flexShrink: "1",
      flexBasis: "30%",
      justifyContent: "space-between",
    }}
  />
);

const ProjectBox = (props) => (
  <Box
    {...props}
    theme={theme}
    minHeight="10rem"
    m="0.5rem"
    textAlign="center"
    bg="azure"
    sx={{
      flexBasis: "30%",
      flexGrow: "1",
      flexShrink: "1",
    }}
  />
);
