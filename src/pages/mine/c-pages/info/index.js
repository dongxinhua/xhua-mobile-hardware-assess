import React, { memo, useEffect } from 'react';
import { useState } from 'react';

import { InfoWrapper } from "./style";

export default memo(function XHInfo() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);
  }, [setUserInfo])

  return (
    <InfoWrapper>
      <div className="content">
        <div style={{ textAlign: "center" }}>个人基本信息</div>
        <div className="info">
          <div className="info-item">
            昵 称: <span>{userInfo.nickname}</span>
          </div>
          <div className="info-item">
            账 号: <span>{userInfo.username}</span>
          </div>
          <div className="info-item">
            性 别: <span>{userInfo.sex == null ? null : (userInfo.sex === 0 ? "女" : "男")}</span>
          </div>
          <div className="info-item">
            年 龄: <span>{userInfo.age}</span>
          </div>
        </div>
      </div>
    </InfoWrapper>
  )
})
