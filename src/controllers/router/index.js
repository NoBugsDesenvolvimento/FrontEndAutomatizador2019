/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { connect } from "react-redux"

// Importando componentes
import { Documentos, Home } from "../../views/pages"

import { getCookie } from "../../js/login";


export const Routes = [
  { name: "Inicial", rota: "/" , path: "/", Component: Home, exact: true, menu: true },
  { name: "Documentos", rota: "/documentos" , path: "/documentos/:doc?", Component: Documentos, exact: false, menu: true },
];

class Routing extends Component {
  async componentDidMount(){
    let token = getCookie("token")
    if (token !== undefined){
      const res = await fetch(`http://localhost:8000/api/token/${token}`)
      const data = await res.json()
      this.props.login(data)
    }
  }
  routes = [
    { name: "Inicial", rota: "/" , path: "/", Component: Home , exact: true, menu: true },
    { name: "Documentos", rota: "/documentos" , path: "/documentos/:doc?", Component: Documentos, exact: false, menu: true },
  ];
  render() {
    return (
      <HashRouter>
        <Switch>
          {this.routes.map(route => (
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

const mapStateToProps = state => {
  return { 
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch({type: "SET_USER", user})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Routing)