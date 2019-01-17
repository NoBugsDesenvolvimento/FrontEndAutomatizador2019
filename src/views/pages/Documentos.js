/*
    Autor: Matheus dos Reis <matheusdrdj@gmail.com>
    Data: 06/01/2019
*/

import React, { Component } from "react";
import { Funcionalidades } from ".";

import { connect } from "react-redux";

class Documentos extends Component {
  state = {
    history: [],
    selected: null
  };
  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/history");
      this.setState({ history: await res.json() });
    } catch (error) {}
  };
  selectDoc = doc => {
    this.props.dispatchDoc(doc);
    this.props.history.push("/documentos/pesw")
  };
  render() {
    const doc = this.props.match.params.doc;
    switch (doc) {
      case "pesw":
        return <Funcionalidades />;
      default:
        return (
          <div className="ui centered container">
            <h1>Documentos</h1>
            <div className="ui stackable placeholder raised segment">
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">ou</div>
                <div className="middle aligned row">
                  <div class="column">
                    <div className="ui icon header">
                      <i className="file alternate icon" />
                      Gerar novo PESw
                    </div>
                    <a className="ui primary button" href="#/documentos/pesw">
                      Abrir
                    </a>
                  </div>
                  <div className="column">
                    <div className="ui icon header">
                      <i className="file alternate icon" />
                      Gerar novo Contrato
                    </div>
                    <a
                      className="ui primary button"
                      href="#/documentos/contrato"
                    >
                      Abrir
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h1>Histórico de Documentos</h1>
            <table className="ui selectable celled table">
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Data</th>
                  <th>Usuário</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.history.map(doc => {
                  const { cliente, data } = JSON.parse(doc.data);
                  return (
                    <tr
                      className={
                        doc.id === this.state.selected ? "active" : ""
                      }
                      key={"doc-" + doc.id}
                    >
                      <td>{doc.type === "pesw" ? "PESw" : doc.type === "contrato" ? "Contrato" : ""} para {cliente}</td>
                      <td>{data}</td>
                      <td>{doc.autor}</td>
                      <td className="collapsing">
                        <div className="primary button ui" onClick={e => this.selectDoc(doc)}>
                          Usar
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchDoc: doc => dispatch({ type: "SET_BACKUP", doc })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Documentos);
