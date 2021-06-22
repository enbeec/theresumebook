import React from "react";
import styled from "styled-components";

export const PostForm = ({ postBox, postType }) => {
  const Box = styled(postBox)`
    background: lavender;
    opacity: 40%;
    justify-content: center;
    :hover,
    :focus-within {
      opacity: 100%;
    }
  `;

  // prettier-ignore
  return (
    <Box isForm>
      <form>
        <div><label> Title:
			<br />
            <input type="text" name="title" />
		</label></div>
        <div><label> Description:
            <br />
            <input type="text" name="desc" />
		</label></div>
        {postType === "project" && (
          <>
            <div><label>Link:
                <br />
                <input type="text" name="thumbnail" />
            </label></div>
            <div><label>
                Thumbnail Link:
				<input type="text" name="thumbnail" />
			</label></div>
          </>
        )}
      </form>
    </Box>
  );
};
