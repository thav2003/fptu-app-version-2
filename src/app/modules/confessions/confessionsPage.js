import React, { useState, useEffect, createRef, useRef } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Tabs } from "antd";
import _each from "lodash/each";
import _map from "lodash/map";
import MyLayout from "../../layout/Layout";
import Routes from "./Routes";

const ConfessionsPage = props => {
  const { history, match } = props;
  const { url, path } = match;
  const tabToRouteMap = {};
  const routeToTabsMap = {};
  _each(Routes, (configObj, routeKey) => {
    const routeURL = configObj.getRoute(url);
    tabToRouteMap[routeKey] = routeURL;
    routeToTabsMap[routeURL] = routeKey;
  });
  const defaultActiveKey = routeToTabsMap[history.location.pathname];
  const tabPaneNodes = _map(Routes, (configObj, routeKey) => {
    return {
      label: configObj.title,
      key: routeKey,
    };
  });
  const routeNodes = _map(Routes, (configObj, routeKey) => (
    <Route
      exact
      path={configObj.getRoute(path)}
      key={routeKey}
      component={configObj.component}
    />
  ));
  const onTabChange = activeKey => {
    //console.log(tabToRouteMap, routeToTabsMap, history);
    history.push(tabToRouteMap[activeKey]);
  };

  return (
    <MyLayout>
      <div className="cfsPage mt-24 xl:px-16 mx-auto sm:px-8 min-h-[500px] bg-[#fff]">
        <div className="mx-auto  w-full sm:w-10/12  pt-5 m-5 lg:pt-10 text-gray-800">
          <Tabs
            type="card"
            size="small"
            onChange={onTabChange}
            activeKey={defaultActiveKey}
            //defaultActiveKey={defaultActiveKey}
            items={tabPaneNodes}
          />
          <Switch>{routeNodes}</Switch>
        </div>
      </div>
    </MyLayout>
  );
};

export default ConfessionsPage;
