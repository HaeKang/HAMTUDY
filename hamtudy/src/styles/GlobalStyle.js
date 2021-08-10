import { createGlobalStyle } from "styled-components";
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

a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
}
`;
export default GlobalStyle;
