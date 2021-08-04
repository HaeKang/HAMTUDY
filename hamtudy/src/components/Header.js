import React, { useState } from "react";
import Modal from "./Modals/Modal";
import styled from "styled-components";
import Logo from "./Logo";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <HeaderWrapper>
        <Logo />
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
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;
const NavWrapper = styled.nav`
  display: flex;
`;
export default Header;
