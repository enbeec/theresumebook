import React from "react";
import useComments from "../../hooks/useComments";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
        <Comment key={c.id}>
          <span>{c.text}</span>
          <div
            style={{
              textAlign: "right",
              paddingRight: "4rem",
            }}
          >
            <ShadowLink to={`/resume/${c.user.id}`}>{c.user.name}</ShadowLink>
          </div>
        </Comment>
      ))}
    </div>
  );
};

const ShadowLink = styled(Link)`
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    :hover {
      color: ${theme.colors.grey};
      text-shadow: 1px 1px 1px ${theme.colors.darkergrey};
    }
  `}
`;

const Comment = styled.div`
  ${({ theme }) => css`
    opacity: 90%;
    :hover {
      opacity: 100%;
    }
  `}
`;
