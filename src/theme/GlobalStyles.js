import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./fonts";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
	${fontFaces}
	body, select, button, input {
		font-family: Iosevka;
		font-style: normal;
	}

	body, button {
		background: ${theme.colors.paleyellow}
	}

	button, select {
		font-size: ${theme.fontSizes[2]}px;
	}
`;
