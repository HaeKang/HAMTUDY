import React from "react";
import styled from "styled-components";

function Chatting() {
  return (
    <>
      <ChattingBlock></ChattingBlock>
    </>
  );
}

const ChattingBlock = styled.div`
  width: 200px;
  height: 800px;
  border: 1px solid black;
`;

export default Chatting;
