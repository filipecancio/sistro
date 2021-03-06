import React from 'react';
import ReactMapGL from 'react-map-gl';

class Mapa extends React.Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: -22.8218457,
      longitude: -47.0781176,
      zoom: 15,
      mapboxApiAccessToken: 'pk.eyJ1IjoiY2FuY2l0b28iLCJhIjoiY2s0MjNjbXRsMDd5NDNuc3dwNWtxdG42bSJ9.Nyqu8tg03uh6k7SOu9wx0w'
    },
  };

  render() {
    //let propriedades = this.props.propriedades;
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}

export default Mapa;