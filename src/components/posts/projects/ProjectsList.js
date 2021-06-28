import React from "react";
import { css } from "styled-components";
import { PostsList } from "../PostsList";

export const ProjectsList = ({ ...props }) => {
  // projects are a little more complicated than skills or exps
  //  so we need some custom styling for PostsList
  const projectsContainerStyle = css`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: space-evenly;
  `;

  const projectBoxStyle = css`
    min-height: 9rem;
    margin: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    background: azure;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 40%;
    flex-grow: 0.15;
    flex-shrink: 1;
  `;

  return (
    <PostsList
      postType={"project"}
      boxStyle={projectBoxStyle}
      containerStyle={projectsContainerStyle}
      thumbnail
      {...props}
    />
  );
};
