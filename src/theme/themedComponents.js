import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  max-width: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SubHeading = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[3]}px;
  `}
  text-align: center;
  margin: 0.3rem;
  margin-bottom: 0.6rem;
`;

export const Text = styled.span`
  text-align: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.radii[2]};
  `}
  ${(props) =>
    props.containerStyle
      ? props.containerStyle
      : css`
          flex-direction: column;
          width: 50%;
          margin: 0.8rem;
          padding: 0.5rem;
          align-items: center;
          background: azure;
          justify-content: space-around;
        `};
`;

export const Box = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.radii[1]};
    background: ${theme.colors.azure};
  `}

  /* everything in the CSS fragment below can be overridden*/
  ${(props) =>
    props.boxStyle
      ? props.boxStyle
      : css`
          margin: 1rem;
          padding-top: 0.5rem;
          padding-right: 0.5rem;
          padding-left: 0.5rem;
          text-align: center;
          min-width: 70%;
          flex-grow: 1;
          flex-shrink: 1;
        `}

  /* extra styling for the form version of a box */
  ${({ theme, ...props }) =>
    props.isForm &&
    css`
      padding: 0.5rem;
      background: ${theme.colors.lavender};
      justify-content: center;
      transition: opacity 85ms ease-in-out;
      opacity: 40%;
      :hover,
      :focus-within {
        opacity: 100%;
      }
    `}
`;

export const FlexBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  padding-top: 0.1rem;
  padding-bottom: 0.5rem;
  margin: 0;
`;

export const BarSection = styled.div`
  ${(props) => css`
    align-items: ${props.alignItems || "center"};
  `}
  /* PARENT */
  display: flex;
  flex-flow: column;
  /* CHILD */
  flex-basis: 20%;
`;

export const LogoutButton = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  border-width: 0.2rem;
  border-style: inset;
  background-color: lightgrey;
  color: black;
  /* outline: coral solid 1px; */
  :hover {
    color: coral;
    outline: black solid 0px;
    box-shadow: -1px 2px darkgrey;
  }
  :active {
    background: coral;
    color: white;
  }
`;

export const ShadowLink = styled(Link)`
  text-decoration: none;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[0]};
    color: ${theme.colors.darkgrey};
    :hover {
      color: ${theme.colors.grey};
      text-shadow: 1px 1px 1px ${theme.colors.darkergrey};
    }
  `}
`;

export const CommentBox = styled.div`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.fontSizes[1]}px;
    opacity: 82%;
    :hover {
      opacity: 100%;
    }
  `}
`;
