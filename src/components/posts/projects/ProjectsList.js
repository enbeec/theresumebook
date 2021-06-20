import React, { useContext, useEffect, useState } from "react";
import { Image, Text, Heading, Flex, Box } from "rebass";
import { theme } from "../../../theme/trbTheme";
import { ProjectContext } from "./ProjectProvider";

export const ProjectsList = ({ userId }) => {
  const { getUserProjects } = useContext(ProjectContext);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    getUserProjects(userId).then(setUserProjects);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const ProjectBoxes = (props) => (
    <>
      {userProjects.map((projectObj) => (
        <ProjectBox>
          <Heading fontSize={2}>{projectObj.title}</Heading>
          <br />
          <Image theme={theme} maxHeight="70%" src={projectObj.thumbnail} />
          <Text>{projectObj.desc}</Text>
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
      justifyContent: "space-around",
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
      flexGrow: "0.15",
      flexShrink: "1",
    }}
  />
);
