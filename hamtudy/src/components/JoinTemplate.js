import React from "react";
import styled from "styled-components";

function JoinTemplate({ children }) {
  return (
    <>
      <JoinTemplateBlock>
        <div className="wrapper">{children}</div>
      </JoinTemplateBlock>
    </>
  );
}

const JoinTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 1200px;
  }
`;

export default JoinTemplate;
