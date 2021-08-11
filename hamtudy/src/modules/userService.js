import { LOGIN_SUCCESS, AUTH_USER, LOGOUT_REQUEST } from "./type";
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
