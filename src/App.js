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
import Roteador, { Routes } from "./controllers/router";

// Importando e criando a Store
import reducers from "./controllers/store";
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="ui theme-color inverted fixed borderless menu">
            <a href="#/" className="item">
              <img src={Logo} alt="Logo" />
            </a>
            {Routes.map(rota => rota.menu ?
                <a style={{ fontSize: 20 }} key={rota.name} className="item" href={`/#${rota.rota}`}>
                  {rota.name}
                </a> : <div/>)
            }
          </div>
          <Roteador />
        </div>
      </Provider>
    );
  }
}

export default App;
