import React from 'react';
import Header from '../components/header/Header';

class Mensagem extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o mensagem.'
  };

  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.boasvindas}</h1>
      </div>
    );
  }
}

export default Mensagem;