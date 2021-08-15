import React, { useState } from "react";
import styled from "styled-components";

function RoomThumnail({ title, describe }) {
  return (
    <ThumnailWrapper>
      <div className="info">
        <h3 className="title">{title}</h3>
        <h3 className="describe">{describe}</h3>
      </div>
    </ThumnailWrapper>
  );
}

const ThumnailWrapper = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .describe {
    border-top: 3px solid black;
  }
`;

export default RoomThumnail;
