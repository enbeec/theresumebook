import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Resume } from "./resume/Resume";
import { Heading } from "rebass";

export const ApplicationViews = () => {
  const currentUserPath = `/resume/${localStorage.getItem("trb_user")}`;
  return (
    <>
      {/* HOMEPAGE */}
      <Route exact path="/">
        <Heading sx={{ textAlign: "center" }}>Homepage</Heading>
      </Route>
      {/* MY RESUME */}
      <Route exact path={currentUserPath}>
        <MINE />
      </Route>
      {/* VIEW RESUME */}
      <Route exact path="/resume/:userId(\d+)">
        <Resume />
      </Route>
    </>
  );
};

const MINE = (props) => (
  <div style={{ textAlign: "center" }}>THIS IS MY RESUME</div>
);
