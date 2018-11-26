import React, { Component } from 'react';

import { Modal } from "semantic-ui-react"

export default class FuncionalidadeModal extends Component {
    constructor(){
        super()
        this.state = {
            funcionalidades: [],
            open: false
        }
    }
    close = () => { this.setState({open: false}) }
    render(){
        return(
        <Modal open={this.state.open}size="tiny" trigger={
            <div className="ui labeled icon button">
                <i className="plus icon"></i>
                Acrescentar funcionalidade
            </div>
            }>
            <Modal.Header>
                Inserir funcionalidade
            </Modal.Header>
            <div className="centered scrolling content ui form">
                <div className="ui form">
                    <div className="ui field">
                        <label>Tipo</label>
                        <select id="select-funcionalidade" onselect="preencheFuncionalidade(); return false;">
                            { this.state.funcionalidades.map(opcao => (
                                opcao.id !== 1 &&
                                    <option value={opcao}> { opcao.nome } </option>
                                )
                                )}
                        </select>
                    </div>
                    <div className="ui field">
                        <button className="ui icon button" onclick="preencheFuncionalidade()">
                            <i className="arrow down icon"></i>
                            Completar
                        </button>
                    </div>
                    <input hidden id="id-funcionalidade" type="number"/>
                    <div className="ui field focus">
                        <label>Nome</label>
                        <input id="nome-funcionalidade" placeholder="Nome da funcionalidade"/>
                    </div>
                    <div className="ui field">
                        <label>Descrição</label>
                        <textarea id="descricao-funcionalidade" rows="3"></textarea>
                    </div>
                    <div className="ui field focus">
                            <label>Preço</label>
                            <input id="valor-funcionalidade" type="number" step="any" placeholder="Preço da funcionalidade"/>
                        </div>
                </div>
            </div>
            <Modal.Actions>
                <button negative onClick={this.close}>Fechar</button>
                <button positive >Adicionar</button>
            </Modal.Actions>
        </Modal>
        )
    }
}