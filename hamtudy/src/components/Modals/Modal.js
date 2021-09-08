import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

import { useDispatch } from "react-redux";
import { loginRequest } from "../../modules/userService";

const Modal = (props) => {
  const dispatch = useDispatch();
  const { open, close, header } = props;
  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const { id, pwd } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClick = () => {
    dispatch(
      loginRequest({
        user_id: id,
        user_pw: pwd,
      })
    )
      .then((res) => {
        close();
        //TODO localstorage 수정
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            id: res.user_id,
            nickname: res.user_nick,
          })
        );
      })

      .catch((err) => window.alert(err, "로그인 실패!"));
  };

  return (
    <>
      {open && (
        <ModalBlcok>
          <div className="modal-wrapper">
            <section>
              <header>
                <div className="close" onClick={close}>
                  {" "}
                  &times;{" "}
                </div>
              </header>
              <main>
                <h2>로그인을 해주세요</h2>
                <div>
                  <input
                    name="id"
                    value={id}
                    onChange={onChange}
                    type="text"
                    placeholder="아이디를 입력하세요."
                  ></input>
                </div>
                <div>
                  <input
                    name="pwd"
                    value={pwd}
                    onChange={onChange}
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                  ></input>
                </div>
                <button onClick={onClick}>로그인</button>
              </main>
            </section>
          </div>
        </ModalBlcok>
      )}
    </>
  );
};

const ModalBlcok = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  .modal-wrapper {
    width: 400px;
    background-color: ${colors.white};
  }
  header {
    display: flex;
    justify-content: flex-end;
  }
  .close {
    cursor: pointer;
    font-size: 20px;
  }
`;

export default Modal;
