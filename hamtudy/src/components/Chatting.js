import React, { useState } from "react";
import styled from "styled-components";
import Chat from "./Chat";

function Chatting() {
  const [open, setOpen] = useState(false);
  const onToggle = (e) => {
    setOpen(!open);
  };
  console.log("open", open);
  return (
    <>
      <OpenChattingButton onClick={onToggle}>채팅창 보기!</OpenChattingButton>
      {open && (
        <ChattingBlock>
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
            <ChattingInput placeholder="입력하세요." />
            <CharringSendButton>전송</CharringSendButton>
          </ChattingUtilBox>
        </ChattingBlock>
      )}
    </>
  );
}
const OpenChattingButton = styled.button`
  background-color: white;
`;
const ChattingBlock = styled.div`
  width: 200px;
  height: 800px;
  border: 1px solid black;
`;
const ChattingHistory = styled.div`
  width: 100%;
  height: 95%;
  overflow: scroll;
`;
const ChattingUtilBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 0 10px;
`;
const ChattingInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;
const CharringSendButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

export default Chatting;
