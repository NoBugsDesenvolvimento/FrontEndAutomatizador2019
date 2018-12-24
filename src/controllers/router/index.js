/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";

// Importando componentes
import { Login, Funcionalidades } from "../../views/pages"

export const Routes = [
  { name: "Inicial", path: "/", Component: Login, exact: true },
  { name: "Funcionalidades", path: "/funcionalidades", Component: Funcionalidades, exact: false },
];

export default class Routing extends Component {
  render() {
    return (
      <HashRouter basename="#">
        <Switch>
          {Routes.map(route => (
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
