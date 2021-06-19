import React, { useContext, useEffect, useState } from "react";
import { Text, Heading, Flex, Box } from "rebass";
import { theme } from "../../../theme/trbTheme";
import { ProjectContext } from "./ProjectProvider";

export const ProjectsList = ({ userId }) => {
  const { getUserProjects } = useContext(ProjectContext);
};
