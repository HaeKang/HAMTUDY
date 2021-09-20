import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import RoomThumnail from "./RoomThumnail";
{
  /* <h3>열공 중인 스터디룸🔥</h3> */
}
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

          <div className="studyroom_info">
            <div className="study_participants_wrapper">
              <div className="study_participants">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M20.997 18.529c-.372.223-1.044.565-1.997.904v-5.038c-3.979.327-6.323 1.521-7 1.954-.677-.433-3.022-1.627-7-1.954v5.037c-.954-.339-1.625-.681-1.996-.902l-.004-1.944c-.008-2.036.06-2.531 1.863-2.929 2.28-.507 4.616-.775 5.225-2.323.282-.713.117-1.509-.488-2.365-1.588-2.246-2.007-4.36-1.183-5.952.645-1.244 2.018-2.017 3.583-2.017 1.562 0 2.932.766 3.573 1.999.827 1.587.409 3.709-1.175 5.973-.6.857-.762 1.652-.481 2.362.607 1.534 2.929 1.815 5.219 2.323 1.805.398 1.873.898 1.863 2.957l-.002 1.915zm-2.997 2.465c-1.588.287-3.853.925-5.5 1.638v-5.431c1.216-.783 3.666-1.472 5.5-1.707v5.5zm-6.5 1.638c-1.648-.713-3.912-1.351-5.5-1.638v-5.5c1.834.235 4.284.924 5.5 1.707v5.431zm7.851-9.952c-2.865-.632-5.663-.951-4.133-3.134 3.885-5.555.702-9.546-3.218-9.546s-7.12 4.022-3.218 9.546c1.557 2.203-1.328 2.516-4.134 3.134-2.56.566-2.656 1.783-2.648 3.91l.004 2.475s.957.758 2.996 1.431v1.352c.148.022 3.57.457 7 2.131 3.429-1.673 6.866-2.111 7-2.131v-1.352c2.039-.673 2.996-1.431 2.996-1.431l.003-2.451c.01-2.143-.077-3.366-2.648-3.934z" />
                </svg>
              </div>
              <span>30명</span>
            </div>

            <div className="study_time_wrapper">
              <div className="study_time">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                </svg>
              </div>
              <span>10시간</span>
            </div>
          </div>
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
  width: 350px;
  height: fit-content;
  padding: 10px 20px;
  & {
    margin-top: 40px;
  }
  box-shadow: 1px 0.5px 1.6px -7px rgba(216, 216, 255, 0.031),
    2.5px 1.3px 3.9px -7px rgba(216, 216, 255, 0.044),
    4.6px 2.4px 7.3px -7px rgba(216, 216, 255, 0.055),
    8.3px 4.2px 13px -7px rgba(216, 216, 255, 0.066),
    15.5px 7.9px 24.2px -7px rgba(216, 216, 255, 0.079),
    37px 19px 58px -7px rgba(216, 216, 255, 0.11);

  .studyroom_info {
    display: flex;
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
