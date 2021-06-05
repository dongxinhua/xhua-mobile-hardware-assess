import React, { memo, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import XHLoginLeft from "./c-pages/login-left";
import XHLoginRight from "./c-pages/login-right";

import { message } from 'antd';
import {
  LoginWrapper
} from "./style";

export default memo(function XHLogin(props) {

  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["login", "isLogin"])
  }), shallowEqual);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      const { nickname } = userInfo;
      if (isLogin) {
        props.history.push("/recommend");
        message.warning(`${nickname},您已登录~`);
      }
    }
  }, [isLogin, props.history]);

  return (
    <LoginWrapper>
      <XHLoginLeft />
      <XHLoginRight />
    </LoginWrapper>
  )
})
