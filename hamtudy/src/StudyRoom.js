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
  const [open, setOpen] = useState(true);
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <StudyRoomTemplate>
      <Wrapper>
        <div className="wrapper">
          <div className="roomContainer">
            <div className="share">
              <div className="window">
                <WindowShare share={share} />
              </div>
              <div className="util">
                <StudyRoomBottomUtil
                  onShareClick={onShareClick}
                  onToggle={onToggle}
                />
              </div>
            </div>
            <div className="chat">
              <Chatting open={open}></Chatting>
            </div>
          </div>
        </div>
      </Wrapper>
    </StudyRoomTemplate>
  );
}
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 700px;
    .roomContainer {
      display: flex;
      height: 100%;
    }
    .share {
      flex: 4;
      display: flex;
      flex-direction: column;
      .window {
        flex: 7;
      }
      .util {
        background-color: gray;
        flex: 1;
      }
    }
    .chat {
      background-color: blue;
      flex: 1;
    }
  }
`;

export default StudyRoom;
