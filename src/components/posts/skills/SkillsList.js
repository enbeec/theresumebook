import React, { useContext, useEffect, useState } from "react";
import { PostsList } from "../PostsList";
import { SkillContext } from "./SkillProvider";

export const SkillsList = ({ userId }) => {
  const { getUserSkills } = useContext(SkillContext);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    getUserSkills(userId).then(setUserSkills);
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return <PostsList headerText="Skills" posts={userSkills} />;
};
