import React from "react";
import styled from "styled-components";
import Window from "./Window";

function WindowShare({ share }) {
  return (
    <WindowShareBlock>
      <Window share={share} />
    </WindowShareBlock>
  );
}

const WindowShareBlock = styled.div`
  border: 1px solid blue;
  width: 1200px;
  height: 800px;
`;

export default WindowShare;
