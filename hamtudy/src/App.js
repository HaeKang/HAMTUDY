import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./Home";
import StudyRoom from "./StudyRoom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://3.142.49.52:8080/test_api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <Header></Header>
      <Route path="/" exact={true} component={Home} />
      <Route path="/ENTER_STUDY_ROOM" component={StudyRoom} />
    </div>
  );
}

export default App;
