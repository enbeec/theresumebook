import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { CommentBox } from "../../theme/themedComponents";

export const CommentForm = ({
  commentObj,
  foreignKeys,
  renderCallback,
  ...props
}) => {
  const postComment = (commentObj) =>
    fetch("http://localhost:6501/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentObj),
    });

  const putComment = (commentObj) =>
    fetch(`http://localhost:6501/comments/${commentObj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentObj),
    });

  const [displayForm, setDisplayForm] = useState(false);
  const [comment, setComment] = useState(
    commentObj
      ? commentObj
      : {
          // we don't have a postId if the section is for an entire list of posts
          postId: foreignKeys.postId || 0,
          postTypeId: foreignKeys.postTypeId,
          postAuthorId: foreignKeys.postTypeId,
          userId: parseInt(localStorage.getItem("trb_user")),
          text: "",
        }
  );

  const handleControlledChange = (e) => {
    const newCommentCopy = { ...comment };
    newCommentCopy[e.target.id] = e.target.value;
    setComment(newCommentCopy);
  };

  const handleSubmit = (e) => {
    // TODO validation
    e.preventDefault();
    if (comment.id) {
      putComment(comment).then(() => renderCallback(comment.id));
    } else {
      // POST then setDisplayForm false and callback
      postComment(comment).then(() => {
        setDisplayForm(false);
        renderCallback();
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (comment.id) {
      renderCallback(comment.id);
    } else {
      setDisplayForm(false);
    }
  };

  const clickRef = useRef();
  useClickOutside(clickRef, () => {
    renderCallback(comment.id);
  });

  return !displayForm && !commentObj ? (
    <div onClick={() => setDisplayForm(true)}>-- add a comment --</div>
  ) : (
    <CommentBox ref={clickRef}>
      <form style={{ textAlign: "center" }}>
        <fieldset>
          <input
            type="text"
            id="text"
            required
            value={comment.text}
            onChange={handleControlledChange}
          />
        </fieldset>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </CommentBox>
  );
};
