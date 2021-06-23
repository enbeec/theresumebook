import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PostForm } from "./PostForm";
import useUserPosts from "../../hooks/useUserPosts";

export const PostsList = ({
  userId,
  headerText,
  postType,
  boxStyle,
  containerStyle,
  thumbnail,
}) => {
  const { postsOfType, updatedPosts } = useUserPosts(userId);
  const posts = postsOfType(postType);
  console.log(posts);

  const boxedPost = (p) => (
    <Box boxStyle={boxStyle} key={p.id}>
      <SubHeading> {p.title}</SubHeading>
      {thumbnail && (
        <a href={p.link} target="_blank" rel="noreferrer">
          <Image src={p.thumbnail} />
        </a>
      )}
      <Text>{p.desc}</Text>
    </Box>
  );

  return (
    <Container containerStyle={containerStyle}>
      {headerText && <Heading> {headerText} </Heading>}
      {posts.map(boxedPost)}
      <PostForm
        postType={postType}
        Box={Box}
        boxStyle={boxStyle}
        updatedFunc={updatedPosts}
      />
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

const Container = styled.div`
  ${(props) =>
    props.containerStyle
      ? props.containerStyle
      : css`
          flex-direction: column;
          width: 50%;
          margin: 0%;
          padding: 1rem;
          align-items: center;
          background: azure;
          justify-content: space-around;
        `}
`;

const Box = styled.div`
  ${(props) =>
    props.boxStyle
      ? props.boxStyle
      : css`
          margin: 0.5rem;
          padding-top: 1rem;
          padding-right: 1rem;
          padding-left: 1rem;
          text-align: center;
          min-width: 70%;
          flex-grow: 1;
          flex-shrink: 1;
        `}

  ${(props) =>
    props.isForm &&
    css`
      background: lavender;
      justify-content: center;
      opacity: 40%;
      :hover,
      :focus-within {
        opacity: 100%;
      }
    `}
`;
