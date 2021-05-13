import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import {
  MineWrapper
} from "./style"

export default memo(function XHMine() {
  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["login", "isLogin"])
  }), shallowEqual);

  return (
    <MineWrapper>
      {isLogin ? <h2>XHMine</h2> : <h2>请登录</h2>}

    </MineWrapper>
  )
})
