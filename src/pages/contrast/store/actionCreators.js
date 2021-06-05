import * as actionTypes from "./constants";

import { getIndex, getConstarstArr, getConstrastData } from "@/services/grade.js";

const changeIndexGradeAction = (data) => ({
  type: actionTypes.CHANGE_INDEX,
  data
});

const changeConstarstArr = (data) => ({
  type: actionTypes.CHANGE_CONSTRAST,
  data
});

const changeConstarstData = (data) => ({
  type: actionTypes.CHANGE_CONSTRAST_DATA,
  data
});

export const getIndexAction = (type) => {
  return (dispatch, getState) => {
    getIndex(type).then(res => {
      dispatch(changeIndexGradeAction(res.data));
    })
  }
};

export const getConstarstArrAction = (name) => {
  return (dispatch) => {
    getConstarstArr(name).then(res => {
      dispatch(changeConstarstArr(res.data))
    })
  }
}

export const getConstarstDataAction = (obj) => {
  const { contrastArr } = obj
  return (dispatch) => {
    if (contrastArr.length !== 0) {
      getConstrastData(obj).then(res => {
        dispatch(changeConstarstData(res.data))
      })
    } else {
      dispatch(changeConstarstData([]))
    }

  }
}