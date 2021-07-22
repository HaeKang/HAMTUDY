import React from "react";
import Search from "./components/Search";
import StudyRoomCard from "./components/StudyRoomCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Search />
      <Link to="/ENTER_STUDY_ROOM">
        <StudyRoomCard
          host={"박진아"}
          title={"햄스터 연구"}
          describe={"햄스터를 직접 관찰해보자 "}
        ></StudyRoomCard>
      </Link>
    </>
  );
}

export default Home;
