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
        <div style={{ textAlign: "center" }}>基本信息展示</div>
        <div className="info">
          <div className="info-item">
            昵称: {userInfo.nickname}
          </div>
          <div className="info-item">
            账号: {userInfo.username}
          </div>
          <div className="info-item">
            性别: {userInfo.sex == null ? null : (userInfo.sex === 0 ? "女" : "男")}
          </div>
          <div className="info-item">
            年龄: {userInfo.age}
          </div>
        </div>
      </div>
    </InfoWrapper>
  )
})
