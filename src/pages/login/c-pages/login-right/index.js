import React, { memo, useCallback, useState } from 'react';

import { Button } from "antd";
import { LoginRightWrapper } from "./style";
import XHLoginArea from '@/components/login-area';
import XHRegisterArea from '@/components/register-area';

export default memo(function XHLoginRight() {
  const [loginType, setLoginType] = useState(true);

  const changeLoginType = useCallback((type) => {
    setLoginType(type);
  }, [setLoginType])

  return (
    <LoginRightWrapper loginType={loginType}>
      <div className="content">
        <div className="type">
          <Button onClick={e => changeLoginType(true)} className="login">登录</Button>
          <Button onClick={e => changeLoginType(false)} className="register">注册</Button>
        </div>
        <div className="input-box">
          {
            loginType ? <XHLoginArea /> : <XHRegisterArea changeLoginType={changeLoginType}/>
          }
        </div>
      </div>
    </LoginRightWrapper>
  )
})
