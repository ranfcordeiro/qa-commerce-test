export class eCheckout {

    static botoes = {

        btnFinalizarPedido: '.btn',

    }

    static labels = {

        lblMensagem: '.container',
        lblMensagemCamposObrigatorios: '#alert-container > p',
        lblNomeObrigatorio: ':nth-child(2) > .invalid-feedback',
        lblSobrenomeObrigatorio: ':nth-child(3) > .invalid-feedback',
        lblEnderecoObrigatorio: ':nth-child(4) > .invalid-feedback',
        lblNumeroObrigatorio: ':nth-child(5) > .invalid-feedback',
        lblCepObrigatorio: ':nth-child(6) > :nth-child(3)',
        lblCepQuantidadeDeDigitos: ':nth-child(6) > :nth-child(4)',
        lblEmailObrigatorio: ':nth-child(8) > :nth-child(3)',
        lblEmailValido: ':nth-child(8) > :nth-child(4)',
        lblTermosObrigatorios: '.form-group.form-check > .invalid-feedback',
    }

    static campos = {

        txtNome: '#first-name',
        txtSobrenome: '#last-name',
        txtEndereco: '#address',
        txtNumero: '#number',
        txtCep: '#cep',
        txtTelefone: '#phone',
        txtEmail: '#email',

    }

    static radio = {

        rdoPagamentoPix: '#payment-pix',
    }

    static checkbox = {
        ckbTemos: '#terms',
    }


}