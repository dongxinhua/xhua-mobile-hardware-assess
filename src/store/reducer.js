import { combineReducers } from "redux-immutable";

// import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as loginReducer } from "@/pages/login/store";
 
const cReducer = combineReducers({
  login: loginReducer
})

export default cReducer;