/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";

// Importando componentes
import { Login, Documentos } from "../../views/pages"

export const Routes = [
  { name: "Inicial", rota: "/" , path: "/", Component: Login, exact: true, menu: true },
  { name: "Documentos", rota: "/documentos" , path: "/documentos/:doc?", Component: Documentos, exact: false, menu: true },
];

export default class Routing extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {Routes.map(route => (
            <Route
              key={route.path}
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
