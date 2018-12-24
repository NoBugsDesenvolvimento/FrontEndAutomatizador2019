/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

// Importando CSS and images
import "./css/App.css";
import "./css/index.css";
import Logo from "./static/img/logo.png";

// Importando router
import Roteador from "./controllers/router";

// Importando e criando a Store
import reducers from "./controllers/store";
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div class="ui theme-color inverted borderless menu">
            <a href="#/" class="item">
              <img src={Logo} alt="Logo" />
            </a>
            <a class="item" href="/#/">
              Inicial
            </a>
            <a class="item" href="/#/funcionalidades">
              Funcionalidades
            </a>
          </div>
          <Roteador />
        </div>
      </Provider>
    );
  }
}

export default App;
