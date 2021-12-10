import client from "../../lib/api/client";
import { Dispatch } from "react";
import * as ActionTypes from "./ActionTypes";

export const createStudyroom = ({user_id,title,descr,thumbnail,hashtag}:ActionTypes.Studyroom) => async (dispatch:Dispatch<ActionTypes.StudyRoomTypes>) =>{
    try{
        dispatch({type:ActionTypes.CREATE_STUDYROOM});
        const res = await client.post("/CreateStudyRoom",{user_id,title,descr,thumbnail,hashtag});
        console.log("res",res.data);
        dispatch({type:ActionTypes.CREATE_STUDYROOM_SUCCESS});
    }catch(e){
        console.error("error!",e);
        dispatch({type:ActionTypes.CREATE_STUDYROOM_FAIL});
    }
};

export const getStudyroomAll = ()=> async (dispatch:Dispatch<ActionTypes.StudyRoomTypes>)=>{
    try{
        console.log("dnanfka?")
        dispatch({type:ActionTypes.GET_STUDYROOM_ALL_LOADING});
        const res = await client.post<ActionTypes.Studyroom[]>("/ListStudyRoom");
        console.log("res?",res.data);
        dispatch({type:ActionTypes.GET_STUDYROOM_ALL_SUCCESS,payload:res.data});
    }catch(e){
        dispatch({type:ActionTypes.GET_STUDYROOM_ALL_FAIL});
    }
}