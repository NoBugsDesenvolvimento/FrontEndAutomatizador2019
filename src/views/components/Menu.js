import React, { Component } from "react";

import { connect } from "react-redux";

import { Routes } from "../../controllers/router";
import Logo from "../../static/img/logo.png";

class Menu extends Component {
  render() {
    return (
      <div className="ui theme-color inverted fixed borderless menu">
        <a href="#/" className="item">
          <img src={Logo} alt="Logo" />
        </a>
        {Routes.map(rota =>
          rota.menu ? (
            <a
              style={{ fontSize: 20 }}
              key={rota.name}
              className="item"
              href={`/#${rota.rota}`}
            >
              {rota.name}
            </a>
          ) : (
            <div />
          )
        )}
        {this.props.user !== null && (
          <div className="right aligned item">
            Olá, {this.props.user.name.split(" ")[0]}
          </div>
        )}
        {this.props.user !== null && (
          <a href="#/" className="item" onClick={this.props.logoff}> Sair </a>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoff: e => dispatch({ type: "LOGOFF" })
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
