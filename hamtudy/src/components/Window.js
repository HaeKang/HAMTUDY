import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
function Window() {
  return (
    <>
      <WindowBlock></WindowBlock>
    </>
  );
}
const WindowBlock = styled.div`
  width: 500px;
  height: 400px;
  background-color: ${colors.black};
`;
export default Window;
