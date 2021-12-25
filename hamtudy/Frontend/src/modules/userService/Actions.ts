import client from "../../lib/api/client";
import { Dispatch } from "react";
import * as ActionTypes from "./ActionTypes";

export const login =(user_id:string,user_pw:string) => async (dispatch:Dispatch<ActionTypes.UserServiceTypes>)=>{
    try{
        dispatch({type:ActionTypes.LOGIN_REQUEST});
        const res = await client.post<ActionTypes.User>("/Login",{user_id,user_pw})
        dispatch({
            type:ActionTypes.LOGIN_SUCCESS,
            payload:res.data
        })
        sessionStorage.setItem("user",JSON.stringify({user_id:res.data.user_id,user_nick:res.data.user_nick}));

        }catch(e){
            console.error("errer",e);
            dispatch({type:ActionTypes.LOGIN_ERROR})
        }
};

export const checkSession = ()=>{
    const user = sessionStorage.getItem('user');
    if(user && JSON.parse(user).user_id){
        const{user_id,user_nick} = JSON.parse(user);
        return({type:ActionTypes.CHECK_SESSION,payload:{user_id:user_id,user_nick:user_nick}})
    }
}

export const logout = ()=>{
    return({type:ActionTypes.LOGOUT_REQUEST})
}

export const signUp = ({user_id,user_pw,user_nick,profile_img}:ActionTypes.SignUp)=>async (dispatch:Dispatch<ActionTypes.UserServiceTypes>)=>{
    try{
        dispatch({type:ActionTypes.SIGNUP_REQUEST});
        const res = await client.post("/SignUp",{user_id,user_pw,user_nick,profile_img});
        dispatch({type: ActionTypes.SIGNUP_SUCCESS,payload:{user_id:user_id,user_nick:user_nick}})
    }catch(e){
        console.error("err",e);
        dispatch({type:ActionTypes.SIGNUP_ERROR});
    }
}