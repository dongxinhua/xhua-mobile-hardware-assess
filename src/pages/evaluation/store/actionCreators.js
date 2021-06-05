import * as actionTypes from "./constants";

import { getPhoneGrade, getPhoneSocGrade } from "@/services/grade.js";

export const changePhoneGradeAction = (phoneGradeData) => ({
  type: actionTypes.CHANGE_PHONE_GRADE,
  phoneGradeData
});

export const changePhoneSocGradeAction = (phoneSocGradeData) => ({
  type: actionTypes.CHANGE_PHONE_SOC_GRADE,
  phoneSocGradeData
});

export const getPhoneGradeAction = () => {
  return (dispatch, getState) => {
    getPhoneGrade().then(res => {
      dispatch(changePhoneGradeAction(res.data));
    })
  }
};

export const getPhoneSocGradeAction = () => {
  return (dispatch, getState) => {
    getPhoneSocGrade().then(res => {
      dispatch(changePhoneSocGradeAction(res.data));
    })
  }
};