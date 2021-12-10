import React, { useEffect } from "react";
import Template from "../components/Template";
import styled from "styled-components";
import STUDYROOM_LIST from "../assets/data/STUDYROOM_LIST.json";
import StudyRoomList from "../components/StudyRoomList";
import { useDispatch } from "react-redux";
import { getStudyroomAll } from "../modules/studyroom/Actions";


const Main = () =>{
    const dispatch = useDispatch();

    return(
       <Template>
           <StudyRoomList studyrooms={STUDYROOM_LIST} />
       </Template>
    )
}

export default Main;