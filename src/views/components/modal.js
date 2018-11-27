import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal, Dropdown } from "semantic-ui-react";

class FuncionalidadeModal extends Component {
  constructor() {
    super();
    this.state = {
      funcionalidades: [],
      open: false,
      nome: " ",
      valor: 0.0,
      descricao: " ",
      id: 0
    };
  }
  componentDidMount = () => {
    this.getFuncionalidades()
  };
  close = () => {
    this.setState({ open: false, id: "", descricao: "", valor: 0, nome: "" });
  };
  getFuncionalidades = async () => {
    try {
      var res = await fetch("http://localhost:8000/api/funcionalidades", {
        "Content-Type": "application/json"
      });
      if (res.status === 200) {
        res = await res.json();
        this.setState({ funcionalidades: await res.data },() => {
          this.props.addFunc(this.state.funcionalidades[0])
          this.props.addFunc(this.state.funcionalidades[2])
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
    const { id, nome, valor, descricao } = JSON.parse(data.value);
    this.setState({
      id,
      nome,
      valor,
      descricao
    });
  };
  setNome = e => {
    this.setState({ nome: e.target.value });
  };
  setvalor = e => {
    this.setState({ valor: parseFloat(e.target.value) });
  };
  setDesc = e => {
    this.setState({ descricao: e.target.value });
  };
  add = e => {
    this.props.addFunc({
      id: this.state.id,
      nome: this.state.nome,
      valor: this.state.valor,
      descricao: this.state.descricao
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
              if(this.state.funcionalidades.length === 0) this.getFuncionalidades()
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
    addFunc: nova => dispatch({ type: "ADD_FUNC", data: nova }),
    alert: mes => {
      dispatch({ type: "SHOW_MESSAGE", data: { ...mes, show: true } });
      setTimeout(() => {
        dispatch({ type: "HIDE_MESSAGE" });
      }, 8000);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FuncionalidadeModal);
