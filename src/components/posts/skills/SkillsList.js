import React from "react";
import { PostsList } from "../PostsList";

export const SkillsList = (props) => {
  return <PostsList headerText="Skills" postType={"skill"} {...props} />;
};
