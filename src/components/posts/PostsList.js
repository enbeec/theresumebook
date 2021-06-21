import React from "react";
import styled, { css } from "styled-components";

export const PostsList = ({
  headerText,
  postType,
  posts,
  postBox,
  postsContainer,
  thumbnail,
  displayForm,
}) => {
  const Box = postBox ? postBox : defaultBox;
  const Container = postsContainer ? postsContainer : defaultContainer;
  return (
    <Container>
      {headerText && <Heading> {headerText} </Heading>}
      {posts.map((p) => (
        <Box key={p.id}>
          <SubHeading> {p.title}</SubHeading>
          {thumbnail && (
            <a href={p.link} target="_blank" rel="noreferrer">
              <Image src={p.thumbnail} />
            </a>
          )}
          <Text>{p.desc}</Text>
        </Box>
      ))}
      {displayForm && (
        <Box isForm>
          {/* TODO style this */}
          {/* TODO add a submit button*/}
          <form>
            <div>
              <label>
                Title:
                <br />
                <input type="text" name="title" />
              </label>
            </div>
            <div>
              <label>
                Description:
                <br />
                <input type="text" name="desc" />
              </label>
            </div>
            {postType === "project" && (
              <>
                <div>
                  <label>
                    Link:
                    <br />
                    <input type="text" name="thumbnail" />
                  </label>
                </div>
                <div>
                  <label>
                    Thumbnail Link:
                    <input type="text" name="thumbnail" />
                  </label>
                </div>
              </>
            )}
          </form>
        </Box>
      )}
    </Container>
  );
};

const Image = styled.img`
  max-width: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Heading = styled.h2`
  text-align: center;
`;

const SubHeading = styled.h4`
  text-align: center;
  margin: 0;
`;

const Text = styled.span`
  text-align: center;
`;

export const formStyle = (props) =>
  props.isForm
    ? css`
        background: lavender;
        opacity: 70%;
        justify-content: center;
        :hover {
          opacity: 100%;
        }
      `
    : css`
        background: azure;
      `;

const defaultBox = styled.div`
  margin: 0.5rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: center;
  min-width: 70%;
  flex-grow: 1;
  flex-shrink: 1;

  ${formStyle}
`;

const defaultContainer = styled.div`
  width: 50%;
  margin: 0%;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
