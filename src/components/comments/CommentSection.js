import React, { useEffect } from "react";
import useComments from "../../hooks/useComments";
import { ShadowLink, CommentBox } from "../../theme/themedComponents";
import { CommentForm } from "./CommentForm";
import { useSet } from "../../hooks/useSet";

export const CommentSection = ({ foreignKeys, ...props }) => {
  const [comments, setComments, fetchComments, deleteComment] =
    useComments(foreignKeys);
  const [editingCommentIds, edit, doneEditing] = useSet();

  useEffect(() => {
    fetchComments(foreignKeys).then(setComments);
  }, [foreignKeys, editingCommentIds]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {comments.map((c) =>
        [...editingCommentIds].indexOf(c.id) >= 0 ? (
          <CommentForm key={c.id} commentObj={c} renderCallback={doneEditing} />
        ) : (
          <CommentBox key={c.id}>
            <span>{c.text}</span>
            <div
              style={{
                textAlign: "right",
                paddingRight: "2rem",
              }}
            >
              <ShadowLink to={`/resume/${c.user.id}`}>{c.user.name}</ShadowLink>
            </div>
            {c.userId === parseInt(localStorage.getItem("trb_user")) && (
              <div style={{ textAlign: "center" }}>
                <button
                  style={{ marginRight: "0.1rem" }}
                  onClick={() => {
                    edit(c.id);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteComment(c.id).then(() => doneEditing())}
                >
                  Delete
                </button>
              </div>
            )}
          </CommentBox>
        )
      )}
      <CommentForm foreignKeys={foreignKeys} renderCallback={doneEditing} />
    </div>
  );
};
