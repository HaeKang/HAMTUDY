import client from "../../lib/api/client";
import { Dispatch } from "react";
import * as ActionTypes from "./ActionTypes";

export const login =(user_id:string,user_pw:string) => async (dispatch:Dispatch<ActionTypes.UserServiceTypes>)=>{
    try{
        dispatch({type:ActionTypes.LOGIN_REQUEST});
        const res = await client.post<ActionTypes.User>("/Login",{user_id,user_pw})
        console.log("res?",res);
        dispatch({
            type:ActionTypes.LOGIN_SUCCESS,
            payload:res.data
        })

        }catch(e){
            console.error("errer",e);
            dispatch({type:ActionTypes.LOGIN_ERROR})
        }
};

export const logout = ()=>{
    return({type:ActionTypes.LOGOUT_REQUEST})
}

export const signUp = ({user_id,user_pw,user_nick,profile_img}:ActionTypes.SignUp)=>async (dispatch:Dispatch<ActionTypes.UserServiceTypes>)=>{
    try{
        dispatch({type:ActionTypes.SIGNUP_REQUEST});
        const res = await client.post("/SignUp",{user_id,user_pw,user_nick,profile_img});
        console.log("res?",res);
        dispatch({type: ActionTypes.SIGNUP_SUCCESS,payload:{user_id:user_id,user_nick:user_nick}})
    }catch(e){
        console.error("err",e);
        dispatch({type:ActionTypes.SIGNUP_ERROR});
    }
}