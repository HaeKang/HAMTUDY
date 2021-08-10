import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
function StudyRoomCard({ host, title, describe }) {
  return (
    <CardWrapper>
      <div className="host">
        주인장:
        {host}
      </div>
      <Link to="/ENTER_STUDY_ROOM">{title}</Link>
      {describe}
    </CardWrapper>
  );
}
const CardWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: ${colors.white};
`;
export default StudyRoomCard;
