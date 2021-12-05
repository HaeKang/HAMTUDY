import React from "react";
import styled from "styled-components";

function HomeTemplate({ children }) {
  return (
    <>
      <HomeTemplateBox>
        <div className="wrapper">{children}</div>
      </HomeTemplateBox>
    </>
  );
}

const HomeTemplateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 1200px;
  }
`;

export default HomeTemplate;
