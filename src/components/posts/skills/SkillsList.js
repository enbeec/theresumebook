import React from "react";
import { PostsList } from "../PostsList";

export const SkillsList = (props) => {
  return <PostsList postType={"skill"} {...props} />;
};
