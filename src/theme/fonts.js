import { css } from 'styled-components'

import regular from '../fonts/iosevka-etoile-regular.woff2'

export const fontFaces = css`
	@font-face {
		font-family: 'Iosevka';
		src: url(${regular}) format('woff2');
		font-style: normal;
	}
`;
