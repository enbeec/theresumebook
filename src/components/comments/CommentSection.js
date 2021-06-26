import React, { useState } from "react";
import useComments from "../../hooks/useComments";

export const CommentSection = ({ foreignKeys, ...props }) => {
  const comments = useComments(foreignKeys);
  return comments.isLoading ? (
    <div>...loading...</div>
  ) : comments.error ? (
    <div>ERROR</div>
  ) : (
    <div style={{ textAlign: "center" }}>
      {comments.data.map((c) => (
        <>
          <span>{c.text}</span>
          <div
            style={{
              textAlign: "right",
              paddingRight: "4rem",
              color: "darkgrey",
            }}
          >
            -- User #{c.userId}
          </div>
        </>
      ))}
    </div>
  );
};
