import React, { useState } from "react";
import styled from "styled-components";
import Chat from "./Chat";
import colors from "../styles/colors";

function Chatting({ open }) {
  const [chat, setChat] = useState("");

  const onChage = (e) => {
    e.preventDefault();
    setChat(e.target.value);
    console.log(chat);
  };

  return (
    <>
      {open && (
        <ChattingBlock>
          <div className="title">채팅</div>
          <ChattingHistory>
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />

            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
            <Chat
              nickname={"진돌"}
              text={"후아암 리액트는 어려어~"}
              time={"3:30"}
            />
          </ChattingHistory>
          <ChattingUtilBox>
            <ChattingInput onChange={onChage} placeholder="입력하세요." />
          </ChattingUtilBox>
        </ChattingBlock>
      )}
    </>
  );
}

const ChattingBlock = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  .title {
    padding: 20px 30px;
    background-color: white;
    font-size: 14px;
  }

  height: 100%;
`;
const ChattingHistory = styled.div`
  width: 100%;
  height: 80%;
  overflow: scroll;
`;
const ChattingUtilBox = styled.div`
  border-top: 1px solid ${colors.gray};
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.gray};
  padding-bottom: 20px;
`;
const ChattingInput = styled.input`
  border: none;
  background-color: transparent;
  height: 40px;
  padding: 0 20px;
`;
const CharringSendButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: transparent;
`;

export default Chatting;
