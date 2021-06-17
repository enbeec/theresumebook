import React from "react";
import { Route } from "react-router-dom";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <h2>Homepage</h2>
      </Route>
      <Route exact path="/resume/:userId(\d+)">
        <h2>
          Resume for the user whose Id you see at the end of your URL right now
          🙈
        </h2>
      </Route>
    </>
  );
};
