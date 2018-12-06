/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";

// Importando componentes
import { Login, Funcionalidades } from "../../views/pages";
import { Transition } from "semantic-ui-react";

export default class Routing extends Component {
  Routes = [
    { path: "/", Component: Login, exact: true },
    { path: "/funcionalidades", Component: Funcionalidades, exact: false }
  ];

  render() {
    return (
      <HashRouter basename="#">
        <Switch>
          {this.Routes.map(route => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.Component}
            />
          ))}
        </Switch>
      </HashRouter>
    );
  }
}
