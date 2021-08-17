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
          <div className="chatting-history">
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
          </div>
          <div className="chatting-util">
            <ChattingUtilBox>
              <ChattingInput onChange={onChage} placeholder="입력하세요." />
            </ChattingUtilBox>
          </div>
        </ChattingBlock>
      )}
    </>
  );
}

const ChattingBlock = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  .title {
    padding: 20px 30px;
    background-color: white;
    font-size: 14px;
  }
  .chatting-history {
    flex: 10;
    overflow: scroll;
    padding-top: 10px;
  }
  .chatting-util {
    flex: 1.2;
    border-top: 1px solid ${colors.gray};
    height: 60px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-color: ${colors.gray};
    padding-bottom: 20px;
  }
  height: 100%;
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

export default Chatting;
