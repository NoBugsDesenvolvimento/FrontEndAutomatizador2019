/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/12/2018
*/

import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal, Dropdown } from "semantic-ui-react";

class FuncionalidadeModal extends Component {
  constructor() {
    super();
    this.state = {
      funcionalidades: [],
      open: false,
      name: " ",
      value: 0.0,
      description: " ",
      id: 0
    };
  }
  componentDidMount = () => {
    this.getFuncionalidades();
  };
  close = () => {
    this.setState({ open: false, id: "", description: "", value: 0, name: "" });
  };
  getFuncionalidades = async () => {
    try {
      var res = await fetch("http://localhost:8000/api/funcionalidades", {
        "Content-Type": "application/json"
      });
      if (res.status === 200) {
        res = await res.json();
        this.setState({ funcionalidades: await res }, () => {
          // Se a lista houver vazia, não foi inicializado.
          if (this.props.lista.length === 0) {
            this.props.addFunc(this.state.funcionalidades[0]);
            this.props.addFunc(this.state.funcionalidades[2]);
          }
        });
      } else if (res.status === 500) {
        res = {
          ...res,
          message: "Erro de servidor. Entre em contato com o Administrador."
        };
        throw res;
      }
    } catch (Error) {
      this.props.alert(res);
    }
  };
  onChange = (e, data) => {
    const { id, name, value, description } = JSON.parse(data.value);
    this.setState({
      id,
      name,
      value,
      description
    });
  };
  setName = e => {
    this.setState({ name: e.target.value });
  };
  setValue = e => {
    this.setState({ value: parseFloat(e.target.value) });
  };
  setDesc = e => {
    this.setState({ description: e.target.value });
  };
  add = e => {
    this.props.addFunc({
      id: this.state.id,
      name: this.state.name,
      value: this.state.value,
      description: this.state.description
    });
    this.close();
    this.props.alert({
      status: 200,
      message: "Adicionado com sucesso!"
    });
  };
  render() {
    return (
      <Modal
        open={this.state.open}
        size="tiny"
        trigger={
          <div
            className="ui labeled icon button"
            onClick={() => {
              if (this.state.funcionalidades.length === 0)
                this.getFuncionalidades();
              this.setState({ open: true });
            }}
          >
            <i className="plus icon" />
            Acrescentar funcionalidade
          </div>
        }
      >
        <Modal.Header>Inserir funcionalidade</Modal.Header>
        <div className="centered scrolling content ui form">
          <div className="ui form">
            <div className="ui field">
              <label>Tipo</label>
              <Dropdown
                loading={this.state.funcionalidades.length === 0 ? true : false}
                placeholder="Escolha a funcionalidade"
                selection
                onChange={this.onChange}
                options={this.state.funcionalidades.map(opcao => {
                  return {
                    key: opcao.id,
                    value: JSON.stringify(opcao),
                    text: opcao.name
                  };
                })}
              />
            </div>
            <div className="ui field focus">
              <label>name</label>
              <input
                value={this.state.name}
                onChange={this.setName}
                placeholder="name da funcionalidade"
              />
            </div>
            <div className="ui field">
              <label>Descrição</label>
              <textarea
                onChange={this.setDesc}
                value={this.state.description}
                rows="3"
              />
            </div>
            <div className="ui field focus">
              <label>Preço</label>
              <div className="ui left labeled input">
                <label className="ui label" htmlFor="value">
                  R$
                </label>
                <input
                  value={this.state.value}
                  onChange={this.setValue}
                  id="value"
                  type="number"
                  step="0.01"
                  placeholder="Preço da funcionalidade"
                />
              </div>
            </div>
          </div>
        </div>
        <Modal.Actions>
          <Button negative onClick={this.close}>
            Fechar
          </Button>
          <Button positive onClick={this.add}>
            Adicionar
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFunc: nova => dispatch({ type: "ADD_FUNC", data: nova }), // Ação que adiciona funcionalidade à lista
    alert: msg => {
      dispatch({ type: "SHOW_MESSAGE", data: { ...msg, show: true } }); // Exibe mensagem de alerta
      setTimeout(() => {
        dispatch({ type: "HIDE_MESSAGE" }); // Oculta mensagem de alerta
      }, 8000);
    }
  };
};

const mapStateToProps = state => {
  return {
    lista: state.funcionalidades // Recupera a lista de funcionalidades escolhidas
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuncionalidadeModal);
