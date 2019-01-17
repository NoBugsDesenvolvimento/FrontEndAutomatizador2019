import React, { Component } from "react";

import { connect } from "react-redux";
import Login from "./Login"

class Home extends Component {
  componentDidMount() {
  }
  render() {
      console.log(this.props.user)
    if (this.props.user !== null) {
      return (
        <div className="ui container fluid">
            <div className="ui left aligned container card">
                <h1>Seja bem vindo, {this.props.user.name.split(" ")[0]}!</h1>         
            </div>
        </div>
      );
    }
    else {
       return <Login/>
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
