import React, { memo } from 'react'

import {
  AboutWrapper
} from "./style";

import skm from "@/assets/img/skm.png"

export default memo(function XHAbout() {
  return (
    <AboutWrapper>
      <div className="content wrap-v1">
        <div className="introduce">
          Xhua-手机硬件测评是 中北大学 软件学院 董鑫华 毕业设计所搭建的网站
        </div>
        <div className="introduce">
          秉承着开源的极客精神，旨在给与用户最好的体验！
        </div>
        <div className="introduce">
          如果获取到了想要的，可以请站长喝一杯咖啡~
        </div>
        <div className="imgBox">
          <img src={skm} alt=""/>
        </div>
      </div>
    </AboutWrapper>
  )
})
