import React, { useState, useEffect } from "react";
import useSet from "../../hooks/useSet";
import { CommentSection } from "../comments/CommentSection";
import useUserPosts from "../../hooks/useUserPosts";
import {
  Box,
  Container,
  SubHeading,
  Text,
  Image,
} from "../../theme/themedComponents";
import { PostForm } from "./PostForm";

export const PostsList = ({
  userId,
  postType,
  boxStyle,
  containerStyle,
  isCurrentUser,
  thumbnail,
  ...props
}) => {
  const { getPostsByType, addPost, deletePost, putPost, postTypeIds } =
    useUserPosts(userId);

  const postTypeId = postTypeIds[postType];

  const [editingPostIds, edit, doneEditing] = useSet();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsByType(postType).then(setPosts);
  }, [editingPostIds, userId]); // eslint-disable-line react-hooks/exhaustive-deps

  // TODO decide if I wanna factor this out into a component
  const boxedPost = (p) =>
    [...editingPostIds].indexOf(p.id) >= 0 && isCurrentUser ? (
      <PostForm
        postType={postType}
        key={p.id}
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
          <div style={{ paddingTop: "0.5rem" }}>
            <button onClick={() => edit(p.id)}>Edit</button>
            <button onClick={() => deletePost(p.id).then(doneEditing())}>
              Delete
            </button>
          </div>
        )}
        {postTypeId === 3 && (
          <>
            <div style={{ margin: "0.2rem" }} />
            <CommentSection
              foreignKeys={{ postId: p.id, postTypeId: postTypeId }}
            />
          </>
        )}
      </Box>
    );

  return (
    <Container containerStyle={containerStyle}>
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
          {...props}
        />
      )}
      {postType !== "project" && (
        <CommentSection
          foreignKeys={{ postTypeId: postTypeId, authorUserId: userId }}
        />
      )}
    </Container>
  );
};
