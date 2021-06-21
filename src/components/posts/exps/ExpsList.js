import React, { useContext, useEffect, useState } from "react";
import { PostsList } from "../PostsList";
import { ExpContext } from "./ExpProvider";

export const ExpsList = ({ userId }) => {
  const { getUserExps } = useContext(ExpContext);
  const [userExps, setUserExps] = useState([]);

  useEffect(() => {
    getUserExps(userId).then(setUserExps);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return <PostsList headerText="Experience" posts={userExps} />;
};
