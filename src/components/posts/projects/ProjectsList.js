import React, { useContext, useEffect, useState } from "react";
import { Text, Heading, Flex, Box } from "rebass";
import { theme } from "../../../theme/trbTheme";
import { ProjectContext } from "./ProjectProvider";

export const ProjectsList = ({ userId }) => {
  const { getUserProjects } = useContext(ProjectContext);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    getUserProjects(userId).then(setUserProjects);
  }, [userId]);

  return (
    <ProjectsContainer>
      <ProjectBox>project 1</ProjectBox>
      <ProjectBox>project 2</ProjectBox>
      <ProjectBox>project 3</ProjectBox>
    </ProjectsContainer>
  );
};

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
