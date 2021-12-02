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
  height: 100%;
`;

export default WindowShare;
