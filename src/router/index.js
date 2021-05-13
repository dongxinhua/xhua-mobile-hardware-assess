import { lazy } from "react";

import { Redirect } from "react-router-dom"

const XHRecommend = lazy(() => import("@/pages/recommend"));
const XHEvaluation = lazy(() => import("@/pages/evaluation"));
const XHContrast = lazy(() => import("@/pages/contrast"));
const XHMine = lazy(() => import("@/pages/mine"));
const XHAbout = lazy(() => import("@/pages/about"));
const XHLogin = lazy(() => import("@/pages/login"));

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
    component: XHMine
  },
  {
    path: "/about",
    component: XHAbout
  },
  {
    path: "/login",
    component: XHLogin
  },

];

export default routes;