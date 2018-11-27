import React, { Component } from "react";

import { Button, Modal, Dropdown } from "semantic-ui-react";

export default class FuncionalidadeModal extends Component {
  constructor() {
    super();
    this.state = {
      funcionalidades: [],
      open: false,
      nome: " ",
      valor: 0,
      descricao: " "
    };
  }
  componentDidMount = async function() {
    var res = await fetch("http://localhost:8000/api/funcionalidades", {
      "Content-Type": "application/json"
    });
    res = await res.json();
    this.setState({ funcionalidades: await res.data });
  };
  close = () => {
    this.setState({ open: false });
  };
  onChange = (e, data) => {
    const { nome, valor, descricao } = JSON.parse(data.value);
    this.setState({
      nome,
      valor,
      descricao
    });
  };
  setNome = e => {
    this.setState({ nome: e.target.value });
  };
  setvalor = e => {
    this.setState({ valor: e.target.value });
  };
  setDesc = e => {
    this.setState({ descricao: e.target.value });
  };
  submit = () => {};
  render() {
    return (
      <Modal
        open={this.state.open}
        size="tiny"
        trigger={
          <div
            className="ui labeled icon button"
            onClick={() => {
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
                placeholder="Escolha a funcionalidade"
                selection
                onChange={this.onChange}
                options={this.state.funcionalidades.map(opcao => {
                  return {
                    key: opcao.id,
                    value: JSON.stringify(opcao),
                    flag: "",
                    text: opcao.nome
                  };
                })}
              />
            </div>
            <div className="ui field focus">
              <label>Nome</label>
              <input
                value={this.state.nome}
                onChange={this.setNome}
                placeholder="Nome da funcionalidade"
              />
            </div>
            <div className="ui field">
              <label>Descrição</label>
              <textarea
                onChange={this.setDesc}
                value={this.state.descricao}
                rows="3"
              />
            </div>
            <div className="ui field focus">
              <label>Preço</label>
              <div className="ui left labeled input">
                <label className="ui label" htmlFor="valor">
                  R$
                </label>
                <input
                  value={this.state.valor}
                  onChange={this.setvalor}
                  id="valor"
                  type="number"
                  step="any"
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
          <Button positive onClick={this.submit}>
            Adicionar
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
