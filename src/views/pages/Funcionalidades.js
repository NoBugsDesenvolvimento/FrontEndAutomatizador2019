import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import FuncionalidadeModal from "../components/Modal";
import { Message } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

class Funcionalidades extends Component {
  constructor() {
    super();
    this.state = {
      cliente: "",
      data: new Date().toLocaleDateString("pt"),
      valido: new Date().toLocaleDateString("pt"),
      validade: 7,
      analista: "",
      token: ""
    };
  }
  async componentDidMount() {
    const res = await fetch("http://localhost:8000/api/token/1");
    this.setState({ token: await res.json() });
  }
  dismissMessage = e => {
    this.props.closeMessage();
  };
  setDate = (e, { value }) => {
    let valido = new Date(value)
    valido = valido.setDate(valido.getDate() + this.state.validade)
    this.setState({ data: value, valido });

  };
  handleAnalista = e => this.setState({ analista: e.target.value });
  handleValidade = e => this.setState({ validade: e.target.value });
  handleVisao = e => this.setState({ visao: e.target.value})
  render() {
    return (
      <div>
        <header>
          <title> Gerar novo PESw </title>
        </header>
        <div className="ui left aligned container">
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
                <th></th>
              </tr>
            </thead>
            <tbody id="table">
              {this.props.funcionalidades.map((func,index) => (
                <tr key={func.name + func.description}>
                  <td className="collapsing">{func.name}</td>
                  <td className="collapsing">R$ {func.value.toFixed(2)}</td>
                  <td>{func.description}</td>
                  <td className="collapsing">
                    <div className="ui icon error button" onClick={e => this.props.remove(index)}>
                      <i className="remove icon"/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <form
            method="post"
            target="_blank"
            action="http://localhost:8000/pesw/pdf"
          >
            <div className="ui form">
              <div className="two fields">
                <div className="ui field">
                  <label> Analista </label>
                  <input
                    name="analista"
                    value={this.state.analista}
                    onChange={this.handleAnalista}
                    type="text"
                    placeholder="Nome do analista"
                  />
                </div>
                <div className="ui field">
                  <label> Cliente </label>
                  <input
                    name="cliente"
                    value={this.state.nome}
                    type="text"
                    placeholder="Nome do cliente"
                  />
                </div>
              </div>
              <div className="two fields">
                <div className="ui field">
                  <label> Data </label>
                  <DateInput
                    onChange={this.setDate}
                    value={this.state.data}
                    iconPosition="left"
                  />
                </div>
                <div className="ui field">
                  <label> Validade (em dias) </label>
                  <input
                    onChange={this.handleValidade}
                    name="validade"
                    type="number"
                    value={this.state.validade}
                  />
                </div>
              </div>
              <div className="ui field">
                <label> Visão Geral do Produto</label>
                <textarea
                  name="visao"
                  rows="5"
                  onChange={this.setVisao}
                  value={this.state.visao}
                />
              </div>
              <div className="ui centered">
                <button type="submit" className="ui labeled icon button">
                  <i className="file alternate icon" />
                  Gerar PESw
                </button>
              </div>
              <input hidden name="token" value={this.state.token} />
              <input hidden name="valido" value={this.state.valido} />
              <input
                hidden
                name="funcionalidades"
                value={JSON.stringify(this.props.funcionalidades)}
              />
            </div>
          </form>
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
    closeMessage: () => dispatch({ type: "HIDE_MESSAGE" }),
    remove: (index) => dispatch({type: "REMOVE_FUNC", index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Funcionalidades);
