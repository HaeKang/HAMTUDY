import React from "react";
import Template from "../components/Template";
import styled from "styled-components";
import STUDYROOM_LIST from "../assets/data/STUDYROOM_LIST.json";
import StudyRoomList from "../components/StudyRoomList";


const Main = () =>{
    return(
       <Template>
           <StudyRoomList studyrooms={STUDYROOM_LIST} />
       </Template>
    )
}

export default Main;