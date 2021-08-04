import React from "react";
// import "./modal.css";
import styled from "styled-components";
import colors from "../../styles/colors";

const Modal = (props) => {
  const { open, close, header } = props;

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
                  아이디<input></input>
                </div>
                <div>
                  비밀번호 <input></input>
                </div>
                <button>로그인</button>
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
