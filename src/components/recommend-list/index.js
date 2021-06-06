import React, { memo, useEffect, useState } from 'react';

import { getInformationList } from "@/services/info.js";

import { List } from 'antd';
import { RecommendListWrapper } from "./style";
import { withRouter } from 'react-router';

function XHRecommendList(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    getInformationList().then(res => {
      setList(res.data);
    })
  }, []);

  const toDetail = (id) => {
    props.history.push(`/detail/${id}`)
  }


  return (
    <RecommendListWrapper>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={list}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.imgUrl}
                onClick={e => toDetail(item.flag)}
                className="img"
              />
            }
          >
            <List.Item.Meta
              title={<div className="title" onClick={e => toDetail(item.flag)}>{item.title}</div>}
              description={item.time}
            />
            {item.content[0].text}
          </List.Item>
        )}
      />
    </RecommendListWrapper>
  )
}

export default memo(withRouter(XHRecommendList));
