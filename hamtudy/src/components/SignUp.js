import react, { useState } from "react";
import SignUpTemplate from "./SignUpTemplate";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUp } from "../modules/userService";
//TODO 회원가입
/**
 * 아이디 중복검사
 * 비밀번호 이중확인
 * 프로필이미지
 * 유효성검사
 */
function SignUp() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    user_id: "",
    user_pw: "",
    user_nick: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    dispatch(signUp(inputs))
      .then((res) => {
        console.log("ㄱㄷㄴ", res);
      })
      .catch((e) => console.log("e", e));
  };

  return (
    <SignUpTemplate>
      <>
        <div>
          <h2>회원가입</h2>
          <div>
            <Input
              onChange={onChange}
              name="user_id"
              type="text"
              placeholder="아이디"
            />
          </div>
          <div>
            <Input
              onChange={onChange}
              name="user_pw"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div>
            <Input name="pwd" type="password" placeholder="비밀번호 확인" />
          </div>
          <div>
            <Input
              onChange={onChange}
              name="user_nick"
              type="text"
              placeholder="닉네임"
            />
          </div>
          <button onClick={onClick}>회원가입</button>
        </div>
      </>
    </SignUpTemplate>
  );
}

const FromWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  border-bottom: 1px solid black;
`;

export default SignUp;
