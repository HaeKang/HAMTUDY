import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
function Logo() {
  return (
    <Link to="/">
      <LogoWrapper>Hamtudy</LogoWrapper>
    </Link>
  );
}
const LogoWrapper = styled.div`
  color: ${colors.black};
  font-weight: 800;
  font-size: 24px;
  cursor: pointer;
`;
export default Logo;
