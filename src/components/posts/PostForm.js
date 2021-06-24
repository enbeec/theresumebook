import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PostContext } from "./PostProvider";

export const PostForm = ({ Box, boxStyle, postType, triggerRender }) => {
  const { addPost, postTypeIds } = useContext(PostContext);
  const [displayForm, setDisplayForm] = useState(false);

  const [post, setPost] = useState({
    userId: localStorage.getItem("trb_user"),
    postTypeId: postTypeIds[postType],
    title: "",
    desc: "",
    thumbnail: "",
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(postType, post).then(() => {
      setDisplayForm(false);
      triggerRender();
    });
  };

  const handleControlledChange = (e) => {
    const newPostCopy = { ...post };
    newPostCopy[e.target.id] = e.target.value;
    setPost(newPostCopy);
  };

  const TextField = ({ fieldFor, fieldLabel, postType, controlledChange }) => (
    <fieldset>
      <label>
        {fieldLabel}
        <br />
        <input
          type="text"
          id={fieldFor}
          key={fieldFor + postType}
          required
          value={post[fieldFor]}
          onChange={controlledChange}
        />
      </label>
    </fieldset>
  );

  return !displayForm ? (
    <Box isForm={true} boxStyle={boxStyle}>
      <button onClick={() => setDisplayForm(true)}>Add a {postType}</button>
    </Box>
  ) : (
    <Box isForm={true} boxStyle={boxStyle}>
      <form>
        {/* TextFields must be called like this to avoid losing focus on rerender */}
        {TextField({
          fieldFor: "title",
          fieldLabel: "Title:",
          postType: postType,
          controlledChange: handleControlledChange,
        })}

        {TextField({
          fieldFor: "desc",
          fieldLabel: "Description:",
          postType: postType,
          controlledChange: handleControlledChange,
        })}

        {postType === "project" && (
          <>
            {TextField({
              fieldFor: "link",
              fieldLabel: "Link:",
              postType: postType,
              controlledChange: handleControlledChange,
            })}
            {TextField({
              fieldFor: "thumbnail",
              fieldLabel: "Thumbnail Link:",
              postType: postType,
              controlledChange: handleControlledChange,
            })}
          </>
        )}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Box>
  );
};
