import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./ResumeBook.css";

export const ResumeBook = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("trb_user")) {
          return <>The ResumeBook</>;
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
