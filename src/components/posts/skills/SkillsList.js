import React, { useContext, useEffect, useState } from "react";
import { PostsList } from "../PostsList";
import { PostContext } from "../PostProvider";

export const SkillsList = (props) => {
  return <PostsList headerText="Skills" postType={"skill"} {...props} />;
};
