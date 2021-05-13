import React, { memo } from 'react'

import XHLoginLeft from "./c-pages/login-left";
import XHLoginRight from "./c-pages/login-right";

import {
  LoginWrapper
} from "./style";

export default memo(function XHLogin() {
  return (
    <LoginWrapper>
      <XHLoginLeft />
      <XHLoginRight />
    </LoginWrapper>
  )
})
