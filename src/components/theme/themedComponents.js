import styled, { css } from "styled-components";

export const Image = styled.img`
  max-width: 80%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SubHeading = styled.h4`
  text-align: center;
  margin: 0;
`;

export const Text = styled.span`
  text-align: center;
`;

export const Container = styled.div`
  border-radius: 20px;
  ${(props) =>
    props.containerStyle
      ? props.containerStyle
      : css`
          flex-direction: column;
          width: 50%;
          margin: 0.2rem;
          padding: 1rem;
          align-items: center;
          background: azure;
          justify-content: space-around;
        `};
`;

export const Box = styled.div`
  border-radius: 10px;
  ${({ theme }) => css`
    background: ${theme.colors.azure};
  `}

  /* everything in the CSS fragment below can be overridden*/
  ${(props) =>
    props.boxStyle
      ? props.boxStyle
      : css`
          margin: 0.5rem;
          padding-top: 1rem;
          padding-right: 1rem;
          padding-left: 1rem;
          text-align: center;
          min-width: 70%;
          flex-grow: 1;
          flex-shrink: 1;
        `}

  /* extra styling for the form version of a box */
  ${(props) =>
    props.isForm &&
    css`
      background: ${props.theme.colors.lavender};
      justify-content: center;
      opacity: 40%;
      :hover,
      :focus-within {
        opacity: 100%;
      }
    `}
`;
