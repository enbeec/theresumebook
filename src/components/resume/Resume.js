import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Resume = () => (
  <>
    <div className="resumeContainer ">
      <div className="projectsContainer ">
        <div className="project centered">project 1</div>
        <div className="project centered">project 2</div>
        <div className="project centered">project 3</div>
      </div>
      <div className="skillsAndExpsContainer ">
        <div className="skillsContainer ">
          <div className="skill centered">skill 1</div>
          <div className="skill centered">skill 2</div>
          <div className="skill centered">skill 3</div>
        </div>
        <div className="expsContainer ">
          <div className="exp centered">exp 1</div>
          <div className="exp centered">exp 2</div>
          <div className="exp centered">exp 3</div>
        </div>
      </div>
    </div>
  </>
);
