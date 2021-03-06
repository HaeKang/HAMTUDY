// 상태 타입
export type User = {
    user_id: string,
    user_nick: string,
}

export interface SignUp extends User {
    user_pw:string,
    profile_img?:string
}

// 액션 타입
export const CHECK_SESSION='CHECK_SESSION';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR ='LOGIN_ERROR';
export const LOGOUT_REQUEST= 'LOGOUT_REQUEST';
export const SIGNUP_REQUEST='SIGNUP_REQUEST';
export const SIGNUP_SUCCESS='SIGNUP_SUCCESS';
export const SIGNUP_ERROR ='SIGNUP_ERROR';

//login 액션 생성 함수
export interface CheckSession{
    type:typeof CHECK_SESSION,
    payload:User
}

export interface LoginRequest{
    type:typeof LOGIN_REQUEST,
}

export interface LoginSuccess{
    type:typeof LOGIN_SUCCESS,
    payload:User
}

export interface LoginError{
    type:typeof LOGIN_ERROR,
}

export interface LogoutRequest{
    type:typeof LOGOUT_REQUEST,
}

//signup 액션 생성 함수
export interface SignupRequest{
    type:typeof SIGNUP_REQUEST,
}
export interface SignupSuccess{
    type:typeof SIGNUP_SUCCESS,
    payload:User
}
export interface SignupError{
    type:typeof SIGNUP_ERROR,
}

export type UserServiceTypes = CheckSession|LoginError|LoginRequest|LoginSuccess|LogoutRequest|SignupSuccess|SignupRequest|SignupError;

