import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modals/Modal";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import { logoutRequest } from "../modules/userService";
import colors from "../styles/colors";
import profile from "../img/profile.jpeg";

//TODO 로그아웃시 로그인 팝업창이 뜸
function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  //TODO logout localstorage set null
  const logout = () => {
    dispatch(logoutRequest());
    localStorage.clear();
  };

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <NavWrapper>
          <Search />
          {auth == "SUCCESS" && (
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
                      <div onClick={logout}>로그아웃</div>
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

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 20px 150px;
  margin-bottom: 20px;
  background-color: transparent;
}`;
const NavWrapper = styled.nav`
  display: flex;
  align-items: center;

  li {
    margin-left: 10px;
    cursor: pointer;
  }
  .my-info {
    border-radius: 4px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    overflow: hidden;
    .profile-img {
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
    background-color: ${colors.gray};
  }
  .dropdown-menu > li:hover {
    text-decoration: underline;
  }
`;
export default Header;
