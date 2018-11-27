import React, { Component } from "react";

// Components
import FuncionalidadeModal from "../components/modal";
export default class Functions extends Component {
  constructor() {
    super();
    this.state = {
      funcionalidades: [],
      cliente: "",
      data: new Date(),
      validade: 7
    };
  }
  onSubmit = e => {};
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
            <tbody id="table" />
          </table>
          <div className="ui form">
            <div className="three fields">
              <div className="ui field">
                <label> Cliente </label>
                <input
                  id="cliente"
                  name="cliente"
                  type="text"
                  placeholder="Nome do cliente"
                />
              </div>
              <div className="ui field">
                <label> Data </label>
                <input type="date" value={this.data} />
              </div>
              <div className="ui field">
                <label> Validade (em dias) </label>
                <input type="number" value={this.validade} />
              </div>
            </div>
            <div className="ui centered">
              <div
                className="ui labeled icon button"
                onClick={this.onSubmit}
              >
                <i className="file alternate icon" />
                Gerar PESw
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
