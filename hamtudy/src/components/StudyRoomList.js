import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import RoomThumnail from "./RoomThumnail";

import time_svg from "../assets/time.svg";
import participants_svg from "../assets/participants.svg";

{
  /* <h3>열공 중인 스터디룸🔥</h3> */
}
function StudyRoomList({ data }) {
  return (
    <Wrapper>
      <h2 className="title">열공 중인 스터디룸🔥</h2>
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

            <div className="studyroom_info">
              <div className="study_participants_wrapper">
                <div className="study_participants">
                  <img src={participants_svg} width="20px" />
                </div>
                <span>30명</span>
              </div>

              <div className="study_time_wrapper">
                <div className="study_time">
                  <img src={time_svg} width="16px" />
                </div>
                <span>10시간</span>
              </div>
            </div>
          </CardWrapper>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    margin-bottom: 12px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  border-radius: 8px;
  background-color: ${colors.white};
  width: 350px;
  height: fit-content;
  padding: 14px 12px;
  & {
    margin-bottom: 24px;
  }
  box-shadow: 1px 0.5px 1.6px -7px rgba(216, 216, 255, 0.031),
    2.5px 1.3px 3.9px -7px rgba(216, 216, 255, 0.044),
    4.6px 2.4px 7.3px -7px rgba(216, 216, 255, 0.055),
    8.3px 4.2px 13px -7px rgba(216, 216, 255, 0.066),
    15.5px 7.9px 24.2px -7px rgba(216, 216, 255, 0.079),
    37px 19px 58px -7px rgba(216, 216, 255, 0.11);

  .studyroom_info {
    display: flex;
    font-size: 12px;
    .study_participants_wrapper {
      display: flex;
      align-items: center;
      .study_participants {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.orange};
      }
    }
    .study_time_wrapper {
      display: flex;
      align-items: center;
      .study_time {
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background-color: ${colors.point};
      }
    }
  }
`;

export default StudyRoomList;
