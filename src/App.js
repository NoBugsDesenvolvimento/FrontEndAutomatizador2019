/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Menu from "./views/components/Menu"

// Importando CSS and images
import "./css/App.css";
import "./css/index.css";

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
          <Menu/>
          <Roteador />
        </div>
      </Provider>
    );
  }
}

export default App;
