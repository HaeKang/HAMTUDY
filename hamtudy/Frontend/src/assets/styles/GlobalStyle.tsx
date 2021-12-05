import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "../theme/theme";

const GlobalStyle = createGlobalStyle`
	*{
		color: ${theme.fontSize.m}px;
	}
	a{
		text-decoration: none;
	}
	a:link {
		color: black;
	}
	a:visited {
		color: black;
	}
	a:hover {
		text-decoration: none;
		color: black;
	}
	a:active {
		color: black;
	}

	header{
		min-width: 1025px;
		padding: ${theme.spacing.l}rem ${theme.spacing.xxl}rem;
	}
	.container{
		min-width: 1025px;
		height: 100%;
		padding: 0 ${theme.spacing.xxl}rem;
	}

`;

export default GlobalStyle;