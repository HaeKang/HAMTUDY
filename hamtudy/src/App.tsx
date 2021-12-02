import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header.js";
import Home from "./Home";
import StudyRoom from "./StudyRoom";
import GlobalStyle from "./styles/GlobalStyle";
import { authUser } from "./modules/userService";
import CreateStudyRoom from "./components/CreateStudyRoom";
import Mypage from "./components/Mypage";
import SignUp from "./components/SignUp";


function App() {
  const dispatch = useDispatch();
  return (
    <>
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
      <Route path="/room/:room" component={StudyRoom} />
      <Route path="/create_study_room" component={CreateStudyRoom} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/sign_up" component={SignUp} />
    </>
  );
}

export default App;
