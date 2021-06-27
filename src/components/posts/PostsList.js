import React, { useState, useEffect } from "react";
import useSet from "../../hooks/useSet";
import useUserPosts from "../../hooks/useUserPosts";
import {
  Box,
  Container,
  SubHeading,
  Text,
  Image,
} from "../theme/themedComponents";
import { PostForm } from "./PostForm";

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

  const [editingPostIds, edit, doneEditing] = useSet();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsByType(postType).then(setPosts);
  }, [editingPostIds, userId]); // eslint-disable-line react-hooks/exhaustive-deps

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
