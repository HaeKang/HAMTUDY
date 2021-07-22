import React from "react";
import styled from "styled-components";

function WindowShare() {
  return (
    <WindowShareBlock>
      <BottomBlock></BottomBlock>
    </WindowShareBlock>
  );
}

const WindowShareBlock = styled.div`
  flex: 1;
  border: 1px solid blue;
  height: 800px;
`;

const BottomBlock = styled.div`
  width: 100%;
  height: 30px;
  bottom: 0;
  position: relative;
  background-color: aqua;
`;

export default WindowShare;
