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
  isCurrentUser,
  thumbnail,
}) => {
  const { getPostsByType, addPost, deletePost, putPost, postTypeIds } =
    useUserPosts(userId);

  // TODO this def could be a custom hook
  const [editingPostIds, setEditingPostIds] = useState([]);
  // https://ganes.dev/use-javascript-sets-with-react-useState
  const edit = (postId) => {
    const postIdSet = new Set(editingPostIds);
    setEditingPostIds(postIdSet.add(postId));
  };

  const doneEditing = (postId) => {
    const postIdSet = new Set(editingPostIds);
    if (postIdSet.has(postId)) {
      postIdSet.delete(postId);
      setEditingPostIds([...postIdSet]);
    } else if (postId === undefined) {
      // for new posts, just call without an id
      setEditingPostIds([...postIdSet]);
    }
  };

  const [posts, setPosts] = useState([]);
  var postsEmpty = [...posts].length === 0;
  useEffect(() => {
    getPostsByType(postType).then(setPosts);
    postsEmpty = [...posts].length === 0;
  }, [editingPostIds, userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const boxedPost = (p) =>
    [...editingPostIds].indexOf(p.id) >= 0 && isCurrentUser ? (
      <PostForm
        postType={postType}
        postObj={p}
        Box={Box}
        boxStyle={boxStyle}
        renderCallback={doneEditing}
        addPostFunc={addPost}
        postTypeIds={postTypeIds}
        putPostFunc={putPost}
      />
    ) : (
      <Box boxStyle={boxStyle} key={p.id}>
        <SubHeading> {p.title}</SubHeading>
        {thumbnail && (
          <a href={p.link} target="_blank" rel="noreferrer">
            <Image src={p.thumbnail} />
          </a>
        )}
        <Text>{p.desc}</Text>
        {isCurrentUser && (
          <div>
            <button onClick={() => edit(p.id)}>Edit</button>
            <button onClick={() => deletePost(p.id).then(doneEditing())}>
              Delete
            </button>
          </div>
        )}
      </Box>
    );

  return (
    <Container containerStyle={containerStyle}>
      {headerText && !postsEmpty && <Heading> {headerText} </Heading>}
      {posts.map(boxedPost)}
      {isCurrentUser && (
        <PostForm
          postType={postType}
          Box={Box}
          boxStyle={boxStyle}
          renderCallback={doneEditing}
          addPostFunc={addPost}
          postTypeIds={postTypeIds}
          putPostFunc={putPost}
        />
      )}
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
  border-radius: 20px;
  ${(props) =>
    props.containerStyle
      ? props.containerStyle
      : css`
          flex-direction: column;
          width: 50%;
          margin: 0.2rem;
          padding: 1rem;
          align-items: center;
          background: azure;
          justify-content: space-around;
        `};
`;

const Box = styled.div`
  border-radius: 10px;
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
