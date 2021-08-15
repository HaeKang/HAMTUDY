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
  height: 800px;
`;

export default StudyRoomTemplate;
