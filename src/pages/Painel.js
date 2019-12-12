import React from 'react';
import Mapa from '../components/map/Mapa';

class Painel extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o painel.'
  };

  render() {
    return (
      <div>
    <Mapa/>
    </div>
    );
  }
}

export default Painel;