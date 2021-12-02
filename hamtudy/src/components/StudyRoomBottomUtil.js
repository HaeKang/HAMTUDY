import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

function StudyRoomBottomUtil({ onToggle, onShareClick }) {
  return (
    <BottomBlock>
      <div className="share" onClick={onShareClick}>
        화면공유
      </div>
      <div className="getout">스터디룸 나가기</div>
      <button onClick={onToggle} className="chatting">
        채팅
      </button>
    </BottomBlock>
  );
}

const BottomBlock = styled.div`
  border-top: 1px solid ${colors.gray};
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .share {
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid black;
  }
  .getout {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: center;
    border-radius: 8px;
    background-color: ${colors.red};
    height: 40px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: bold;
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
