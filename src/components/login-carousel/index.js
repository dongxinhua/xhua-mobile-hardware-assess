import React, { memo } from 'react';

import { Carousel } from 'antd';
import { LoginCarouselWrapper } from "./style";

export default memo(function XHLoginCarousel(props) {
  const { carouselData } = props;
  return (
    <LoginCarouselWrapper>
      <Carousel effect="fade" autoplay dots={false}>
        {
          carouselData.map(item => {
            return (
              <div key={item.id}>
                <div className="carousel">{item.content}</div>
              </div>
            )
          })
        }
      </Carousel>
    </LoginCarouselWrapper>
  )
})
