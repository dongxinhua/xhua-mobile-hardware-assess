import React, { memo, useRef } from 'react';

import { recommendCarouselData } from "@/common/local-data.js";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import XHRecommendCarousel from "@/components/recommend-carousel";
import {
  RecommendWrapper
} from "./style";

export default memo(function XHRecommend() {
  const carouselRef = useRef();

  return (
    <RecommendWrapper>
      <div className="carousel wrap-v1">
        <XHRecommendCarousel recommendCarouselData={recommendCarouselData} ref={carouselRef}/>
        <div className="left" onClick={e => carouselRef.current.prev()}><LeftOutlined /></div>
        <div className="right" onClick={e => carouselRef.current.next()}><RightOutlined /></div>
      </div>
    </RecommendWrapper>
  )
})
