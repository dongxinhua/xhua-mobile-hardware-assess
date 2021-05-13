import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { xh_top_bar } from "@/common/local-data.js";
import { changeIsFLoginAction } from "@/pages/login/store/actionCreators.js"

import { Popover, Button } from "antd";
import { NavLink, withRouter } from 'react-router-dom'
import {
  XHHeaderWrapper,
  ContentLeft,
  ContentRight
} from "./style"

function XHHeader(props) {
  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);
  }, [setUserInfo]);

  const content = (
    <div>
      <Button className="tcdl" style={{"border": "0"}} onClick={e => outLogin()}>退出登录</Button>
    </div>
  );

  function outLogin() {
    // 退出登录
    localStorage.removeItem("userInfo");
    props.history.push("/login");
    dispatch(changeIsFLoginAction());
  }

  // 操作
  function login() {
    props.history.push("/login");
  }

  return (
    <XHHeaderWrapper>
      <div className="content wrap-v1">
        <ContentLeft>
          <a href="#/recommend" className="logo">Xhua-手机硬件测评</a>
          <div className="select-list">
            {
              xh_top_bar.map((item) => {
                return (
                  <div key={item.id} className="select-item">
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </div>
                )
              })
            }
          </div>
        </ContentLeft>
        <ContentRight>
          {
            !userInfo ?
              <div className="login" onClick={e => login()}>登录</div> :
              (
                <Popover content={content} trigger="click">
                  <div className="login">{userInfo.nickname}</div>
                </Popover>
              )
          }
        </ContentRight>
      </div>
    </XHHeaderWrapper>
  )
}

export default withRouter(memo(XHHeader));
