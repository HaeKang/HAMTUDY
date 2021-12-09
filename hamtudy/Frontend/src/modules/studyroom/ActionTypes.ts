
//상태 타입
export type Studyroom = {
    user_id:string,
    title:string,
    desc:string,
    thumbnail?:string,
    hashtag?:string[], 
    //TODO hashtag?
    total_studytime?:number,
    total_participants?:number,
    flag?:boolean //삭제되면 false
}

//액션 타입
export const CREATE_STUDYROOM="CREATE_STUDYROOM";
export const CREATE_STUDYROOM_SUCCESS="CREATE_STUDYROOM_SUCCESS";
export const CREATE_STUDYROOM_FAIL="CREATE_STUDYROOM_FAIL";

//액션 생성 함수
export interface CreateStudyroom {
    type: typeof CREATE_STUDYROOM
}
export interface CreateStudyroomSuccess {
    type: typeof CREATE_STUDYROOM_SUCCESS
}
export interface CreateStudyroomFail {
    type: typeof CREATE_STUDYROOM_FAIL
}
export type StudyRoomTypes = CreateStudyroom|CreateStudyroomSuccess|CreateStudyroomFail