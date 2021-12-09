import * as ActionTypes from "./ActionTypes";

interface DefaultState{
    createSuccess?:null|boolean,
    createError?:null|boolean,
}

const studyroomState:DefaultState={
    createSuccess:null,
}

const studyRoom = (state:DefaultState=studyroomState,action:ActionTypes.StudyRoomTypes):DefaultState=>{
    switch(action.type){
        case ActionTypes.CREATE_STUDYROOM:{
            return{
                createSuccess:null,
                createError:null
            }
        }
        case ActionTypes.CREATE_STUDYROOM_FAIL:{
            return{
                createError:true
            }
        }
        case ActionTypes.CREATE_STUDYROOM_SUCCESS:{
            return{
                createSuccess:true,
                createError:null
            }
        }
        default:
            return state;
    }
}

export default studyRoom