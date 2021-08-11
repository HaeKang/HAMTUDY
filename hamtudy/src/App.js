import "./App.css";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header.js";
import Home from "./Home";
import StudyRoom from "./StudyRoom";
import GlobalStyle from "./styles/GlobalStyle";
import { setAuth } from "./modules/userService";

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("userInfo")) {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    dispatch(setAuth(userInfo));
  } else {
    console.log("dnd ㅇ없다");
  }

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Route path="/" exact={true} component={Home} />
      <Route path="/ENTER_STUDY_ROOM" component={StudyRoom} />
    </>
  );
}

export default App;
