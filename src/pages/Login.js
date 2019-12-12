import React from 'react';
import { Field, Label, Control, Input, Button } from 'rbx';
import './Login.css';
import Header from '../components/header/Header';

class Login extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <section>
          <div class="login">
            <Field>
              <Label>Login</Label>
              <Control>
                <Input type="email" placeholder="ex: exemplo@exemplo.com" />
              </Control>
            </Field>
            <Field>
              <Label>Senha</Label>
              <Control>
                <Input type="password" />
              </Control>
            </Field>
            <Button color="dark">entrar</Button>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
