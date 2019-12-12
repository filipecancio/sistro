import React from 'react';
import { Field, Label, Control, Input, Button } from 'rbx';
import './Login.css';

class Login extends React.Component {

  render() {

    return (
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
    );
  }
}

export default Login;
