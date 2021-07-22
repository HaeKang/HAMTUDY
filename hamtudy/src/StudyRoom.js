import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Chatting from "./components/Chatting";
import StudyRoomTemplate from "./components/StudyRoomTemplate";
import WindowShare from "./components/WindowShare";

function StudyRoom() {
  return (
    <div className="App">
      <StudyRoomTemplate>
        <WindowShare />
        <Chatting></Chatting>
      </StudyRoomTemplate>
    </div>
  );
}

export default StudyRoom;
