import axios from "axios";
import baseURL from "../utils/API";

// 액션 타입
const LOGIN_REQUEST = 'loginServiece/LOGIN_REQUEST' as const;
const AUTH_USER = 'loginServiece/AUTH_USER' as const;
const LOGOUT_REQUEST= 'loginServiece/LOGOUT_REQUEST' as const;
const SIGN_UP ="loginServiece/SIGN_UP" as const;

// 액션 생성함수
export const loginRequest = (data:{user_id:string,user_pw:string}) => {
    const req = axios.post(baseURL + "/login", data).then((res) => {
      return {
        type: LOGIN_REQUEST,
        payload: res.data,
      };
    });
  
    return{
      type: LOGIN_REQUEST,
      payload: data,
    }
}
  
  export const logoutRequest = () => ({
    type: LOGOUT_REQUEST,
  });
  
  export const authUser = ({ id, nickname, token }:{id:string, nickname:string, token:string}) => ({
    type: AUTH_USER,
    payload: {
      id,
      nickname,
      token,
    },
  });
  
  export function signUp(data:{user_id:string, user_nick:string}) {
    const req:any = axios.post(baseURL + "/SignUp", data).then((res) => {
      return { type: SIGN_UP, payload: req };
    })
    return{ type: SIGN_UP, payload: req };
  }

// 액션 타입
type UserServiceAction = |ReturnType<typeof loginRequest>|ReturnType<typeof logoutRequest>|ReturnType<typeof authUser>|ReturnType<typeof signUp>;

  
// 상태 타입
  type UserInfo = {
    userInfo:
    {
      id: string,
      nickname: string,
      token: string,
    },
    auth:string
  }
// 초기 상태
const user_state:UserInfo= {
  userInfo: {
    id: "",
    nickname: "",
    token: "",
  },
  auth: "",
};
  

// 리듀서
function userService(
  state:UserInfo= user_state, 
  action:UserServiceAction
):UserInfo {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        auth: "SUCCESS",
        userInfo: {
          id: action.payload.user_id,
          nickname:"",
          token:""
          // nickname: action.payload.user_nick,
          // token: action.payload.token,
        },
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        auth: "",
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
          token: action.payload.token,
        },
      };
    case SIGN_UP:
      return state;

    default:
      return state;
  }
}

export default userService;