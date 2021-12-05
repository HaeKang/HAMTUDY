import React, { useState } from "react";
import styled from "styled-components";
import {theme} from "../assets/theme/theme"

const ThumnailWrapper = styled.div`
  border-radius: 8px;
  min-width: 20vw;
  height: calc(20vw / 16 * 9);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || theme.colors.white};
   .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .describe {
    border-top: 3px solid black;
  }
`;


type RoomThumbnailProps = {
    title:string,
    describe:string,
    color?:string
}

function RoomThumbnail({ title, describe, color }:RoomThumbnailProps) {
  return (
    <ThumnailWrapper color={color}>
      <div className="info">
        <h3 className="RoomThumbnailPropstitle">{title}</h3>
        <h3 className="describe">{describe}</h3>
      </div>
    </ThumnailWrapper>
  );
};

RoomThumbnail.defaultProps = {
  color:theme.colors.white
}

export default RoomThumbnail;
