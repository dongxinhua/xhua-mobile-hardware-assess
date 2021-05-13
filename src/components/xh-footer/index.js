import React, { memo } from 'react'

import {
  XHFooterWrapper,
  ContentLeft,
  ContentRight,
  ContentCenter
} from "./style"

export default memo(function XHFooter() {
  return (
    <XHFooterWrapper>
      <div className="content wrap-v1">
        <ContentLeft >
          <p>中北大学软件学院2017级毕业设计</p>
          <p>校外导师: 黄克刚</p>
          <p>校内导师: 付东来</p>

        </ContentLeft>
        <ContentCenter>
          <p>课题名称：手机硬件测评网站的设计与实现</p>
          <p>非盈利项目</p>
          <p>开源: <a href="http">github</a></p>
        </ContentCenter>
        <ContentRight>


          <p>设计者：董鑫华</p>
          <p>学号: 1713010548</p>
          <p>联系方式: 15934560007</p>
        </ContentRight>
      </div>
    </XHFooterWrapper>
  )
})
