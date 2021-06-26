import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { UserProvider } from "./users/UserProvider";
import { ApplicationViews } from "./ApplicationViews";
import { CommentSection } from "./comments/CommentSection";

export const ResumeBook = () => (
  <>
    <Route
      path="/"
      render={() => {
        if (localStorage.getItem("trb_user")) {
          return (
            <ThemeProvider theme={theme}>
              <UserProvider>
                <NavBar />
                <CommentSection
                  foreignKeys={{
                    userId: 1,
                  }}
                />
                <ApplicationViews />
              </UserProvider>
            </ThemeProvider>
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
