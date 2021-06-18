import React from "react";
import { Route } from "react-router-dom";
import { Resume } from "./resume/Resume";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <h2>Homepage</h2>
      </Route>
      <Route exact path="/resume/:userId(\d+)">
        <Resume />
      </Route>
    </>
  );
};
