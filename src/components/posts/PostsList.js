import React, { useState, useEffect } from "react";
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
  const { getPostsByType, addPost, deletePost, postTypeIds } =
    useUserPosts(userId);

  // we can update this random value (which gets placed in the useEffect dep array)
  //  to trigger a re-render by passing `rerender` to a child
  const [random, setRandom] = useState(0);
  const rerender = () => {
    setRandom(Math.random());
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostsByType(postType).then(setPosts);
  }, [random]); // eslint-disable-line react-hooks/exhaustive-deps

  const boxedPost = (p) => (
    <Box boxStyle={boxStyle} key={p.id}>
      <SubHeading> {p.title}</SubHeading>
      {thumbnail && (
        <a href={p.link} target="_blank" rel="noreferrer">
          <Image src={p.thumbnail} />
        </a>
      )}
      <Text>{p.desc}</Text>
      <br />
      <button onClick={() => deletePost(p.id).then(rerender)}>Delete</button>
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
        triggerRender={rerender}
        addPostFunc={addPost}
        postTypeIds={postTypeIds}
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
