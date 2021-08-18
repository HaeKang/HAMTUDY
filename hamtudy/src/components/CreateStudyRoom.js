import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import RoomThumnail from "./RoomThumnail";

const tumbnailscolors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

function Pallete({ tumbnailscolors, onSelect }) {
  const colorList = tumbnailscolors.map((color) => (
    <div
      className="color"
      style={{ backgroundColor: color }}
      value={color}
      onClick={onSelect}
    ></div>
  ));
  return <Colors>{colorList}</Colors>;
}

function CreateStudyRoom() {
  const [inputs, setInputs] = useState({
    title: "",
    describe: "",
  });
  const { title, describe } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [color, setColor] = useState("");
  const onSelect = (e) => {
    setColor(e.target.style.backgroundColor);
  };

  return (
    <Wrapper>
      <h1>어떤 공부를 할 계획인가요?</h1>
      <div>
        <h3>방제목</h3>
        <div>
          <Input name={"title"} onChange={onChange} type="text" />
        </div>
        <h3>설명</h3>
        <Input name={"describe"} onChange={onChange} type="text" />
        <h3>종류</h3>
        <h3>색깔</h3>
        <Pallete tumbnailscolors={tumbnailscolors} onSelect={onSelect} />

        <h3>썸네일</h3>
        <RoomThumnail title={title} describe={describe} color={color} />
        <ButtonSubmit type="submit">만들기</ButtonSubmit>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-bottom: 1px solid black;
`;

const ButtonSubmit = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 20px;
  width: 100px;
  height: 35px;
  :hover {
    background-color: ${colors.theme};
    color: ${colors.white};
  }
`;

const Colors = styled.div`
  display: flex;

  .color {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }
`;

export default CreateStudyRoom;
