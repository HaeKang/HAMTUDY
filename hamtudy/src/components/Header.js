import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Modal from "./Modals/Modal";
import styled from "styled-components";
import Logo from "./Logo";
import { logoutRequest } from "../modules/userService";

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
  return (
    <>
      <HeaderWrapper>
        <Logo />
        {auth == "SUCCESS" && (
          <NavWrapper>
            <li>
              <div>내정보</div>
            </li>
            <li>
              <div onClick={logout}>로그아웃</div>
            </li>
          </NavWrapper>
        )}
        {!auth && (
          <NavWrapper>
            <li>
              <div onClick={openModal}>로그인</div>
              <Modal open={modalOpen} close={closeModal} header="modal heading">
                dd
              </Modal>
            </li>
            <li>
              <a href="">회원가입</a>
            </li>
          </NavWrapper>
        )}
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 1200px;
`;
const NavWrapper = styled.nav`
  display: flex;
  li {
    margin-left: 10px;
    cursor: pointer;
  }
`;
export default Header;
