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
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 1200px;
  }
`;

export default SignUpTemplate;
