import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { UserProvider } from "./users/UserProvider";
import "./ResumeBook.css";
import { ApplicationViews } from "./ApplicationViews";

export const ResumeBook = () => (
  <>
    <Route
      path="/"
      render={() => {
        if (localStorage.getItem("trb_user")) {
          return (
            <>
              <h1>The ResumeBook</h1>
              <UserProvider>
                <NavBar />
                <ApplicationViews />
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
