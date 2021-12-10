import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../assets/theme/theme";
import time_svg from "../assets/icon/time.svg";
import participants_svg from "../assets/icon/participants.svg";
import RoomThumbnail from "./RoomThumbnail"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize.m}px;
  .title {
    margin-bottom: 12px;
    ${theme.textVariants.header}
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardWrapper = styled.div`
  @media only screen and (max-width: 1025px) {
    min-width: 8em;
  }

  font-size:${theme.fontSize.s}px;

  border-radius: 8px;
  background-color: ${theme.colors.white};
  
  min-width: 20em;
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
        background-color: ${theme.colors.point_color};
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
        background-color: ${theme.colors.second_color};
      }
    }
  }
`;

interface StudyRoom {
    title:string,
    describe:string,
    color?:string|undefined,
    participants:number
}

type StudyRoomListProps = {
    studyrooms :StudyRoom[]
}


function StudyRoomList({ studyrooms }:StudyRoomListProps) {
  return (
    <Wrapper>
      <h2 className="title">열공 중인 스터디룸🔥</h2>
      <CardsWrapper>
        {studyrooms.map((studyroom) => (
          <CardWrapper className="studyroom">
            <Link to={"/room/" + studyroom.title}>
              <RoomThumbnail
                title={studyroom.title}
                descr={studyroom.describe}
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



export default StudyRoomList;
