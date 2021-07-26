import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

function StudyRoomBottomUtil({ onToggle }) {
  return (
    <BottomBlock>
      <div className="getout">x</div>
      <button onClick={onToggle} className="chatting">
        채팅
      </button>
    </BottomBlock>
  );
}

const BottomBlock = styled.div`
  width: 100%;
  height: 100px;
  bottom: 0;
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: ${colors.gray};
  .getout {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${colors.red};
    width: 50px;
    height: 50px;
  }
  .chatting {
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid black;
  }
`;
export default StudyRoomBottomUtil;
