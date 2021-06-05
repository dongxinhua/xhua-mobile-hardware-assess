import { Map } from "immutable";
import * as actionTypes  from "./constants"

const initialState = Map({
  phoneGradeData: [],
  phoneSocGradeData: []
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PHONE_GRADE:
      return state.set("phoneGradeData", action.phoneGradeData);
    case actionTypes.CHANGE_PHONE_SOC_GRADE:
      return state.set("phoneSocGradeData", action.phoneSocGradeData)
    default:
      return state;
  }
}

export default reducer;