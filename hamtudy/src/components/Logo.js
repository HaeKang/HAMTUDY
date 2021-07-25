import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
function Logo() {
  return <LogoWrapper>Hamtudy</LogoWrapper>;
}
const LogoWrapper = styled.div`
  color: ${colors.theme};
  font-weight: 800;
  font-size: 30px;
  cursor: pointer;
`;
export default Logo;
