import * as actionTypes from "./constants";

export const changeIsLoginAction = () => {
  return {
    type: actionTypes.CHANGE_ISLOGIN
  }
}

export const changeIsFLoginAction = () => {
  return {
    type: actionTypes.CHANGE_ISFLOGIN
  }
}

export const changeUserInfoAction = (userInfo) => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})  