import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

function Chat({ nickname, text, time }) {
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
  .profile {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: ${colors.black};
    margin-right: 10px;
  }
  .chat-time {
    font-size: 8px;
  }
  .chat-text {
    font-size: 10px;
  }
  .nickname-time {
    display: flex;
    align-items: center;
  }
  margin-bottom: 20px;
`;

export default Chat;
