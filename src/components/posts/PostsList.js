import React, { useState, useEffect } from "react";
import { PostForm } from "./PostForm";
import useUserPosts from "../../hooks/useUserPosts";
import {
  Box,
  Container,
  SubHeading,
  Text,
  Image,
} from "../theme/themedComponents";

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

  useEffect(() => {
    getPostsByType(postType).then(setPosts);
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
