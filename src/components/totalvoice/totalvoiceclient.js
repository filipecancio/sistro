const totalvoice = require('totalvoice-node');
const client = new totalvoice("");

const sendSms = (telefone,mensagem) => (
    client.sms.enviar(telefone, mensagem)
        .then(function (data) {
            console.log(data);
            alert(data.mensagem);
            return data;
        })
        .catch(function (error) {
            console.error('Erro: ', error);
            alert('Erro: ', error);
        })
    );

const getSms = (id) => (client.sms.buscar(id)
    .then(function(data) {
        console.log(data);
        alert(data.preco);
        return data;
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    })
    );

export default sendSms;
export {getSms};