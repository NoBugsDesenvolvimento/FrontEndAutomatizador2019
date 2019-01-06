import React, { Component } from "react";
import { Funcionalidades } from ".";

export default class Documentos extends Component {
  render() {
    const doc = this.props.match.params.doc;
    switch (doc) {
      case "pesw":
        return <Funcionalidades />;
      default:
        return (
          <div className="ui centered container">
            <div className="ui stackable placeholder raised segment">
              <div className="ui two column stackable center aligned grid">
                <div class="ui vertical divider">ou</div>
                <div className="middle aligned row">
                  <div class="column">
                    <div class="ui icon header">
                      <i class="file alternate icon" />
                      Gerar novo PESw
                    </div>
                    <a class="ui primary button" href="#/documentos/pesw">
                      Abrir
                    </a>
                  </div>
                  <div class="column">
                    <div class="ui icon header">
                      <i class="file alternate icon" />
                      Gerar novo Contrato
                    </div>
                    <a class="ui primary button" href="#/documentos/contrato">
                      Abrir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}
