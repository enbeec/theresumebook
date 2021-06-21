import React from "react";
import styled from "styled-components";

export const PostsList = ({ headerText, posts, postBox, postsContainer }) => {
  const Heading = styled.h2`
    text-align: center;
  `;

  const SubHeading = styled.h4`
    text-align: center;
    margin: 0;
  `;

  const Text = styled.span`
    text-align: center;
  `;

  const Box =
    postBox ||
    styled.div`
      margin: 0.5rem;
      padding-top: 1rem;
      padding-right: 1rem;
      padding-left: 1rem;
      text-align: center;
      min-width: 70%;
      background: azure;
      flex-grow: 1;
      flex-shrink: 1;
    `;

  const Container =
    postsContainer ||
    styled.div`
      width: 50%;
      margin: 0%;
      padding: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    `;

  return (
    <Container>
      {headerText && <Heading> {headerText} </Heading>}
      {posts.map((skillObj) => (
        <Box key={skillObj.id}>
          <SubHeading> {skillObj.title}</SubHeading>
          <Text>{skillObj.desc}</Text>
        </Box>
      ))}
    </Container>
  );
};
