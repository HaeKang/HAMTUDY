import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from "../assets/img/profile.jpeg";
import {theme} from "../assets/theme/theme";
import Logo from "./Logo";
import Search from "./Search";
import Modal from "./modals/Modal";
import { RootStore } from "../Store";
import { logout } from "../modules/userService/Actions";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;

  .my-info {
    border-radius: ${theme.borderRadius.medium};
    border: ${theme.border.medium} solid ${theme.colors.black};
    width: 40px;
    height: 40px;
    border-radius: ${theme.borderRadius.full};

    cursor: pointer;
    overflow: hidden;
    .profile-img {
      border-radius: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .my-info-wrapper:hover .dropdown-menu {
    display: block;
  }
  .dropdown-menu {
    width: 100px;
    height: 50px;
    position: absolute;
    display: none;
    background-color: ${theme.colors.gray};
  }
  .dropdown-menu > li:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state:RootStore) => state.userService.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  // const logout = () => {
  //   dispatch(logoutRequest());
  //   localStorage.clear();
  // };

  return (
    <>
      <HeaderWrapper>
        <Logo/>
        <NavWrapper>
          <Search />
          {auth && (
            <>
              <li>
                <div className="my-info-wrapper">
                  <div className="my-info">
                    <img className="profile-img" src={profile} />
                  </div>
                  <div className="dropdown-menu">
                    <li>
                      <Link to="/mypage">
                        <div>내 정보</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/create_study_room">
                        <div>방만들기</div>
                      </Link>
                    </li>
                    <li>
                      <div onClick={()=>{
                        dispatch(logout())
                      }}>로그아웃</div>
                    </li>
                   
                  </div>
                </div>
              </li>
              <li></li>
             </>
          )}
          {!auth && (
            <>
              <li>
                <div onClick={openModal}>로그인</div>
                <Modal
                  open={modalOpen}
                  close={closeModal}
                  header="modal heading"
                ></Modal>
              </li>
            </>
          )}
        </NavWrapper>
      </HeaderWrapper>
    </>
  );
}



export default Header;
