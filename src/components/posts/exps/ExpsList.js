import React, { useContext, useEffect, useState } from "react";
import { Text, Heading, Flex, Box } from "rebass";
import { theme } from "../../../theme/trbTheme";
import { ExpContext } from "./ExpProvider";

export const ExpsList = ({ userId }) => {
  const { getUserExps } = useContext(ExpContext);
  const [userExps, setUserExps] = useState([]);

  useEffect(() => {
    getUserExps(userId).then(setUserExps);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const ExpBoxes = (props) => (
    <>
      {userExps.map((expObj) => (
        <ExpBox {...props} key={expObj.id}>
          <Heading fontSize={2}>{expObj.title}</Heading>
          <Text>{expObj.desc}</Text>
        </ExpBox>
      ))}
    </>
  );

  return (
    <ExpsContainer>
      <Heading>Experience</Heading>
      <ExpBoxes />
    </ExpsContainer>
  );
};

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
