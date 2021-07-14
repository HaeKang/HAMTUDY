import React from "react";
import styled from "styled-components";
import Logo from "./Logo/Logo";

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
  background: #46ad78;
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
`;
const NavWrapper = styled.nav`
  display: flex;
`;
export default Header;
