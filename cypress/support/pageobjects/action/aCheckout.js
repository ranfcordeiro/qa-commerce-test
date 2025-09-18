/// <reference types="cypress" />

import { eCheckout } from "../Elements/eCheckout"


class checkout {

    preencherNome(nome) {
        cy.get(eCheckout.campos.txtNome)
        .should('exist')
        .clear()
        .type(nome)
    }

    preencherSobrenome(nome) {
        cy.get(eCheckout.campos.txtSobrenome)
        .should('exist')
        .clear()
        .type(nome)
    }

    preencherEndereco(endereco) {
        cy.get(eCheckout.campos.txtEndereco)
        .should('exist')
        .clear()
        .type(endereco)
    }

    preencherNumero(numero) {
        cy.get(eCheckout.campos.txtNumero)
        .should('exist')
        .clear()
        .type(numero)
    }

    preencherCep(cep) {
        cy.get(eCheckout.campos.txtCep)
        .should('exist')
        .clear()
        .type(cep)
    }

    preencherTelefone(tel) {
        cy.get(eCheckout.campos.txtTelefone)
        .should('exist')
        .clear()
        .type(tel)
    }
    
    preencherEmail(email) {
        cy.get(eCheckout.campos.txtEmail)
        .should('exist')
        .clear()
        .type(email)
    }
    
    selecionarFormaDePagamentoPix(){
        cy.get(eCheckout.radio.rdoPagamentoPix)
        .should('exist')
        .check()
    }

    marcarLiConcordoComTermos(){
        cy.get(eCheckout.checkbox.ckbTemos)
        .should('exist')
        .check()
    }

    clicarEmFinalizarPedido(){
        cy.wait(1000)
        cy.get(eCheckout.botoes.btnFinalizarPedido)
        .should('exist')
        .click()
    }

    validarMensagem(mensagem){
        cy.get(eCheckout.labels.lblMensagem)
        .should('exist')
        .contains(mensagem)
    }

    validarMensagensCamposObrigatorios(mensagem){
        cy.get(eCheckout.labels.lblMensagemCamposObrigatorios)
        .contains(mensagem)
    }

    validarMensagemNomeObrigatorio(mensagem){
        cy.get(eCheckout.labels.lblNomeObrigatorio)
        .contains(mensagem)
    }

    validarMensagemSobrenomeObrigatorio(mensagem){
        cy.get(eCheckout.labels.lblSobrenomeObrigatorio)
        .contains(mensagem)
    }

    validarMensagemEnderecoObrigatorio(mensagem){
        cy.get(eCheckout.labels.lblEnderecoObrigatorio)
        .contains(mensagem)
    }

    validarMensagemNumeroObrigatorio(mensagem){
        cy.get(eCheckout.labels.lblNumeroObrigatorio)
        .contains(mensagem)
    }

    validarMensagemCepObrigatorio(mensagem){
        cy.get(eCheckout.labels.lblCepObrigatorio)
        .contains(mensagem)
    }

    validarMensagemCepValido(mensagem){
        cy.get(eCheckout.labels.lblCepQuantidadeDeDigitos)
        .contains(mensagem)
    }

    validarMensagemEmailObrigatorio(mensagem){
        cy.get(eCheckout.labels.lblEmailObrigatorio)
        .contains(mensagem)
    }

    validarMensagemEmailValido(mensagem){
        cy.get(eCheckout.labels.lblEmailValido)
        .contains(mensagem)
    }

    validarMensagemTermosObrigatorios(mensagem){
        cy.get(eCheckout.labels.lblTermosObrigatorios)
        .contains(mensagem)
    }
}
export default new checkout