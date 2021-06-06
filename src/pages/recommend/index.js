import React, { memo } from 'react';

import { recommendCarouselData } from "@/common/local-data.js";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import XHRecommendCarousel from "@/components/recommend-carousel";
import XHRecommendList from "@/components/recommend-list";
import {
  RecommendWrapper
} from "./style";

export default memo(function XHRecommend() {
  // const carouselRef = useRef();

  return (
    <RecommendWrapper>
      <div className="carousel wrap-v1">
        <XHRecommendCarousel recommendCarouselData={recommendCarouselData} />
        {/* <div className="left" onClick={e => carouselRef.current.prev()}><LeftOutlined /></div>
        <div className="right" onClick={e => carouselRef.current.next()}><RightOutlined /></div> */}
      </div>
      <div className="list wrap-v1">
        <div className="info">热门资讯</div>
        <XHRecommendList />
      </div>
    </RecommendWrapper>
  )
})
