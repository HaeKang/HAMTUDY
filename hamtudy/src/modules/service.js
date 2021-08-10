const SET_USER = "login/SETUSER";

const initial_state = { id: null, nickname: null };

export const setUser = () => ({
  type: SET_USER,
});

export default function loginUser(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return console.log(state);
    default:
      return state;
  }
}
