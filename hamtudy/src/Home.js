import React from "react";
import Search from "./components/Search";
import StudyRoomList from "./components/StudyRoomList";
import HomeTemplate from "./components/HomeTemplate";

const SAMPLE_STUDY_ROOMS = [
  {
    title: "조용히 공부하실 분 오세요🤫",
    describe: "각자 원하는 공부해요",
    color: "#12b886",
    participants: 24,
  },
  {
    title: "토익공부하는 사람?",
    describe: "각자 원하는 공부해요",
    participants: 24,
  },
  {
    title: "토익공부하는 사람?",
    describe: "각자 원하는 공부해요",
    participants: 24,
  },
  {
    title: "조용히 공부하실 분 오세요🤫",
    describe: "각자 원하는 공부해요",
    participants: 24,
  },
  {
    title: "토익공부하는 사람?",
    describe: "각자 원하는 공부해요",
    participants: 24,
  },
  {
    title: "토익공부하는 사람?",
    describe: "각자 원하는 공부해요",
    participants: 24,
  },
];

function Home() {
  return (
    <>
      <HomeTemplate>
        <div>
          <StudyRoomList data={SAMPLE_STUDY_ROOMS} />
        </div>
      </HomeTemplate>
    </>
  );
}

export default Home;
