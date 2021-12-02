import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";

function RoomThumnail({ title, describe, color }) {
  return (
    <ThumnailWrapper color={color}>
      <div className="info">
        <h3 className="title">{title}</h3>
        <h3 className="describe">{describe}</h3>
      </div>
    </ThumnailWrapper>
  );
}

const ThumnailWrapper = styled.div`
  border-radius: 8px;
  width: 95%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || colors.white}}
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
