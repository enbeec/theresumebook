import React from "react";
import useComments from "../../hooks/useComments";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ShadowLink, CommentBox } from "../../theme/themedComponents";

export const CommentSection = ({ foreignKeys, ...props }) => {
  const comments = useComments(foreignKeys);
  return comments.isLoading ? (
    <div>...loading...</div>
  ) : comments.error ? (
    <div>ERROR</div>
  ) : (
    // TODO make this a styled component
    <div
      style={{
        textAlign: "center",
      }}
    >
      {comments.data.map((c) => (
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
        </CommentBox>
      ))}
    </div>
  );
};
