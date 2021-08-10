import { AUTH_USER } from "./type";
export const setAuth = (auth) => ({
  type: AUTH_USER,
  auth,
});

export default function authUser(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        auth: "ok",
      };
    default:
      return state;
  }
}
