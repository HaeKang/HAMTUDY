import React, { useState } from "react";
import styled from "styled-components";

import Chatting from "./components/Chatting";
import StudyRoomTemplate from "./components/StudyRoomTemplate";
import WindowShare from "./components/WindowShare";
import StudyRoomBottomUtil from "./components/StudyRoomBottomUtil";

function StudyRoom() {
  const [share, setShare] = useState(false);
  const onShareClick = () => {
    setShare(!share);
  };
  console.log("share", share);
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <StudyRoomTemplate>
      <TMP>
        <TMP2>
          <WindowShare share={share} />
          <StudyRoomBottomUtil
            onShareClick={onShareClick}
            onToggle={onToggle}
          />
        </TMP2>
        <Chatting open={open}></Chatting>
      </TMP>
    </StudyRoomTemplate>
  );
}
const TMP2 = styled.div`
  position: relative;
`;
const TMP = styled.div`
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid blue;
  display: flex;
`;

export default StudyRoom;
