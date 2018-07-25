import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      digitado: "0",
      words: "0"
    };
  }

  handleChange(event) {
    const change = event.target.value;
    const amount = change.length;
    //console.log(amount);
    const qtWord = change.split(/\S+/).length - 1;
    console.log(qtWord);
    this.setState({ digitado: amount });
    this.setState({ words: qtWord });
  }

  render() {
    return (
      <div className="App">
        <h1>Contador de Caracteres e Palavras Digitadas</h1>
        <h2>Digite uma frase</h2>
        <textarea onChange={this.handleChange.bind(this)} rows="8" cols="40" />
        <p>Quantidade de Caracteres: {this.state.digitado}</p>
        <p>Quantidade de Palavras: {this.state.words}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
