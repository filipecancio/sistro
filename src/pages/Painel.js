import React from 'react';
import Mapa from '../components/map/Mapa';
import Header from '../components/header/Header';

class Painel extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o painel.'
  };

  render() {
    return (
      <div>
        <Header />
        <Mapa />
      </div>
    );
  }
}

export default Painel;