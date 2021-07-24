import React from "react";
import styled from "styled-components";

function Chat({ nickname, text, time }) {
  return (
    <ChatBlock>
      <UserInfoBlock>
        <div className="profile"></div>
        <div className="nickname">{nickname}</div>
      </UserInfoBlock>
      <div className="chat-text">{text}</div>
      <div className="chat-time">{time}</div>
    </ChatBlock>
  );
}

const UserInfoBlock = styled.div`
  display: flex;
  align-items: center;
  .nickname {
  }
  .profile {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: aqua;
  }
`;

const ChatBlock = styled.div`
  .chat-time {
    font-size: 12px;
  }
  margin-bottom: 20px;
`;

export default Chat;
