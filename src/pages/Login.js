import React from 'react';

class Login extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o login'
  };

  render() {
    return (
    <h1>{this.state.boasvindas}</h1>
    );
  }
}

export default Login;
