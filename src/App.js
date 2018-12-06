import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Importing CSS
import "./css/App.css";
import "./css/index.css";

// Importando router
import Roteador from "./controllers/router";

// Import and create store
import reducers from "./controllers/store";
const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <div id="cabecalho" />
          <Roteador/>
        </div>
      </Provider>
    );
  }
}

export default App;
