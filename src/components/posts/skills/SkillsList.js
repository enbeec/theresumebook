import React, { useContext, useEffect, useState } from "react";
import { PostsList } from "../PostsList";
import { PostContext } from "../PostProvider";

export const SkillsList = ({ userId, ...props }) => {
  const { getUserPosts } = useContext(PostContext);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    getUserPosts("skill", userId).then(setUserSkills);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PostsList
      headerText="Skills"
      posts={userSkills}
      postType={"skill"}
      {...props}
    />
  );
};
