import react, { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signUp } from "../modules/userService/Actions";
import {theme} from "../assets/theme/theme";
import Template from "../components/Template";
import { RouteComponentProps } from "react-router";
import React from "react";

const FromWrapper = styled.form`
  margin: 10px 0;
  h2 {
    margin: 20px 0;
  }
  .label {
    font-size: 12px;
    color: ${theme.colors.gray};
  }
`;
const Input = styled.input`
  background-color: ${theme.colors.gray};
  min-width: 300px;
  min-height: 40px;
  border-radius: 4px;
  padding: 8px 12px;
  & {
    margin-bottom: 20px;
  }
`;
const Button = styled.button`
  min-width: 300px;
  min-height: 40px;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${theme.colors.gray};
  &.quilfied {
    background-color: black;
  }
`;

//TODO 회원가입
/**
 * 아이디 중복검사
 * 비밀번호 이중확인
 * 프로필이미지
 * 유효성검사
 */
function SignUpPage({ history }:RouteComponentProps) {
  const goHome = () => {
    history.push("/");
  };

  const dispatch = useDispatch();

  const [user_id, setUserId] = useState<string>("");
  const [user_pw, setUserPw] = useState<string>("");
  const [check_user_pw, setUserCheckPw] = useState<string>("");
  const [user_nick, setUserNick] = useState<string>("");

  const onChangeId = (e:ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onChangePw = (e:ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
  };
  const onChangeCheckPw = (e:ChangeEvent<HTMLInputElement>) => {
    setUserCheckPw(e.target.value);
  };
  const onChangeNick = (e:ChangeEvent<HTMLInputElement>) => {
    setUserNick(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("버튼눌림",user_id)
     dispatch(
      signUp({user_id:user_id, user_nick:user_nick, user_pw})
    )
  }
  const onClick = (e:any) => {
    e.preventDefault();
    console.log("버튼눌림")
    if (!isFufilled()) {
      console.log(user_id, user_pw, user_nick);
      window.alert("채워주세요");
    } else {
      // dispatch(
      //   signUp({ user_id: user_id, user_pw:user_pw, user_nick: user_nick })
      // )
    //   .then((res) => {
    //       alert("회원가입이 완료되었습니다.");
    //       goHome();
    //     })
    //     .catch((e:any) => console.log("e", e));
    }
  };

  const isFufilled = () => {
    if (user_id === null || user_pw === null || user_nick === null) {
      return false;
    }
    return true;
  };

  return (
    <Template>
      <FromWrapper onSubmit={handleSubmit}>
        <div>
          <h2>회원가입</h2>
          <div>
            <div className="label">아이디</div>
            <Input onChange={onChangeId} name="user_id" type="text"  placeholder="아이디" />
          </div>
          <div>
            <div className="label">비밀번호</div>
            <Input onChange={onChangePw} name="user_pw" type="password" placeholder="비밀번호" />
          </div>
          <div>
            <div className="label">비밀번호 재확인</div>
            <Input
              onChange={onChangeCheckPw}
              name="check_user_pw"
              type="password"
            />
          </div>
          <div>
            <div className="label">닉네임</div>
            <Input onChange={onChangeNick} name="user_nick" type="text" placeholder="닉네임"/>
          </div>
          <Button className="qulified" type="submit">
            회원가입
          </Button>
        </div>
      </FromWrapper>
    </Template>
  );
}

export default SignUpPage;
