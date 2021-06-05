import { Map } from "immutable";
import * as actionTypes  from "./constants"

const initialState = Map({
  index: [],
  contrastArr: [],
  contrastData: []
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_INDEX:
      return state.set("index", action.data);
    case actionTypes.CHANGE_CONSTRAST:
      return state.set("contrastArr", action.data);
      case actionTypes.CHANGE_CONSTRAST_DATA:
      return state.set("contrastData", action.data);
    default:
      return state;
  }
}

export default reducer;