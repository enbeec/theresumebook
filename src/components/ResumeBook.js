import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { UserProvider } from "./users/UserProvider";
import { ApplicationViews } from "./ApplicationViews";
import { ExpProvider } from "./posts/ExpProvider";
import { SkillProvider } from "./posts/skills/SkillProvider";
import { ProjectProvider } from "./posts/ProjectProvider";

export const ResumeBook = () => (
  <>
    <Route
      path="/"
      render={() => {
        if (localStorage.getItem("trb_user")) {
          return (
            <>
              <UserProvider>
                <ExpProvider>
                  <SkillProvider>
                    <ProjectProvider>
                      <NavBar />
                      <ApplicationViews />
                    </ProjectProvider>
                  </SkillProvider>
                </ExpProvider>
              </UserProvider>
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
