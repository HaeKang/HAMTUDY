import React from "react";
import styled from "styled-components";

function StudyRoomTemplate({ children }) {
  return (
    <>
      <StudyRoomTemplateBox>{children}</StudyRoomTemplateBox>
    </>
  );
}

const StudyRoomTemplateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
`;

export default StudyRoomTemplate;
