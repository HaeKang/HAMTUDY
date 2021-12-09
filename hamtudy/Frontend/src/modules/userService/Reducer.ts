import { stat } from "fs";
import * as ActionTypes from "./ActionTypes";

interface DefaultState {
    user?:ActionTypes.User,
    token?:string,
    auth:boolean,
    authError?:boolean|null
}

const user_state:DefaultState= {
    auth:false,
};

const userService = (state:DefaultState=user_state, action:ActionTypes.UserServiceTypes)=>{
    switch(action.type){
        //로그인
        case ActionTypes.LOGIN_ERROR:{
            return{
                ...state,
                auth:false,
            }
        }
        case ActionTypes.LOGIN_REQUEST:{
            return{
                ...state,
                authError:null,
                auth:false,
            }
        }
        case ActionTypes.LOGIN_SUCCESS:{
            return{
                user:{
                    user_id:action.payload.user_id,
                    user_nick:action.payload.user_nick
                },
                auth:true,
            }
        }
        case ActionTypes.LOGOUT_REQUEST:{
            return{
                auth:false
            }
        }
        //회원가입
        case ActionTypes.SIGNUP_ERROR:{
            return{
                auth:false,
                authError:true
            }
        }
        case ActionTypes.SIGNUP_REQUEST:{
            return{
                auth:false
            }
        }
        case ActionTypes.SIGNUP_SUCCESS:{
            return{
                auth:true,
                authError:null,
                user:{
                    user_id:action.payload.user_id,
                    user_nick:action.payload.user_nick
                },
            }
        }
        default:
            return state;
    }
}

export default userService;

