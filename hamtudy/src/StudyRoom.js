import React, { useState } from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Chatting from "./components/Chatting";
import StudyRoomTemplate from "./components/StudyRoomTemplate";
import WindowShare from "./components/WindowShare";
import StudyRoomBottomUtil from "./components/StudyRoomBottomUtil";

function StudyRoom() {
  const [open, setOpen] = useState(false);
  const onToggle = (e) => {
    setOpen(!open);
  };
  console.log("open", open);
  return (
    <div className="App">
      <StudyRoomTemplate>
        <WindowShare />
        <StudyRoomBottomUtil onToggle={onToggle} />
        <Chatting open={open}></Chatting>
      </StudyRoomTemplate>
    </div>
  );
}

export default StudyRoom;
