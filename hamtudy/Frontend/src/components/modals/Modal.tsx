import React, { useState } from "react";
import styled from "styled-components";
import {theme} from "../../assets/theme/theme";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../modules/userService/Actions";
import profile from "../../assets/img/profile.jpeg";

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
  cursor: default;
  .modal-wrapper {
    position: relative;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    background-color: ${theme.colors.white};
    header {
      position: absolute;
      left: 0;
      top: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: 8px 16px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .close {
      cursor: pointer;
      font-size: 20px;
    }
    .main_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      .login_img {
        width: 200px;
        height: 300px;
        background-color: skyblue;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: 0px 24px;
        div {
          margin-bottom: 14px;
        }
        .title {
          display: flex;
          align-self: flex-start;
        }
        .sign_up {
          align-self: flex-end;
          color: ${theme.colors.primary};
        }
        input {
          background-color: ${theme.colors.gray};
          min-width: 300px;
          min-height: 40px;
          border-radius: 4px;
          padding: 8px 12px;
        }
        button {
          min-width: 300px;
          min-height: 40px;
          background-color: ${theme.colors.point_color};
          border-radius: 4px;
        }
      }
    }
  }
`;

const FormBlock = styled.form`
`

type InputType = {
    id:string,
    pwd:string
}


const Modal = (props:any) => {
  const dispatch = useDispatch();
  const { open, close, header } = props;
  const [inputs, setInputs] = useState<InputType>({
    id: "",
    pwd: "",
  });
  const { id, pwd } = inputs;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClick = (e:React.MouseEventHandler<HTMLButtonElement>) => {
    //   .then((res:any) => {
    //     close();
    //     localStorage.setItem(
    //       "userInfo",
    //       JSON.stringify({
    //         id: res.user_id,
    //         nickname: res.user_nick,
    //       })
    //     );
    //   })
    //   .catch((err:any) => window.alert(err+ "????????? ??????!"));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("btn !");
    dispatch(
      login(id,pwd)
    );
  }

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
              <div className="main_wrapper">
                <div className="login_img"></div>
                <div className="main">
                  <div className="title">
                    <h3>?????????</h3>
                  </div>
                  <FormBlock onSubmit={handleSubmit}>
                  <div>
                    <input
                      name="id"
                      value={id}
                      onChange={onChange}
                      type="text"
                      placeholder="???????????? ???????????????."
                    ></input>
                  </div>
                  <div> 
                    <input
                      name="pwd"
                      value={pwd}
                      onChange={onChange}
                      type="password"
                      placeholder="??????????????? ???????????????."
                    ></input>
                  </div>
                  <div>
                    <button type="submit"  >?????????</button>
                  </div>
                  </FormBlock>
                  <Link className="sign_up" to="/sign_up">
                    <div onClick={close}>????????????</div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </ModalBlcok>
      )}
    </>
  );
};


export default Modal;
