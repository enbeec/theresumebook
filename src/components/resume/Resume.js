import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex } from "rebass";

export const Resume = () => (
  <>
    <Flex className="resumeContainer ">
      <Flex className="projectsContainer ">
        <Box>project 1</Box>
        <Box>project 2</Box>
        <Box>project 3</Box>
      </Flex>
      <Flex>
        <Flex>
          <div className="skill centered">skill 1</div>
          <div className="skill centered">skill 2</div>
          <div className="skill centered">skill 3</div>
        </Flex>
        <Flex>
          <div className="exp centered">exp 1</div>
          <div className="exp centered">exp 2</div>
          <div className="exp centered">exp 3</div>
        </Flex>
      </Flex>
    </Flex>
  </>
);
