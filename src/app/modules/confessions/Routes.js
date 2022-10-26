import React from "react";
import { Link } from "react-router-dom";
import Loadable from "react-loadable";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import Loading from "../loading/Loading";
const Send = Loadable({
  loader: () => import(/* webpackChunkName: "send" */ "./send"),
  loading: () => <Loading />,
  modules: ["../app/modules/confessions/send"],
  webpack: () => [require.resolveWeak("./send")],
});
const Myconfess = Loadable({
  loader: () => import(/* webpackChunkName: "myconfess" */ "./my-confess"),
  loading: () => <Loading />,
  modules: ["../app/modules/confessions/my-confess"],
  webpack: () => [require.resolveWeak("./my-confess")],
});
const Confess = Loadable({
  loader: () => import(/* webpackChunkName: "myconfess" */ "./confess"),
  loading: () => <Loading />,
  modules: ["../app/modules/confessions/confess"],
  webpack: () => [require.resolveWeak("./confess")],
});

export default {
  confess: {
    getRoute: url => url,
    title: "Confession",
    component: Confess,
  },
  send: {
    getRoute: url => `${url}/send`,
    title: "Gửi confess",
    component: Send,
  },
  myconfess: {
    getRoute: url => `${url}/myconfess`,
    title: "Confess của tui",
    component: Myconfess,
  },
};
