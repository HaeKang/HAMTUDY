import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import Search from "./components/Search";
import StudyRoomCard from "./components/StudyRoomCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />

      <StudyRoomCard
        host={"박진아"}
        title={"햄스터 연구"}
        describe={"햄스터를 직접 관찰해보자 "}
      ></StudyRoomCard>
    </div>
  );
}

export default App;
