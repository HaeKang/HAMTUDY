import axios from "axios";
import { LOGIN_SUCCESS, AUTH_USER, LOGOUT_REQUEST, SIGN_UP } from "./type";
//TODO 로그인 세션 토큰 해야한다

const initial_state = {
  userInfo: {
    id: "",
    nickname: "",
    token: "",
  },
  auth: null,
};

export const successLogin = function (id, nickname) {
  return {
    type: LOGIN_SUCCESS,
    payload: { id, nickname },
  };
};

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const authUser = ({ id, nickname, token }) => ({
  type: AUTH_USER,
  payload: {
    id,
    nickname,
    token,
  },
});

export function signUp(data) {
  const req = axios
    .post("http://3.142.49.52:8080/SignUp", data)
    .then((res) => res.data);
  return { type: SIGN_UP, payload: req };
}

//FIXME  리듀서 정리좀 해...
export default function authReducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: {
          id: action.payload.id,
          nickname: action.payload.nickname,
          token: action.type.token,
        },
        auth: "SUCCESS",
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        auth: null,
        userInfo: {
          id: "",
          nickname: "",
          token: "",
        },
      };
    case AUTH_USER:
      return {
        ...state,
        auth: "SUCCESS",
        userInfo: {
          id: action.payload.id,
          nickname: action.payload.nickname,
          token: action.type.token,
        },
      };
    case SIGN_UP:
      //서버에서 return 값 수정되면 여기도 수정!
      return {
        ...state,
        auth: "SUCCESS",
        userInfo: {
          id: action.payload.req,
        },
      };

    default:
      return state;
  }
}

// export default function loginUser(state = initial_state, action) {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         id: action.id,
//         nickname: action.nickname,
//       };
//     default:
//       return state;
//   }
// }
