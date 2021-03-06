import { useDispatch } from "react-redux";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Main from "./page/Main"
import StudyRoomPage from "./page/StudyRoomPage";
import CreateStudyRoomPage from "./page/CreateStudyRoomPage";
import SignUpPage from "./page/SignUpPage";
import Mypage from "./page/MyPage";
import { Route } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import { userInfo } from "os";
import { checkSession } from "./modules/userService/Actions";
function App() {
  const dispatch = useDispatch();

  const [auth,setAuth] = useState(false);
  const [user,setUser] = useState(null);

  useEffect(()=>{
    dispatch(checkSession());
  },[auth])


  return (
    <>
      <GlobalStyle/>
      <Route path="/" exact={true} component={Main}/> 
      <Route path="/room/:room" component={StudyRoomPage} />
      <Route path="/create_study_room" component={CreateStudyRoomPage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/sign_up" component={SignUpPage} /> 
    </>
  );
}

export default App;
