import React, { Component } from 'react';

export default class Page extends Component {
    render(){
        return(
            <div>
            <head>
                <title> Gerar novo PESw </title>
            </head>
    <div class="ui centered container">
        <form action="/pesw/pdf" method="POST" target="_blank">
            <input type="hidden" name="funcionalidades" id="funcionalidades" value="[]"/>
            <div class="ui labeled icon button" onclick="$('#nova-funcionalidade').modal('show')">
                <i class="plus icon"></i>
                Acrescentar funcionalidade
            </div>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody id="table">
                </tbody>
            </table>
            <div class="ui form">
                <div class="three fields">
                    <div class="ui field">
                        <label> Cliente </label>
                        <input id="cliente" name="cliente" type="text" placeholder="Nome do cliente"/>
                    </div>
                    <div class="ui field">
                            <label> Data </label>
                            <input id="data" name="data" type="date" value=""/>
                    </div>
                    <div class="ui field">
                            <label> Validade (em dias) </label>
                            <input id="validade" name="validade" type="number" value="7"/>
                    </div>
                </div>
                <div class="ui centered">
                    <button class="ui labelled icon button" type="submit">
                        <i class="paper icon"></i>
                        Gerar PESw
                    </button>
                </div>
            </div>
        </form>
    </div>
    </div>
    );
    }
}