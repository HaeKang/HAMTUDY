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
  width: 1200px;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  align-self: center;
  justify-content: center;
  /* align-items: center;
  display: flex;
  align-items: center;
  justify-content: center; */
`;

export default HomeTemplate;
