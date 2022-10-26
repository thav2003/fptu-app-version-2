/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { loadReCaptcha } from "react-recaptcha-google";
import App from "./App";
import AdminPage from "./modules/admincp/admin";

import "./Main.scss";

function Main(props) {
  useEffect(() => {
    loadReCaptcha();
  }, []);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={App} />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
