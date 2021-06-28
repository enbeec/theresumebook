import { css } from "styled-components";

import regular from "../fonts/iosevka-etoile-regular.woff2";
import oblique from "../fonts/iosevka-etoile-oblique.woff2";
import medium from "../fonts/iosevka-etoile-medium.woff2";
import mediumOblique from "../fonts/iosevka-etoile-mediumoblique.woff2";

export const fontFaces = css`
  @font-face {
    font-family: "Iosevka";
    src: url(${regular}) format("woff2");
    font-style: normal;
  }

  @font-face {
    font-family: "Iosevka";
    src: url(${oblique}) format("woff2");
    font-style: oblique;
  }

  @font-face {
    font-family: "Iosevka Medium";
    src: url(${medium}) format("woff2");
    font-style: normal;
  }

  @font-face {
    font-family: "Iosevka Medium";
    src: url(${mediumOblique}) format("woff2");
    font-style: oblique;
  }
`;
