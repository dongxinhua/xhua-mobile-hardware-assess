import { Map } from "immutable";
import * as actionTypes  from "./constants"

const initialState = Map({
  isLogin: false,
  userInfo: {}
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ISLOGIN:
      return state.set("isLogin", true)
    case actionTypes.CHANGE_ISFLOGIN:
      return state.set("isLogin", false)
    case actionTypes.CHANGE_USER_INFO:
      return state.set("userInfo", action.userInfo)
    default:
      return state;
  }
}

export default reducer;