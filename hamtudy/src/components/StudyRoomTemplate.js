import React from "react";
import styled from "styled-components";

function StudyRoomTemplate({ children }) {
  return (
    <>
      <StudyRoomTemplateBox>
        <div className="wrapper">{children}</div>
      </StudyRoomTemplateBox>
    </>
  );
}

const StudyRoomTemplateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 1200px;
    height: 800px;
    background-color: azure;
  }
`;

export default StudyRoomTemplate;
