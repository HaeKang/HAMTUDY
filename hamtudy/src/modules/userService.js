import axios from "axios";
import { LOGIN_REQUEST } from "./type";

const initial_state = { id: "", nickname: "" };

export const userLogin = function (id, pwd) {
  const request = axios.post("http://3.142.49.52:8080/login", {
    user_id: id,
    user_pw: pwd,
  });
  return {
    type: LOGIN_REQUEST,
    payload: request,
  };
};

export default function testReducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      // const request = axios
      //   .post("http://3.142.49.52:8080/login", {
      //     user_id: action.id,
      //     user_pw: action.pwd,
      //   })
      //   .then((res) => {
      //     console.log("성공", res);
      //   })
      //   .catch((err) => console.log("실패", err));
      return console.log("Dd", action.payload);

    default:
      return state;
  }
}

// export default function loginUser(state = initial_state, action) {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         id: action.id,
//         nickname: action.nickname,
//       };
//     default:
//       return state;
//   }
// }
