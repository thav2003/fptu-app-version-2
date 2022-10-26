import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Link, withRouter } from "react-router-dom";


import MyLayout from "./layout/Layout";
import Routes from "./Routes";
import NotFound from "./modules/not-found/NotFound";
import Error from "./modules/error/Error";
type Props = {
  location: Location;
};

type State = {
  hasError: boolean;
  errorText: string;
};

type Location = {
  pathname: string;
};

class App extends Component<Props, State> {
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
    //console.log(this.state,this.props);
    return (
      <>
        {hasError && <Error error={errorText} />}
        {!hasError && (
          <Switch>
            {Routes.map(route => {
              return (
                <Route
                  exact={route.path==="/" && true}
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            })}
            
            <Route path="*" component={NotFound} />
          </Switch>
        )}
      </>
    );
  }
}

export default withRouter(App);
