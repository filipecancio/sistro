import React from 'react';

class Mensagem extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o mensagem.'
  };

  render() {
    return (
    <h1>{this.state.boasvindas}</h1>
    );
  }
}

export default Mensagem;