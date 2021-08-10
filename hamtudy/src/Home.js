import React from "react";
import Search from "./components/Search";
import StudyRoomCard from "./components/StudyRoomCard";
import HomeTemplate from "./components/HomeTemplate";

function Home() {
  return (
    <>
      <HomeTemplate>
        <Search />

        <StudyRoomCard
          host={"박진아"}
          title={"햄스터 연구"}
          describe={"햄스터를 직접 관찰해보자 "}
        ></StudyRoomCard>
      </HomeTemplate>
    </>
  );
}

export default Home;
