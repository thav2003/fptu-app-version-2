/* eslint-disable import/extensions */
import React from "react";
import Loadable from "react-loadable";

import withAuthRouteComponent from "../../utils/shared/auth/withAuthRouteComponent";

import Loading from "../loading/Loading";

const withAuth = withAuthRouteComponent("/login");

const Dashboard = Loadable({
  loader: () =>
    import(/* webpackChunkName: "dashboard" */ "../dashboard/dashboard"),
  loading: () => <Loading />,
  modules: ["../app/modules/dashboard/dashboard"],
  webpack: () => [require.resolveWeak("../dashboard/dashboard")],
});
const XetDuyet = Loadable({
  loader: () =>
    import(/* webpackChunkName: "xetduyet" */ "../xet-duyet/xet-duyet.tsx"),
  loading: () => <Loading />,
  modules: ["../app/modules/xet-duyet/xet-duyet.tsx"],
  webpack: () => [require.resolveWeak("../xet-duyet/xet-duyet.tsx")],
});
const LichSu = Loadable({
  loader: () =>
    import(/* webpackChunkName: "lichsu" */ "../lich-su/lich-su.tsx"),
  loading: () => <Loading />,
  modules: ["../app/modules/lich-su/lich-su.tsx"],
  webpack: () => [require.resolveWeak("../lich-su/lich-su.tsx")],
});
const XoaBai = Loadable({
  loader: () =>
    import(/* webpackChunkName: "xoabai" */ "../xoa-bai/xoa-bai.tsx"),
  loading: () => <Loading />,
  modules: ["../app/modules/xoa-bai/xoa-bai.tsx"],
  webpack: () => [require.resolveWeak("../xoa-bai/xoa-bai.tsx")],
});
const DangBai = Loadable({
  loader: () =>
    import(/* webpackChunkName: "dangbai" */ "../dang-bai/dang-bai.tsx"),
  loading: () => <Loading />,
  modules: ["../app/modules/dang-bai/dang-bai.tsx"],
  webpack: () => [require.resolveWeak("../dang-bai/dang-bai.tsx")],
});

export default [
  {
    path: "/admin/dang-bai",
    title: "DangBai",
    //component: withAuth(DangBai),
    component: DangBai,
  },
  {
    path: "/admin/xoa-bai",
    title: "XoaBai",
    component: XoaBai,
    //component: withAuth(XoaBai),
  },
  {
    path: "/admin/lich-su",
    title: "LichSu",
    //component: withAuth(LichSu),
    component: LichSu,
  },
  {
    path: "/admin/xet-duyet",
    title: "XetDuyet",
    //component: withAuth(XetDuyet),
    component: XetDuyet,
  },
  {
    path: "/admin",
    title: "Dashboard",
    //component: withAuth(Dashboard),
    component: Dashboard,
  },
];
