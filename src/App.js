import React from 'react';
import ReactMapGL from 'react-map-gl';

class App extends React.Component {

  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    token:'pk.eyJ1IjoiY2FuY2l0b28iLCJhIjoiY2s0MjNjbXRsMDd5NDNuc3dwNWtxdG42bSJ9.Nyqu8tg03uh6k7SOu9wx0w'
  };

  render() {
    return (
      <ReactMapGL mapboxApiAccessToken = {this.state.token}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default App;
