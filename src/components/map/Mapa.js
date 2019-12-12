import React from 'react';
import ReactMapGL from 'react-map-gl';

class Mapa extends React.Component {
    state = {
        viewport: {
          width: '100vw',
          height: '100vh',
          
          mapboxApiAccessToken: 'pk.eyJ1IjoiY2FuY2l0b28iLCJhIjoiY2s0MjNjbXRsMDd5NDNuc3dwNWtxdG42bSJ9.Nyqu8tg03uh6k7SOu9wx0w'
        },
      };
    
      render() {
        let  propriedades = this.props.propriedades;
        return (
          <ReactMapGL
            {...this.state.viewport} {...propriedades}
            onViewportChange={(viewport) => this.setState({viewport})}
          />
        );
}}

export default Mapa;