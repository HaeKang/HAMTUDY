import React from "react";
import styled from "styled-components";

function HomeTemplate({ children }) {
  return (
    <>
      <HomeTemplateBox>{children}</HomeTemplateBox>
    </>
  );
}

const HomeTemplateBox = styled.div`
  height: 800px;
  width: 1200px;
  align-items: center;
`;

export default HomeTemplate;
