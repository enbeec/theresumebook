import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Resume } from "./resume/Resume";

export const ApplicationViews = () => {
  return (
    <>
      {/* HOMEPAGE */}
      <Route exact path="/">
        <h2>Homepage</h2>
      </Route>
      {/* VIEW RESUME */}
      <Route exact path="/resume/:userId(\d+)">
        <Resume />
      </Route>
    </>
  );
};
