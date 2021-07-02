import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Resume } from "./resume/Resume";

export const ApplicationViews = () => {
  return (
    <>
      {/* TODO --> HOMEPAGE */}
      <Route exact path="/">
        <Redirect to={`/resume/${localStorage.getItem("trb_user")}`} />
      </Route>
      {/* VIEW RESUME */}
      <Route exact path="/resume/:userId(\d+)">
        <Resume />
      </Route>
    </>
  );
};
