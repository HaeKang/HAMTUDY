import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Window from "./Window";

function WindowShare() {
  return (
    <WindowShareBlock>
      <Window />
    </WindowShareBlock>
  );
}

const WindowShareBlock = styled.div`
  flex: 1;
  border: 1px solid blue;
  height: 800px;
  position: relative;
`;

export default WindowShare;
