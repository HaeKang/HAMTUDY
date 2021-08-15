import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";

function StudyRoomCard({ host, title, describe }) {
  return (
    <CardWrapper>
      <Link to={"/room/" + title}>
        <div className="title">
          <h2>{title}</h2>
        </div>
      </Link>
      <div className="info">
        <div>{describe}</div>
        <div>참여인원:28명</div>
      </div>
    </CardWrapper>
  );
}
function StudyRoomList({ data }) {
  return (
    <CardsWrapper>
      {data.map((studyroom) => (
        <StudyRoomCard
          title={studyroom.title}
          describe={studyroom.describe}
          key={studyroom.title}
        ></StudyRoomCard>
      ))}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  width: 370px;
  height: 300px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${colors.white};
  .title {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .info {
    padding: 0 8px;
  }
  & {
    margin-top: 40px;
  }
`;

export default StudyRoomList;
