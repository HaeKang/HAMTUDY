import React from "react";
import styled from "styled-components";

function SignUpTemplate({ children }) {
  return (
    <>
      <SignUpTemplateBlock>
        <div className="wrapper">{children}</div>
      </SignUpTemplateBlock>
    </>
  );
}

const SignUpTemplateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
  }
`;

export default SignUpTemplate;
