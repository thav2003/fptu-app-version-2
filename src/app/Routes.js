/* eslint-disable import/extensions */
import React from "react";
import Loadable from "react-loadable";

import withAuthRouteComponent from "./utils/shared/auth/withAuthRouteComponent";

import Loading from "./modules/loading/Loading";

const withAuth = withAuthRouteComponent("/login");

const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: "login" */ "./modules/account/account.tsx"),
  loading: () => <Loading />,
  modules: ["../app/modules/account/account.tsx"],
  webpack: () => [require.resolveWeak("../app/modules/account/account.tsx")],
});

const Confessions = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "confessions" */ "./modules/confessions/confessionsPage"
    ),
  loading: () => <Loading />,
  modules: ["../app/modules/confessions/confessionsPage"],
  webpack: () => [
    require.resolveWeak("../app/modules/confessions/confessionsPage"),
  ],
});
const LandingPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "landing" */ "./modules/landing-page/LandingPage"
    ),
  loading: () => <Loading />,
  modules: ["../app/modules/landing-page/LandingPage"],
  webpack: () => [
    require.resolveWeak("../app/modules/landing-page/LandingPage"),
  ],
});
const StudyPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "study" */ "./modules/study/StudyPage"),
  loading: () => <Loading />,
  modules: ["../app/modules/study/StudyPage"],
  webpack: () => [require.resolveWeak("../app/modules/study/StudyPage")],
});

export default [
  {
    path: "/",
    title: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/confessions",
    title: "Confessions",
    component: Confessions,
  },
  {
    path: "/study",
    title: "Study",
    component: StudyPage,
  },

  {
    path: "/login",
    title: "Login",
    component: Login,
  },
];
