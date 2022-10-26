import React, { Component } from "react";
import { Layout } from "antd";

import { Switch, Route, withRouter } from "react-router-dom";
import Routes from "./Routes";
import SideBar from "./sideBar";
import NotFound from "../not-found/NotFound";
import Error from "../error/Error";
const { Header, Footer } = Layout;

type Location = {
  pathname: string;
};
type Props = {
  location: Location;
};

type State = {
  hasError: boolean;
  errorText: string;
};


class AdminPage extends  Component<Props, State>  {
  state = {
    hasError : false,
    errorText: "",
  };
  static getDerivedStateFromError(error): State {
    return {
      hasError : true,
      errorText: error.toString(),
    };
  }

  render() {
    const { location } = this.props;
    const { hasError, errorText } = this.state;
    console.log(this.props,this.state);
    return (
     
        <Layout className="min-h-[100vh] h-fit w-auto">
          <SideBar {...this.props} tab={location.pathname} />
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
              {hasError && <Error error={errorText} />}
              <Switch>
                {Routes.map((route, i) => (
                  <Route
                    key={i}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                ))}
                <Route path="*" component={NotFound} />
              </Switch>
              
            <Footer style={{ textAlign: "center", padding: 16 }}>
              FPTU HCM ©2022 Created by Ynnub2804
            </Footer>
          </Layout>
        </Layout>
  
    );
  }
}

export default withRouter(AdminPage);
