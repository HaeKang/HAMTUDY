import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../assets/theme/theme";
function Logo() {
  return (
    <Link to="/">
      <LogoWrapper>Hamtudy</LogoWrapper>
    </Link>
  );
}
const LogoWrapper = styled.div`
  color: ${theme.fontColor.black};
  font-weight: 800;
  font-size: 24px;
  cursor: pointer;
`;
export default Logo;
