import React from "react";
import { PostsList } from "../PostsList";

export const ExpsList = (props) => {
  return <PostsList postType={"exp"} {...props} />;
};
