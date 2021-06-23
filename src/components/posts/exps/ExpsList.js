import React, { useContext, useEffect, useState } from "react";
import { PostsList } from "../PostsList";
import { PostContext } from "../PostProvider";

export const ExpsList = (props) => {
  return <PostsList headerText="Experience" postType={"exp"} {...props} />;
};
