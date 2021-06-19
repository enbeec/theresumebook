import React from "react";
import { Flex, Box } from "rebass";
import { theme } from "../../../theme/trbTheme";

export const SkillsList = (props) => {
  return (
    <SkillsContainer>
      <SkillBox className="skill centered">skill 1</SkillBox>
      <SkillBox className="skill centered">skill 2</SkillBox>
      <SkillBox className="skill centered">skill 3</SkillBox>
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
