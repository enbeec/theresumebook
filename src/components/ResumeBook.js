import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { GlobalStyles } from "../theme/GlobalStyles";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { UserProvider } from "./users/UserProvider";
import { ApplicationViews } from "./ApplicationViews";

export const ResumeBook = () => (
  <>
    <Route
      path="/"
      render={() => {
        if (localStorage.getItem("trb_user")) {
          return (
            <ThemeProvider theme={theme}>
              <UserProvider>
                <GlobalStyles />
                <NavBar />
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
