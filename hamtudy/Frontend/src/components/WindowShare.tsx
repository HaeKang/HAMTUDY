import React from "react";
import styled from "styled-components";
import Window from "./Window";

type WindowShareProps = {
  onShare:boolean
}

function WindowShare({onShare} :WindowShareProps) {
  return (
    <WindowShareBlock>
      <Window onShare={onShare} />
    </WindowShareBlock>
  );
}

const WindowShareBlock = styled.div`
  height: 100%;
`;

export default WindowShare;
