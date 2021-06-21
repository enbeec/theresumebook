import React from "react";
import styled from "styled-components";

export const PostsList = ({
  headerText,
  posts,
  postBox,
  postsContainer,
  thumbnail,
}) => {
  const Box = postBox ? postBox : defaultBox;
  const Container = postsContainer ? postsContainer : defaultContainer;
  return (
    <Container>
      {headerText && <Heading> {headerText} </Heading>}
      {posts.map((p) => (
        <Box key={p.id}>
          <SubHeading> {p.title}</SubHeading>
          {thumbnail && (
            <a href={p.link} target="_blank" rel="noreferrer">
              <Image src={p.thumbnail} />
            </a>
          )}
          <Text>{p.desc}</Text>
        </Box>
      ))}
    </Container>
  );
};

const Image = styled.img`
  max-width: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

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

const defaultBox = styled.div`
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

const defaultContainer = styled.div`
  width: 50%;
  margin: 0%;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
