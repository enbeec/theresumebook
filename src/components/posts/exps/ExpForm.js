import React, { useContext, UseEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ExpContext } from "./ExpProvider";

export const ExpForm = (props) => {
  const { addExp } = useContext(ExpContext);
  const userId = parseInt(localStorage.getItem("trb_user"));
  const [exp, setExp] = useState({
    title: "",
    desc: "",
    postTypeId: 1,
    userId: userId,
  });

  const updateExp = (event) => {
    const newExp = { ...exp };
    newExp[event.target.id] = event.target.value;
    setExp(newExp);
  };

  const sendExp = (event) => {
    event.preventDefault();

    if (exp.title === "" || exp.desc === "") {
      window.alert(
        "Please give your experience entry a title and a description."
      );
    } else {
      addExp(exp).then(() => `/resume/${userId}`);
    }
  };
};
