import axios from "axios";
import { LOGIN_REQUEST, SUCCESS_LOGIN } from "./type";

const initial_state = { id: "", nickname: "", auth: "visitor" };

export const successLogin = function (id, nickname) {
  return {
    type: SUCCESS_LOGIN,
    payload: { id, nickname },
  };
};

//FIXME  리듀서 정리좀 해...

export default function testReducer(state = initial_state, action) {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        id: action.payload.id,
        nickname: action.payload.nickname,
        auth: "user",
      };

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
