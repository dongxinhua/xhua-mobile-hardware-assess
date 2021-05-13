import React, { memo } from 'react';

import { carouselData } from "@/common/local-data.js"

import XHLoginCarousel from "@/components/login-carousel"
import { LoginLeftWrapper } from "./style";

export default memo(function XHLoginLeft() {


  return (
    <LoginLeftWrapper>
      <>
        <XHLoginCarousel carouselData={carouselData} />
      </>
    </LoginLeftWrapper>
  )
})
