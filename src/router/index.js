import { lazy } from "react";

import { Redirect } from "react-router-dom"

const XHRecommend = lazy(() => import("@/pages/recommend"));
const XHEvaluation = lazy(() => import("@/pages/evaluation"));
const XHContrast = lazy(() => import("@/pages/contrast"));
const XHMine = lazy(() => import("@/pages/mine"));
const XHAbout = lazy(() => import("@/pages/about"));
const XHLogin = lazy(() => import("@/pages/login"));
const XHInfo = lazy(() => import("@/pages/mine/c-pages/info"));
const XHInfoChange = lazy(() => import("@/pages/mine/c-pages/info-change"));
const XHDataConcrol = lazy(() => import("@/pages/mine/c-pages/data-control"));
const XHEmpower = lazy(() => import("@/pages/mine/c-pages/empower"));
const XHDetail = lazy(() => import("@/pages/detail"));

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/recommend" />
    )
  },
  {
    path: "/recommend",
    component: XHRecommend
  },
  {
    path: "/evaluation",
    component: XHEvaluation
  },
  {
    path: "/data-contrast",
    component: XHContrast
  },
  {
    path: "/mine",
    component: XHMine,
    routes: [
      {
        path: "/mine",
        exact: true,
        component: XHInfo
      },
      {
        path: "/mine/infochange",
        component: XHInfoChange
      },
      {
        path: "/mine/dataManage",
        component: XHDataConcrol
      },
      {
        path: "/mine/empower",
        component: XHEmpower
      }
    ]
  },
  {
    path: "/about",
    component: XHAbout
  },
  {
    path: "/login",
    component: XHLogin
  },
  {
    path: "/detail/:id",
    component: XHDetail
  }
];

export default routes;