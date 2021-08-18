import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import RoomThumnail from "./RoomThumnail";

function StudyRoomList({ data }) {
  return (
    <CardsWrapper>
      {data.map((studyroom) => (
        <CardWrapper>
          <Link to={"/room/" + studyroom.title}>
            <RoomThumnail
              title={studyroom.title}
              describe={studyroom.describe}
              color={studyroom.color}
            />
          </Link>
          <div>메롱메롱 메롱</div>
        </CardWrapper>
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
  border-radius: 8px;
  background-color: ${colors.white};
  margin: 10px;
  & {
    margin-top: 40px;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default StudyRoomList;
