import React from "react";
import styled from "styled-components";
function StudyRoomCard({ host, title, describe }) {
  return (
    <CardWrapper>
      <div>
        {host}
        {title}
        {describe}
      </div>
    </CardWrapper>
  );
}
const CardWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;
export default StudyRoomCard;
