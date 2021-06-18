import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { theme } from "../../theme/trbTheme";
import { Box, Flex } from "rebass";
import { rosybrown } from "color-name";
import "./Resume.css";

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
    sx={{
      flexGrow: "1",
      flexShrink: "1",
      flexBasis: "60%",
      flexDirection: "row",
    }}
  />
);

const ProjectsContainer = (props) => (
  <Flex
    {...props}
    theme={theme}
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

const ExpsContainer = (props) => (
  <Flex
    {...props}
    theme={theme}
    sx={{
      flexDirection: "column",
      justifyContent: "space-around",
      margin: "0%",
      padding: "1rem",
    }}
  />
);

const SkillsContainer = (props) => (
  <Flex
    {...props}
    theme={theme}
    sx={{
      flexDirection: "column",
      justifyContent: "space-around",
      margin: "0%",
      padding: "1rem",
    }}
  />
);

export const Resume = () => (
  <Container>
    <ProjectsContainer>
      <Box>project 1</Box>
      <Box>project 2</Box>
      <Box>project 3</Box>
    </ProjectsContainer>
    <VerticalSplit>
      <SkillsContainer>
        <div className="skill centered">skill 1</div>
        <div className="skill centered">skill 2</div>
        <div className="skill centered">skill 3</div>
      </SkillsContainer>
      <ExpsContainer>
        <div className="exp centered">exp 1</div>
        <div className="exp centered">exp 2</div>
        <div className="exp centered">exp 3</div>
      </ExpsContainer>
    </VerticalSplit>
  </Container>
);
