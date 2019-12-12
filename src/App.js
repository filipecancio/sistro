import React from 'react';
import Mapa from './components/map/Mapa'

class App extends React.Component {

  state = {
    viewport: {
      latitude: -22.8218457,
      longitude: -47.0781176,
      zoom: 15,
    }
  };

  render() {
    return (
      <Mapa propriedades={this.state.viewport}/>
    );
  }
}

export default App;
