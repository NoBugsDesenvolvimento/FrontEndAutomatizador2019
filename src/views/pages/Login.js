import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount(){
    this.emailInput.focus();
  }
  render() {
    return (
      <div class="ui center aligned container">
        <div
          class="ui centered card transition fade in"
          style={{ marginTop: "12vh", width: "fit-content" }}
        >
          <div class="center aligned content">
            <p class="header"> Conectar-se </p>
          </div>
            <div class="ui grid fluid content">
              <div class="ui input row">
                <input placeholder="Usuário/email" ref={input => { this.emailInput = input}} />
              </div>
              <div class="ui input row">
                <input placeholder="Senha" />
              </div>
              <button type="submit" class="ui button primary">
                Conectar
              </button>
            </div>
        </div>
      </div>
    );
  }
}
