import React, { Component } from "react";
import { createStore } from "redux"
import { Provider } from "react-redux"

// Importing CSS
import "./css/App.css";
import "./css/index.css";

import Functions from "./views/pages/functions";

import reducers from "./controllers/store"

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div id="cabecalho" />
          <Functions />
        </div>
      </Provider>
    );
  }
}

export default App;
