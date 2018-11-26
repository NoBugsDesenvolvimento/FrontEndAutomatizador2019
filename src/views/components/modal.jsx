import React, { Component } from 'react';

import { Modal } from "react-semantic-ui"

export default class Modal extends Component {
    render(){
        return(
        <Modal size="tiny"trigger={
            <div class="ui labeled icon button">
                <i class="plus icon"></i>
                Acrescentar funcionalidade
            </div>
            }>
            <Modal.header>
                Inserir funcionalidade
            </Modal.header>
            <div class="centered scrolling content ui form">
                <div class="ui form">
                    <div class="ui field">
                        <label>Tipo</label>
                        <select id="select-funcionalidade" onselect="preencheFuncionalidade(); return false;">
                            { this.state.funcionalidades.map(opcao => (
                                opcao.id !== 1 &&
                                    <option value={opcao}> { opcao.nome } </option>
                                )
                                )}
                        </select>
                    </div>
                    <div class="ui field">
                        <button class="ui icon button" onclick="preencheFuncionalidade()">
                            <i class="arrow down icon"></i>
                            Completar
                        </button>
                    </div>
                    <input hidden id="id-funcionalidade" type="number"/>
                    <div class="ui field focus">
                        <label>Nome</label>
                        <input id="nome-funcionalidade" placeholder="Nome da funcionalidade"/>
                    </div>
                    <div class="ui field">
                        <label>Descrição</label>
                        <textarea id="descricao-funcionalidade" rows="3"></textarea>
                    </div>
                    <div class="ui field focus">
                            <label>Preço</label>
                            <input id="valor-funcionalidade" type="number" step="any" placeholder="Preço da funcionalidade"/>
                        </div>
                </div>
            </div>
            <div class="actions">
                <button class="ui red button" onclick="$('#nova-funcionalidade').modal('hide')">Fechar</button>
                <button class="ui green button" onclick="addFuncionalidade()">Adicionar</button>
            </div>
        </Modal>
        )
    }
}