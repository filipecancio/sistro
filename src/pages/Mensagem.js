import React from 'react';
import Header from '../components/header/Header';
import { Control, Field, Button, Input } from 'rbx';
import sendSms,{getSms} from '../components/totalvoice/totalvoiceclient';

class Mensagem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Enviamos a mensagem: ' + this.state.value + ' para o motorista.');
    var data = sendSms("77991444746",this.state.value);
    getSms(data.dados.id);
    event.preventDefault();
  }

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
          <form onSubmit={this.handleSubmit}>
            <Field kind="group">
              <Control expanded>
                <Input value={this.state.value} onChange={this.handleChange} />
              </Control>
              <Control>
                <Button type="submit"  color="info">Enviar</Button>
              </Control>
            </Field>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Mensagem;