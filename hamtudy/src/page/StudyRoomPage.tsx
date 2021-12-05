import React, { useState } from "react";
import styled from "styled-components";

import Chatting from "../components/Chatting"
import WindowShare from "../components/WindowShare";
import StudyRoomBottomUtil from "../components/StudyRoomBottomUtil";
import Template from "../components/Template";

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
        flex: 1;
      }
    }
    .chat {
      flex: 1;
    }
  }
`;

function StudyRoom() {
  const [onShare, setOnShare] = useState<boolean>(false);
  const onShareClick = () => {
    setOnShare(!onShare);
  };
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <Template>
      <Wrapper>
        <div className="wrapper">
          <div className="roomContainer">
            <div className="share">
              <div className="window">
                <WindowShare onShare={onShare} />
              </div>
              <div className="util">
                <StudyRoomBottomUtil
                  onShareClick={onShareClick}
                  onToggle={onToggle}
                />
              </div>
            </div>
            {open && (
              <div className="chat">
                <Chatting open={open}></Chatting>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </Template>
  );
}


export default StudyRoom;
