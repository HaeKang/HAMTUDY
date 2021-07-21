import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";

import Home from "./Home";
import StudyRoom from "./StudyRoom";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/ENTER_STUDY_ROOM" component={StudyRoom} />
    </div>
  );
}

export default App;
