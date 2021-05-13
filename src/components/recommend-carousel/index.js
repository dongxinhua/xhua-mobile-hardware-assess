import React, { memo, forwardRef } from 'react';

import { Carousel } from 'antd';
import { RecommendCarouselWrapper } from "./style";

 const XHRecommendCarousel = (props, ref) => {
  const { recommendCarouselData } = props;
  return (
    <RecommendCarouselWrapper>
      <Carousel autoplay ref={ref}>
        {
          recommendCarouselData.map(item => {
            return (
              <div key={item.id}>
                <div className="carousel">
                  <img src={item.imgUrl} alt="" className="img" title={item.content}/>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </RecommendCarouselWrapper>
  )
}

export default memo(forwardRef(XHRecommendCarousel));
