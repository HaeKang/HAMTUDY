import { createGlobalStyle } from "styled-components";
import colors from "./colors";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
  list-style: none;
  background-color: ${colors.background};
  color: ${colors.black};
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
}
input {
  border: none;
  :focus{outline:none;}
}
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
