import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./fonts";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
	${fontFaces}
	body, select, button, input {
		font-family: Iosevka;
		font-style: normal;
		background: ${theme.colors.paleyellow}
	}
`;
