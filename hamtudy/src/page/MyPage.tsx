import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Template from "../components/Template";
import profile from "../assets/img/profile.jpeg";

function Mypage() {
    const user_nick="a";
//   const user_nick = useSelector((state) => state.userInfo.nickname);

  console.log(user_nick);
  return (
    <Template>
      <div className="dd">
        <h2>내정보</h2>
        <ProfileBlock>
          <div className="profile-img-wrapper">
            <img className="profile-img" src={profile} />
          </div>
          <input name="user-nick-name" placeholder={user_nick} />
        </ProfileBlock>

        <InfoBlock>인포메이션 1</InfoBlock>

        <button>수정하기</button>
      </div>
    </Template>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;

  .dd {
    width: 500px;
    border: 1px solid;
  }
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  .profile-img-wrapper {
    border-radius: 4px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    overflow: hidden;
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  input {
    font-size: 20px;
  }
`;

const InfoBlock = styled.div``;

export default Mypage;
