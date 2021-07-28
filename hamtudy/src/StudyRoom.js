import React, { useState } from "react";
import { Route } from "react-router";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import Chatting from "./components/Chatting";
import StudyRoomTemplate from "./components/StudyRoomTemplate";
import WindowShare from "./components/WindowShare";
import StudyRoomBottomUtil from "./components/StudyRoomBottomUtil";

function StudyRoom() {
  const [open, setOpen] = useState(true);
  const onToggle = (e) => {
    setOpen(!open);
  };
  console.log("open", open);
  return (
    <div className="App">
      <StudyRoomTemplate>
        <TMP>
          <TMP2>
            <WindowShare />
            <StudyRoomBottomUtil onToggle={onToggle} />
          </TMP2>
          <Chatting open={open}></Chatting>
        </TMP>
      </StudyRoomTemplate>
    </div>
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
