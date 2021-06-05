import { combineReducers } from "redux-immutable";

// import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as loginReducer } from "@/pages/login/store";
import { reducer as phoneGradeReducer } from "@/pages/evaluation/store";
import { reducer as phoneConstrastReducer } from "@/pages/contrast/store";
 
const cReducer = combineReducers({
  login: loginReducer,
  phoneGrade: phoneGradeReducer,
  phoneConstrast: phoneConstrastReducer
})

export default cReducer;