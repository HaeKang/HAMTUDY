import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        <NavWrapper>
          <li>
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">회원가입</a>
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
