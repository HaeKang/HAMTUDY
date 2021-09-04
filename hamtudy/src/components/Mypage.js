import React from "react";
import styled from "styled-components";
import profile from "../img/profile.jpeg";

function Mypage() {
  return (
    <>
      <h2>내정보</h2>
      <ProfileBlock>
        <div className="my-info">
          <img className="profile-img" src={profile} />
        </div>
      </ProfileBlock>
    </>
  );
}

const ProfileBlock = styled.div`
  .my-info {
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
`;

export default Mypage;
