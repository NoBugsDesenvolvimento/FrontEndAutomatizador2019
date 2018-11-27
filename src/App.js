import React, { Component } from 'react';
import './css/App.css';
import "./css/index.css"

import Functions from "./views/pages/functions"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="cabecalho"></div>
        <Functions/>
      </div>
    );
  }
}

export default App;
