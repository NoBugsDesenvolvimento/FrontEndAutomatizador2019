import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import FuncionalidadeModal from "../components/Modal";
import { Message } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

class FunctionList extends Component {
  constructor() {
    super();
    this.state = {
      cliente: "",
      data: new Date().toLocaleDateString("pt"),
      validade: 7,
      analista: ""
    };
  }
  dismissMessage = e => {
    this.props.closeMessage();
  };
  setDate = (e,{value}) => {
    this.setState({data: value})
  }
  handleAnalista = e => this.setState({analista: e.target.value})
  handleValidade = e => this.setState({validade: e.target.value})
  render() {
    return (
      <div>
        <header>
          <title> Gerar novo PESw </title>
        </header>
        <div className="ui centered container">
          <input
            type="hidden"
            name="funcionalidades"
            id="funcionalidades"
            value="[]"
          />
          <FuncionalidadeModal />
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody id="table">
              {this.props.funcionalidades.map(func => (
                <tr key={func.nome+func.descricao}>
                  <td className="collapsing">{func.nome}</td>
                  <td className="collapsing">R$ {func.valor.toFixed(2)}</td>
                  <td>{func.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="ui form">
            <div className="two fields">
              <div className="ui field">
                <label> Analista </label>
                <input
                  value={this.state.analista}
                  onChange={this.handleAnalista}
                  type="text"
                  placeholder="Nome do analista"
                />
              </div>
              <div className="ui field">
                <label> Cliente </label>
                <input
                  value={this.state.nome}
                  type="text"
                  placeholder="Nome do cliente"
                />
              </div>
            </div>
            <div className="two fields">
              <div className="ui field">
                <label> Data </label>
                <DateInput onChange={this.setDate} value={this.state.data} iconPosition="left" />
              </div>
              <div className="ui field">
                <label> Validade (em dias) </label>
                <input onChange={this.handleValidade} type="number" value={this.state.validade} />
              </div>
            </div>
            <div className="ui centered">
              <div className="ui labeled icon button" onClick={this.onSubmit}>
                <i className="file alternate icon" />
                Gerar PESw
              </div>
            </div>
          </div>
        </div>
        <div
          className="message-box"
          hidden={this.props.message_open ? false : true}
        >
          <Message
            className="messages"
            floating
            onDismiss={this.dismissMessage}
            compact
            header={
              this.props.message_status !== 200
                ? "Ops! Algo está errado.."
                : "Tudo pronto!"
            }
            color={this.props.message_status !== 200 ? "red" : "green"}
            hidden={this.props.message_open ? false : true}
            content={this.props.message_text}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    funcionalidades: state.funcionalidades,
    message_open: state.message.show,
    message_status: state.message.status,
    message_text: state.message.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeMessage: () => dispatch({ type: "HIDE_MESSAGE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionList);
