import React from 'react';
import Mapa from '../components/map/Mapa';

class Painel extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o painel.'
  };

  render() {
    return (
      <div>
    <h1>{this.state.boasvindas}</h1>
    <Mapa/>
    </div>
    );
  }
}

export default Painel;