import indefinite from "indefinite";
import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export const PostForm = ({
  Box,
  boxStyle,
  postType,
  altPostType,
  renderCallback,
  addPostFunc,
  postTypeIds,
  postObj,
  putPostFunc,
}) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [post, setPost] = useState(
    postObj
      ? postObj
      : {
          userId: parseInt(localStorage.getItem("trb_user")),
          postTypeId: postTypeIds[postType],
          title: "",
          desc: "",
          thumbnail: "",
          link: "",
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      // if the post already has an ID, PUT it
      putPostFunc(post).then(() => {
        setDisplayForm(false);
        // tell the parent which post we just finished editing
        renderCallback(post.id);
      });
    } else {
      addPostFunc(post).then(() => {
        setDisplayForm(false);
        renderCallback();
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (post.id) {
      renderCallback(post.id);
    } else {
      setDisplayForm(false);
    }
  };

  const handleControlledChange = (e) => {
    const newPostCopy = { ...post };
    newPostCopy[e.target.id] = e.target.value;
    setPost(newPostCopy);
  };

  const TextField = ({ fieldFor, fieldLabel, controlledChange }) => (
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

  // implement the custom hook useClickOutside to tell the postlist we're done editing
  const clickRef = useRef();
  useClickOutside(clickRef, () => {
    renderCallback(post.id ? post.id : undefined);
  });

  /* test for NO postObj (indicates editing rather than creating) and
      NOT our minimode state -- if that is the case, render minimode
    OTHERWISE render the form with the clickRef used to close the form
  */
  return !displayForm && !postObj ? (
    <Box isForm={true} boxStyle={boxStyle}>
      <button onClick={() => setDisplayForm(true)}>
        Add {indefinite(altPostType || postType)}
      </button>
    </Box>
  ) : (
    <Box isForm={true} boxStyle={boxStyle} ref={clickRef}>
      <form>
        {/* TextFields must be called like this to avoid losing focus on rerender */}
        {TextField({
          fieldFor: "title",
          fieldLabel: "Title:",
          controlledChange: handleControlledChange,
        })}

        {TextField({
          fieldFor: "desc",
          fieldLabel: "Description:",
          controlledChange: handleControlledChange,
        })}

        {postType === "project" && (
          <>
            {TextField({
              fieldFor: "link",
              fieldLabel: "Link:",
              controlledChange: handleControlledChange,
            })}
            {TextField({
              fieldFor: "thumbnail",
              fieldLabel: "Thumbnail Link:",
              controlledChange: handleControlledChange,
            })}
          </>
        )}
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </Box>
  );
};
