import React from "react";
import useComments from "../../hooks/useComments";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            }}
          >
            <ShadowLink to={`/resume/${c.user.id}`}>
              {" "}
              -- {c.user.name}
            </ShadowLink>
          </div>
        </>
      ))}
    </div>
  );
};

const ShadowLink = styled(Link)`
  text-decoration: none;
  color: darkgrey;
  :hover {
    text-shadow: 0px 1px lightgrey;
  }
`;
