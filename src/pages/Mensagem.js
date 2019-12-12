import React from 'react';
import Header from '../components/header/Header';
import { Control, Field, Button, Input } from 'rbx';

class Mensagem extends React.Component {

  state = {
    boasvindas: 'oi! Aqui é o mensagem.'
  };

  render() {
    const mensagemSection = {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
    const historico = {
      width: '100%',
      height: '530px',
      overflow: 'scroll'
    }
    const mensagem = {
      width: '100%',
      padding: '20px',
      backgroundColor: '#a6a6a6',
    }
    return (
      <div>
        <Header />
        <section style={mensagemSection}>
          <div style={historico}></div>
          <div style={mensagem}>
            <Field kind="group">
              <Control expanded>
                <Input placeholder="Digite a mensagem" />
              </Control>
              <Control>
                <Button color="info">Enviar</Button>
              </Control>
            </Field>
          </div>
        </section>
      </div>
    );
  }
}

export default Mensagem;