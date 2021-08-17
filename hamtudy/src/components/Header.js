import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modals/Modal";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import { logoutRequest } from "../modules/userService";
import colors from "../styles/colors";

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
  const logout = () => {
    dispatch(logoutRequest());
  };
  const onHover = () => {
    console.log("dd");
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
                <Link to="/create_study_room">
                  <div>방만들기</div>
                </Link>
              </li>
              <li>
                <div className="my-info" onHover={onHover}></div>
              </li>
              <li>
                <div onClick={logout}>로그아웃</div>
              </li>
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
                >
                  dd
                </Modal>
              </li>
              <li>
                <a href="">회원가입</a>
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
  height: 70px;
  padding: 0 50px;
  border-bottom: 1px solid ${colors.black};
`;
const NavWrapper = styled.nav`
  display: flex;
  li {
    margin-left: 10px;
    cursor: pointer;
  }
  .my-info {
    border-radius: 4px;
    width: 30px;
    height: 30px;
    background-color: black;
    cursor: pointer;
  }
`;
export default Header;
