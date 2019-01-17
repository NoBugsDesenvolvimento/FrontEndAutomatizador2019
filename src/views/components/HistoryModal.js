/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 15/01/2019
*/

import React, { Component } from "react";

import { Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";

class HistoryModal extends Component {
  state = {
    open: false,
    history: [],
    selected: null
  };
  componentDidMount = () => {
    this.fetchHistory();
  };
  // Fecha a modal
  close = e => {
    this.setState({ open: false });
  };
  // Abre a Modal
  open = async e => {
    this.fetchHistory();
    this.setState({ open: true });
  };
  // Seleciona a linha da tabela
  selectRow = id => {
    if (this.state.selected === id) {
      this.setState({ selected: null });
    } else this.setState({ selected: id });
  };
  // Requisita os histórico de documentos da API
  fetchHistory = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/history");
      this.setState({ history: await res.json() });
    } catch (error) {}
  };
  // Envia o documento selecionado para a store
  updateDoc = e => {
    const doc = this.state.history.filter(doc => doc.id === this.state.selected)[0]
    this.props.dispatchDoc(doc)
    this.close()
  }
  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={this.close}
        trigger={
          <div className="ui labeled icon button" onClick={this.open}>
            <i className="history icon" />
            Ver histórico
          </div>
        }
      >
        <Header icon="history" content="Histórico de Documentos" />
        <div className="centered scrolling content ui form">
          <div className="ui form">
            <table className="ui selectable celled table">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Data</th>
                  <th>Usuário</th>
                </tr>
              </thead>
              <tbody>
                {this.state.history.map(doc => {
                  const { cliente, data } = JSON.parse(doc.data);
                  return (
                    <tr
                      className={
                        doc.id === this.state.selected ? "active green" : ""
                      }
                      onClick={e => this.selectRow(doc.id)}
                      key={"doc-"+doc.id}
                    >
                      <td>PESw para {cliente}</td>
                      <td>{data}</td>
                      <td>{doc.autor}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Modal.Actions>
          <div className="ui red icon labeled button" onClick={this.close}>
            <i className="close icon" />
            Fechar
          </div>
          {this.state.selected !== null && (
            <div className="ui green icon labeled button" onClick={this.updateDoc}>
              <i className="arrow right icon" />
              Usar
            </div>
          )}
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchDoc: (doc) => dispatch({type: "SET_DOC", doc})
  }
}

export default connect(null, mapDispatchToProps)(HistoryModal);
