import client from "../../lib/api/client";
import { Dispatch } from "react";
import * as ActionTypes from "./ActionTypes";

export const createStudyroom = ({user_id,title,desc,thumbnail,hashtag}:ActionTypes.Studyroom) => async (dispatch:Dispatch<ActionTypes.StudyRoomTypes>) =>{
    try{
        dispatch({type:ActionTypes.CREATE_STUDYROOM});
        const res = await client.post("/CreateStudyRoom",{user_id,title,desc,thumbnail,hashtag});
        console.log("res",res.data);
        dispatch({type:ActionTypes.CREATE_STUDYROOM_SUCCESS});
    }catch(e){
        console.error("error!",e);
        dispatch({type:ActionTypes.CREATE_STUDYROOM_FAIL});
    }
}