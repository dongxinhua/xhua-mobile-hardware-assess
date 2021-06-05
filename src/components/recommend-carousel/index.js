import React, { memo, useRef } from 'react';

import { Carousel } from 'antd';
import { RecommendCarouselWrapper } from "./style";
import { withRouter } from 'react-router';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const XHRecommendCarousel = (props) => {
  const { recommendCarouselData } = props;
  const carouselRef = useRef();

  const toDetail = (id) => {
    props.history.push(`/detail/${id}`)
  }

  return (
    <RecommendCarouselWrapper>
      <Carousel autoplay ref={carouselRef}>
        {
          recommendCarouselData.map(item => {
            return (
              <div key={item.id}>
                <div className="carousel" onClick={e => toDetail(item.id)}>
                  <img src={item.imgUrl} alt="" className="img" title={item.title} />
                </div>
              </div>
            )
          })
        }
      </Carousel>
      <div className="left" onClick={e => carouselRef.current.prev()}><LeftOutlined /></div>
      <div className="right" onClick={e => carouselRef.current.next()}><RightOutlined /></div>
    </RecommendCarouselWrapper>
  )
}

export default memo(withRouter(XHRecommendCarousel));
