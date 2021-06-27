import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./fonts";

export const GlobalStyles = createGlobalStyle`
	${fontFaces}
	body, select, button, input {
		font-family: Iosevka;
	}
`;
