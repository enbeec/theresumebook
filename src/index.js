import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ResumeBook } from "./components/ResumeBook";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <ResumeBook />
      </Router>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);
