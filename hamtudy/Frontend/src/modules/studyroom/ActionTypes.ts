
//상태 타입

/* FIXME default type을 해주면 좋을텐데 */
export type Studyroom = {
    room_id?:number,
    user_id:string,
    title:string,
    descr:string,
    thumbnail:string,
    total_studytime?:number,
    total_participants?:number,
    hashtag?:string[],
    flag?:number
}

//액션 타입
export const CREATE_STUDYROOM="CREATE_STUDYROOM";
export const CREATE_STUDYROOM_SUCCESS="CREATE_STUDYROOM_SUCCESS";
export const CREATE_STUDYROOM_FAIL="CREATE_STUDYROOM_FAIL";
export const GET_STUDYROOM_ALL_LOADING ="GET_STUDYROOM_ALL_LOADING";
export const GET_STUDYROOM_ALL_SUCCESS="GET_STUDYROOM_ALL_SUCCESS";
export const GET_STUDYROOM_ALL_FAIL = "GET_STUDYROOM_ALL_FAIL";


//액션 생성 함수
export interface CreateStudyroom {
    type: typeof CREATE_STUDYROOM
};

export interface CreateStudyroomSuccess {
    type: typeof CREATE_STUDYROOM_SUCCESS
};

export interface CreateStudyroomFail {
    type: typeof CREATE_STUDYROOM_FAIL
};

export interface GetStudyroomAllLoading {
    type: typeof GET_STUDYROOM_ALL_LOADING
};

export interface GetStudyroomAllSuccess {
    type: typeof GET_STUDYROOM_ALL_SUCCESS,
    payload:Studyroom[]
    
};

export interface GetStudyroomAllFail {
    type: typeof GET_STUDYROOM_ALL_FAIL
};

export type StudyRoomTypes = CreateStudyroom|CreateStudyroomSuccess|CreateStudyroomFail|GetStudyroomAllLoading|GetStudyroomAllSuccess|GetStudyroomAllFail