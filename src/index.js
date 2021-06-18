import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ResumeBook } from "./components/ResumeBook";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ResumeBook />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
