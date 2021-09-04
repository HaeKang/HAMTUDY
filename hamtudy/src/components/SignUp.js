import react, { useState } from "react";
import SignUpTemplate from "./SignUpTemplate";
import styled from "styled-components";
import axios from "axios";
//TODO 회원가입
/**
 * 아이디 중복검사
 * 비밀번호 이중확인
 * 프로필이미지
 * 유효성검사
 */
function SignUp() {
  const [inputs, setInputs] = useState({
    user_id: "",
    user_pw: "",
    user_nick: "",
  });
  const { user_id, user_pw, user_nick } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    try {
      axios
        .post("http://3.142.49.52:8080/SignUp", {
          user_id: user_id,
          user_pw: user_pw,
          user_nick: user_nick,
        })
        .then((res) => {
          console.log("res", res);
        });
    } catch (e) {
      alert("실패");
    }
  };

  return (
    <>
      <SignUpTemplate>
        <h2>회원가입</h2>
        <div>
          <Input
            onChange={onChange}
            name="user_id"
            type="text"
            placeholder="아이디"
          />
          <Input
            onChange={onChange}
            name="user_pw"
            type="password"
            placeholder="비밀번호"
          />
          <Input name="pwd" type="password" placeholder="비밀번호 확인" />
          <Input
            onChange={onChange}
            name="user_nick"
            type="text"
            placeholder="닉네임"
          />
        </div>
        <button onClick={onClick}>회원가입</button>
      </SignUpTemplate>
    </>
  );
}

const FromWrapper = styled.div``;
const Input = styled.input`
  border-bottom: 1px solid black;
`;

export default SignUp;
