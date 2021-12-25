import React, { useEffect } from "react";
import Template from "../components/Template";
import styled from "styled-components";
import STUDYROOM_LIST from "../assets/data/STUDYROOM_LIST.json";
import StudyRoomList from "../components/StudyRoomList";
import { useDispatch, useSelector } from "react-redux";
import { getStudyroomAll } from "../modules/studyroom/Actions";
import { RootStore } from "../Store";


const Main = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getStudyroomAll())
    },[])
    const studyrooms = useSelector((state:RootStore)=>state.studyRoom.studyrooms)
    return(
       <Template>
           <StudyRoomList studyrooms={studyrooms} />
       </Template>
    )
}

export default Main;