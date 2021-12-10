import React, { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {theme} from "../assets/theme/theme";
import RoomThumnail from "../components/RoomThumbnail"
import { RootStore } from "../Store";
import { createStudyroom } from "../modules/studyroom/Actions";


const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-bottom: 1px solid black;
`;

const ButtonSubmit = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.black};
  border-radius: 20px;
  width: 100px;
  height: 35px;
  :hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
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

const tumbnailscolors:string[] = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

type PalleteProps = {
    tumbnailscolors:string[],
    onSelect:(e: React.MouseEvent<HTMLDivElement>)=>void
}

function Pallete({ tumbnailscolors, onSelect }:PalleteProps) {
  const colorList = tumbnailscolors.map((color) => (
    <div
      className="color"
      style={{ backgroundColor: color }}
      data-value={color}
      onClick={onSelect}>
      </div>
  ));
  return <Colors>{colorList}</Colors>;
}

function CreateStudyRoomPage() {
  const distpach = useDispatch();
  const user_id = useSelector((state:RootStore)=>state.userService.user?.user_id) as string;
  const create_success = useSelector((state:RootStore)=>state.studyRoom.createSuccess) as boolean;

  useEffect(()=>{
    console.log("createsuceess change",create_success);
  },[create_success])

  const [inputs, setInputs] = useState({
    title: "",
    descr: "",
  });
  const { title, descr } = inputs;
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [thumbnail, setThumbnail] = useState("");
  const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    let element = e.target as HTMLElement;
    const color =element.getAttribute("data-value") as string;
    setThumbnail(color);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault();
    console.log("submit?!")
    distpach(createStudyroom({user_id,title,descr,thumbnail})) 
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>어떤 공부를 할 계획인가요?</h1>
      <div>
        <h3>방제목</h3>
        <div>
          <Input name={"title"} onChange={onChange} type="text" />
        </div>
        <h3>설명</h3>
        <Input name={"desc"} onChange={onChange} type="text" />
        <h3>종류</h3>
        <h3>색깔</h3>
        <Pallete tumbnailscolors={tumbnailscolors} onSelect={onSelect} />

        <h3>썸네일</h3>
        <RoomThumnail title={title} descr={descr} color={thumbnail} />
        <button type="submit">만들기</button>
      </div>
    </Wrapper>
  );
}


export default CreateStudyRoomPage;
