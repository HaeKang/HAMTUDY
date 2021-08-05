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
  color: ${colors.theme};
  font-weight: 800;
  font-size: 30px;
  cursor: pointer;
`;
export default Logo;
