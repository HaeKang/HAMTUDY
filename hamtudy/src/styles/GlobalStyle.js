import { createGlobalStyle } from "styled-components";
import colors from "./colors";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: center;
  justify-content: center;
  width: 1400px;
  list-style: none;
}
input:focus {outline:none;}
a {
  :link{text-decoration: none;}
  :visited{
    text-decoration: none;
    color: ${colors.black};
  }
  :hover {cursor: pointer;}
}

`;
export default GlobalStyle;
