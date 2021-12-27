import * as ActionTypes from "./ActionTypes";


interface DefaultState{
    studyrooms:ActionTypes.Studyroom[],
    createSuccess?:null|boolean,
    createError?:null|boolean,
}

const studyroomState:DefaultState={
    studyrooms:[]
}

const studyRoom = (state:DefaultState=studyroomState,action:ActionTypes.StudyRoomTypes):DefaultState=>{
    switch(action.type){
        case ActionTypes.CREATE_STUDYROOM:{
            return{
                ...state,
                createSuccess:null,
                createError:null
            }
        }
        case ActionTypes.CREATE_STUDYROOM_FAIL:{
            return{
                ...state,
                createError:true
            }
        }
        case ActionTypes.CREATE_STUDYROOM_SUCCESS:{
            return{
                ...state,
                createSuccess:true,
                createError:null
            }
        }
        case ActionTypes.GET_STUDYROOM_ALL_SUCCESS:{
            return{
                ...state,
                studyrooms:action.payload
            }
        }

        case ActionTypes.ENTER_STUDYROOM:{
            return{
                ...state,
            }
        };

   

        default:
            return state;
    }
}

export default studyRoom