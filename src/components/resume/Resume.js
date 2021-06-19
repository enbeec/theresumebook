import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { theme } from "../../theme/trbTheme";
import { Box, Flex } from "rebass";
import { SkillsList } from "../posts/skills/SkillsList";

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
        <ExpsContainer>
          <ExpBox className="exp centered">exp 1</ExpBox>
          <ExpBox className="exp centered">exp 2</ExpBox>
          <ExpBox className="exp centered">exp 3</ExpBox>
        </ExpsContainer>
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
      justifyContent: "space-evenly",
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

const ExpsContainer = (props) => (
  <Flex
    {...props}
    theme={theme}
    width="50%"
    m="0%"
    p="1rem"
    sx={{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    }}
  />
);

const ExpBox = (props) => (
  <Box
    {...props}
    theme={theme}
    m="0.5rem"
    px="1rem"
    textAlign="center"
    minWidth="70%"
    bg="azure"
    sx={{
      flexGrow: "1",
      flexShrink: "1",
    }}
  />
);
