/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import { Transition } from "semantic-ui-react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      visible: false
    };
  }
  componentDidMount() {
    this.setState({visible: true}, () => this.emailInput.focus());
  }
  render() {
    return (
      <Transition visible={this.state.visible} duration={3000} animation="fade">
        <div class="ui center aligned container">
          <div
            class="ui centered card"
            style={{ marginTop: "12vh", width: "fit-content" }}
          >
            <div class="center aligned content">
              <p class="header"> Conectar-se </p>
            </div>
            <div class="ui grid fluid content">
              <div class="ui input row">
                <input
                  placeholder="Usuário/email"
                  ref={input => {
                    this.emailInput = input;
                  }}
                />
              </div>
              <div class="ui input row">
                <input placeholder="Senha" type="password" />
              </div>
              <button type="submit" class="ui button primary">
                Conectar
              </button>
            </div>
          </div>
        </div>
      </Transition>
    );
  }
}
