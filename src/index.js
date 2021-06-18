import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ResumeBook } from "./components/ResumeBook";
import { ThemeProvider } from "styled-components";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={trbTheme}>
        <ResumeBook />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
