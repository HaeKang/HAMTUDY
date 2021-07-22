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
  position: relative;
`;

export default StudyRoomTemplate;
