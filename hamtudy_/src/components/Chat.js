import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

function Chat({ nickname, profile, text, time }) {
  return (
    <ChatBlock>
      <div className="profile"></div>
      <div className="nickname-time-chat-text">
        <div className="nickname-time">
          <div className="nickname">{nickname}</div>
          <div className="chat-time">{time}</div>
        </div>
        <div className="chat-text">{text}</div>
      </div>
    </ChatBlock>
  );
}

const ChatBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  .nickname-time {
    margin-bottom: 4px;
  }
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${colors.black};
    margin-right: 12px;
  }
  .nickname {
    font-size: 14px;
    font-weight: bold;
    margin-right: 4px;
  }
  .chat-time {
    font-size: 8px;
  }
  .chat-text {
    font-size: 14px;
  }
  .nickname-time {
    display: flex;
    align-items: center;
  }
  margin-bottom: 30px;
`;

export default Chat;
