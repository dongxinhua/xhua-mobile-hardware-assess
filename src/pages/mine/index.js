import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
// import routes from '../../router';

import { getFuncList } from "@/services/user.js";

import {
  MineWrapper
} from "./style";



function XHMine(props) {
  const mineRoutes = props.route.routes;

  const [list, setList] = useState([]);

  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["login", "isLogin"])
  }), shallowEqual);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      getFuncList(userInfo.rank).then(res => {
        setList(res.data);
      })
    }
  }, [])

  const handelClick = (num) => {
    if (num === 0) {
      props.history.push("/mine");
    } else if (num === 1) {
      props.history.push("/mine/infochange");
    } else if (num === 2) {
      props.history.push("/mine/dataManage");
    } else {
      props.history.push("/mine/empower");
    }
  }

  return (
    <MineWrapper>
      {isLogin ? (
        <div>
          <div className="header">
            {
              list.map(item => {
                return (
                  <div className="item" onClick={e => handelClick(item.id)} key={item.id}>{item.name}</div>
                )
              })
            }
          </div>
          <div className="content wrap-v1">
            {
              renderRoutes(mineRoutes)
            }
          </div>
        </div>
      ) : (
        <div className="login wrap-v1">
          <div className="tips">
            没有登录不能查看相关内容，请先右上角进行登录哦~
          </div>
        </div>
      )}

    </MineWrapper>
  )
}

export default memo(withRouter(XHMine))
