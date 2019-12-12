import React from 'react';
import { Field, Label, Control, Input, Button } from 'rbx';
import Header from '../components/header/Header';
import Background from '../assets/jpg/background_login_medium.jpg';
import "rbx/index.css";

class Login extends React.Component {

  render() {

    const login = {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };
    const loginSection = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div>
        <Header />
        <section style={loginSection}>
          <div style={login}>
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
