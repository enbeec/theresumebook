import React, { useContext, useEffect, useState } from "react";
import { Text, Heading, Flex, Box } from "rebass";
import { theme } from "../../../theme/trbTheme";
import { SkillContext } from "./SkillProvider";

export const SkillsList = ({ userId }) => {
  const { getUserSkills } = useContext(SkillContext);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    getUserSkills(userId).then(setUserSkills);
  }, userId);

  const SkillBoxes = (props) => {
    return (
      <>
        {userSkills.map((skillObj) => (
          <SkillBox {...props} key={skillObj.id}>
            <Heading fontSize={2}>{skillObj.title}</Heading>
            <Text>{skillObj.desc}</Text>
          </SkillBox>
        ))}
      </>
    );
  };

  return (
    <SkillsContainer>
      <Heading>Skills</Heading>
      <SkillBoxes />
    </SkillsContainer>
  );
};

const SkillsContainer = (props) => (
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

const SkillBox = (props) => (
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
