import React from 'react';
import { Field, Label, Control, Input } from 'rbx';
import Background from '../assets/jpg/background_login.jpg';

class Login extends React.Component {

  render() {
    const login = {
      backgroundImage: `url(${Background})`,
      objectFit: "cover",
      padding: "10px",
      width: "100vw",
      height:"100vh"
    };

    return (
    <section style={login}>
      <Field>
        <Label>Login</Label>
        <Control>
          <Input type="email" placeholder="ex: exemplo@exemplo.com"/>
        </Control>
      </Field>
      <Field>
        <Label>Senha</Label>
        <Control>
          <Input type="password"/>
        </Control>
      </Field>
    </section>
    );
  }
}

export default Login;
