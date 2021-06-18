import React from "react";
import { Route } from "react-router-dom";
import { Resume } from "./resume/Resume";
import { Heading } from "rebass";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Heading sx={{ textAlign: "center" }}>Homepage</Heading>
      </Route>
      <Route exact path="/resume/:userId(\d+)">
        <Resume />
      </Route>
    </>
  );
};
