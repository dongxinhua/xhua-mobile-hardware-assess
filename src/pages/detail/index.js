import React, { memo, useEffect, useState } from 'react';

import { getInformation } from "@/services/info.js";

import { DetailWrapper } from "./style"

export default memo(function XHDetail(props) {

  const [infoContent, setInfoContent] = useState({});
  // const [flag, setFlag] = useState(0);

  useEffect(() => {
    const flag = props.match.params.id;
    getInformation(flag).then(res => {
      setInfoContent(res.data);
    });
    // setFlag(flag);
  }, [props.match.params.id]);

  const back = () => {
    props.history.push("/recommend");
  }

  // useEffect(() => {
  //   getInformation(flag).then(res => {
  //     setInfoContent(res.data);
  //   });
  // }, [flag]);

  return (
    <DetailWrapper>
      <div className="content wrap-v1">
        <div className="header">
          <div className="back" onClick={e => back()}>{`< 返回`}</div>
          <div className="title">{infoContent.title}</div>
          <div className="time">{infoContent.time}</div>
        </div>
        <div className="main">
          {
            infoContent.content && infoContent.content.map(item => {
              if (item.type === "text") {
                return (
                  <p key={item.id} className="text">{item.text}</p>
                )
              } else {
                return (
                  <img src={item.url} key={item.id} className="img" alt="" />
                )
              }
            })
          }
        </div>
      </div>
    </DetailWrapper>
  )
})
