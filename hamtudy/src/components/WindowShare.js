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
  border: 1px solid blue;
  width: 1200px;
  height: 800px;
`;

export default WindowShare;
