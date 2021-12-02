import axios from "axios";
import baseURL from "../../utils/API";
import {
  LOGIN_REQUEST,
  AUTH_USER,
  LOGOUT_REQUEST,
  SIGN_UP,
  LOGIN_SUCCESS,
} from "./type";
//TODO 로그인 세션 토큰

const initial_state = {
  userInfo: {
    id: null,
    nickname: null,
    token: null,
  },
  auth: null,
};

export const loginRequest = (data) => {
  const req = axios.post(baseURL + "/login", data).then((res) => {
    return res.data;
  });
  return {
    type: LOGIN_REQUEST,
    payload: req,
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
  const req = axios.post(baseURL + "/SignUp", data).then((res) => {
    return res.data;
  });
  return { type: SIGN_UP, payload: req };
}

export default function authReducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        auth: "SUCCESS",
        userInfo: {
          id: action.payload.user_id,
          nickname: action.payload.user_nick,
          token: action.payload.token,
        },
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        auth: null,
        userInfo: {
          id: null,
          nickname: null,
          token: null,
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
      return state;

    default:
      return state;
  }
}
