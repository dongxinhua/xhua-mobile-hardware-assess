import React, { memo, Suspense, useEffect, useState } from 'react'
import { Provider, useDispatch } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import routes from "@/router";
import store from './store';
import { changeIsLoginAction, changeIsFLoginAction } from "@/pages/login/store/actionCreators.js"

import XHHeader from "../src/components/xh-header";
import XHFooter from "../src/components/xh-footer";

import { HashRouter, withRouter } from 'react-router-dom';

function App(props) {
  const [flag, setFlag] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.location.pathname === "/login") {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, [props.location.pathname]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      dispatch(changeIsLoginAction());
    } else {
      dispatch(changeIsFLoginAction());
    }
  }, [dispatch]);

  // useEffect(() => {
  //   const user = localStorage.getItem("userInfo");
  //   if (!user) {
  //     console.log("未登录");
  //     props.history.push("/login");
  //   }
  // }, [props.history])

  return (
    <Provider store={store}>
      <HashRouter>
        {flag && <XHHeader />}
        <Suspense fallback={<div>page loading...</div>}>
          {
            renderRoutes(routes)
          }
        </Suspense>
        {flag && <XHFooter />}
      </HashRouter>
    </Provider>
  )
}

export default withRouter(memo(App));
