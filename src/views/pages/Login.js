/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";

import {connect } from "react-redux"

import { Transition, Checkbox } from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      visible: false,
      remember: false
    };
  }
  componentDidMount() {
    this.setState({ visible: true }, () => this.emailInput.focus());
  }
  submit = async ({ user, password }) => {
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        headers: {
          "Content-Type": "application-json"
        },
        method: "post",
        body: JSON.stringify({ user, password })
      })
      if(res.status === 200){
        const data = await res.json()
        this.props.login(data)
      }
      else if(res.status === 400)
        console.log(await res.text())
    } catch(e){
      console.log(e)
    }
  };
  render() {
    return (
      <Transition visible={this.state.visible} duration={3000} animation="fade">
        <div className="ui center aligned container">
          <div
            className="ui centered container card"
            style={{ marginTop: "12vh", maxWidth: "70%", minWidth: "40%" }}
          >
            <div className="center aligned content">
              <p className="header"> Conectar-se </p>
            </div>
            <div className="ui grid fluid content">
              <div className="ui input row">
                <input
                  placeholder="Usuário/E-mail"
                  ref={input => {
                    this.emailInput = input;
                  }}
                  onChange={e =>
                    this.setState({
                      user: e.target.value
                    })
                  }
                />
              </div>
              <div className="ui input row">
                <input
                  onChange={e =>
                    this.setState({
                      password: e.target.value
                    })
                  }
                  placeholder="Senha"
                  type="password"
                />
              </div>
              <Checkbox
                className="row"
                style={{ paddingBottom: 20 }}
                label="Mantenha-me conectado"
                onChange={e =>
                  this.setState({ remember: !this.state.remember })
                }
              />
              <button onClick={e => this.submit(this.state)} className="ui button primary">
                Conectar
              </button>
            </div>
          </div>
        </div>
      </Transition>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch({type: "LOGIN", data})
  }
}

export default connect(null,mapDispatchToProps)(Login)