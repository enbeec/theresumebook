import React, { useContext, useEffect, useState } from "react";
import { PostsList } from "../PostsList";
import { PostContext } from "../PostProvider";

export const ExpsList = ({ userId, ...props }) => {
  const { getUserPosts } = useContext(PostContext);
  const [userExps, setUserExps] = useState([]);

  useEffect(() => {
    getUserPosts("exp", userId).then(setUserExps);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PostsList
      headerText="Experience"
      posts={userExps}
      postType={"exp"}
      {...props}
    />
  );
};
